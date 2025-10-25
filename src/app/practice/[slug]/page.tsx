
'use client';

import { useState, useEffect, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { trafficSigns } from '@/lib/data';
import type { MCQ, TrafficSign } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle, XCircle, ChevronLeft, ChevronRight, Home, RefreshCw, Loader2, Award } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getTrafficSignPracticeQuestion, updateUserXp } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';

const topicMap: { [key: string]: string } = {
  'rules': 'Driving Rules & Regulations',
  'mandatory': 'Mandatory',
  'warning': 'Warning',
  'informatory': 'Informatory',
};

export default function PracticeSlugPage() {
  const params = useParams();
  const { toast } = useToast();
  const [questions, setQuestions] = useState<MCQ[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const slug = params.slug as string;
  const topicName = topicMap[slug];

  const generateQuestions = async () => {
    setIsLoading(true);
    if (!topicName) {
      notFound();
      return;
    }

    let filteredSigns: TrafficSign[];
    if (slug === 'rules') {
      // For now, if it's rules, we show nothing as we only generate from signs.
      // This can be expanded later.
      setQuestions([]);
      setIsLoading(false);
      return;
    } else {
      filteredSigns = trafficSigns.filter(q => q.category.toLowerCase() === slug);
    }
    
    const shuffled = [...filteredSigns].sort(() => 0.5 - Math.random());
    const selectedSigns = shuffled.slice(0, 10);

    if (selectedSigns.length === 0) {
        setQuestions([]);
        setIsLoading(false);
        return;
    }

    const generatedQuestions: MCQ[] = [];

    for (const sign of selectedSigns) {
        const result = await getTrafficSignPracticeQuestion(sign.id);
        if (result.data) {
            generatedQuestions.push({
                id: sign.id,
                topic: sign.category,
                question: result.data.question,
                options: result.data.options,
                correctOption: result.data.correctOption,
                explanation: result.data.explanation,
                imageId: sign.imageId,
            });
        }
    }
    
    setQuestions(generatedQuestions);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsCorrect(null);
    setScore(0);
    setQuizFinished(false);
    setIsLoading(false);
  }

  useEffect(() => {
    generateQuestions();
  }, [slug]);

  const restartQuiz = () => {
    generateQuestions();
  }

  if (!topicName) {
    notFound();
    return null;
  }

  if (isLoading) {
    return (
      <div className="container py-12 text-center">
        <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
        <h1 className="mt-4 text-2xl font-bold">Generating practice questions for {topicName}...</h1>
        <p className="text-muted-foreground">Our AI is creating a fresh set of questions for you. Please wait a moment.</p>
      </div>
    );
  }
  
  if (questions.length === 0 && !isLoading) {
    return (
        <div className="container py-12 text-center">
            <h1 className="text-2xl font-bold">No questions found for {topicName}</h1>
            <p className="text-muted-foreground">We couldn't generate any questions for this topic. Please try another one.</p>
             <Button onClick={restartQuiz} className="mt-4">
                <RefreshCw className="mr-2"/>
                Try Again
              </Button>
        </div>
    )
  }


  if (quizFinished) {
    return (
      <div className="container py-12 text-center max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Quiz Complete!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl text-muted-foreground">You have completed the quiz on</p>
            <p className="text-2xl font-semibold text-primary mb-4">{topicName}</p>
            <p className="text-4xl font-bold mb-2">Your Score: {score} / {questions.length}</p>
            <Progress value={(score / questions.length) * 100} className="mb-6 h-4" />
            <div className="flex gap-4 justify-center">
               <Button onClick={restartQuiz}>
                <RefreshCw className="mr-2"/>
                Try Again
              </Button>
              <Button asChild variant="outline">
                <Link href="/practice">
                  <Home className="mr-2" />
                  More Topics
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const currentQuestion = questions[currentQuestionIndex];
  if (!currentQuestion) return null;

  const image = currentQuestion.imageId ? PlaceHolderImages.find((img) => img.id === currentQuestion.imageId) : null;

  const handleOptionSelect = async (optionKey: string) => {
    if (selectedOption !== null) return;

    const correct = optionKey === currentQuestion.correctOption;
    setSelectedOption(optionKey);
    setIsCorrect(correct);
    if (correct) {
      setScore(prev => prev + 1);
      const res = await updateUserXp(5);
      if (res.success) {
        toast({
            title: "+5 XP Earned!",
            description: "You're getting better!",
            action: <Award className="h-5 w-5 text-yellow-500" />,
        });
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsCorrect(null);
    } else {
      setQuizFinished(true);
    }
  };

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-4">
        <Link href="/practice" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary">
          <ChevronLeft /> Back to Topics
        </Link>
        <h1 className="text-xl font-bold">{topicName}</h1>
        <div className="text-sm font-bold">
          {currentQuestionIndex + 1} / {questions.length}
        </div>
      </div>

      <Progress value={((currentQuestionIndex + 1) / questions.length) * 100} className="mb-8 h-2" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center justify-center bg-muted/50 rounded-lg p-8">
          {image ? (
            <Image
              src={image.imageUrl}
              alt={image.description ?? 'Traffic Sign'}
              width={300}
              height={300}
              className="object-contain"
            />
          ) : <div className='h-[300px] flex items-center justify-center text-muted-foreground'>No image for this question.</div>}
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>{currentQuestion.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(currentQuestion.options).map(([key, value]) => (
                  <Button
                    key={key}
                    variant="outline"
                    className={cn(
                      "w-full justify-start h-auto py-3 text-left",
                      selectedOption !== null && key === currentQuestion.correctOption && "bg-green-100 border-green-500 text-green-800 hover:bg-green-200",
                      selectedOption === key && !isCorrect && "bg-red-100 border-red-500 text-red-800 hover:bg-red-200"
                    )}
                    onClick={() => handleOptionSelect(key)}
                    disabled={selectedOption !== null}
                  >
                    <div className="flex items-center">
                       <div className="mr-4 flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary font-bold text-primary">
                        {key.toUpperCase()}
                      </div>
                      <span>{value}</span>
                    </div>
                  </Button>
                ))}
              </div>

              {selectedOption && (
                <div className="mt-6">
                  <Alert variant={isCorrect ? "default" : "destructive"} className={isCorrect ? 'border-green-500' : 'border-red-500'}>
                    {isCorrect ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                    <AlertTitle>{isCorrect ? "Correct! (+5 XP)" : "Incorrect"}</AlertTitle>
                    <AlertDescription>
                      {currentQuestion.explanation}
                    </AlertDescription>
                  </Alert>

                  <Button onClick={handleNextQuestion} className="w-full mt-4">
                    {currentQuestionIndex < questions.length - 1 ? "Next Question" : "Finish Quiz"}
                    <ChevronRight className="ml-2"/>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
