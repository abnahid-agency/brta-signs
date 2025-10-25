
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { mcqs } from '@/lib/data';
import type { MCQ } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle, XCircle, ChevronLeft, ChevronRight, Home, RefreshCw, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ShieldCheck } from "lucide-react";


const TOTAL_QUESTIONS = 20;
const TIME_LIMIT_SECONDS = 20 * 60; // 20 minutes

export default function MockTestPage() {
  const [questions, setQuestions] = useState<MCQ[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT_SECONDS);

  useEffect(() => {
    const shuffled = [...mcqs].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, TOTAL_QUESTIONS));
  }, []);
  
  useEffect(() => {
    if (!quizStarted || quizFinished) return;

    if (timeLeft === 0) {
      setQuizFinished(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [quizStarted, quizFinished, timeLeft]);


  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsCorrect(null);
    setScore(0);
    setQuizFinished(false);
    setTimeLeft(TIME_LIMIT_SECONDS);
    const shuffled = [...mcqs].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, TOTAL_QUESTIONS));
  };


  if (!quizStarted) {
    return (
       <div className="container py-12 text-center">
        <ShieldCheck className="mx-auto h-12 w-12 text-primary" />
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl font-headline">
          Mock Exam
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          Prepare for the real test with our timed mock exams. You will have 20 minutes to answer 20 questions.
        </p>

        <Card className="mx-auto mt-12 max-w-lg text-left">
          <CardHeader>
            <CardTitle>Ready to start?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Click the button below to begin a new mock exam session.
            </p>
            <Button onClick={startQuiz} className="mt-6 w-full" size="lg">
              Start Mock Exam
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }


  if (quizFinished) {
    const pass = (score / questions.length) >= 0.5;
    return (
      <div className="container py-12 text-center max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Quiz Complete!</CardTitle>
          </CardHeader>
          <CardContent>
            {timeLeft === 0 && <p className="text-lg font-semibold text-destructive mb-2">Time's up!</p>}
            <p className="text-4xl font-bold mb-2">Your Score: {score} / {questions.length}</p>
            <Progress value={(score / questions.length) * 100} className="mb-4 h-4" />
            <p className={`text-2xl font-bold mb-6 ${pass ? 'text-green-600' : 'text-destructive'}`}>
                {pass ? 'Congratulations, you passed!' : 'Unfortunately, you did not pass.'}
            </p>
            <div className="flex gap-4 justify-center">
               <Button onClick={startQuiz}>
                <RefreshCw className="mr-2"/>
                Try Again
              </Button>
              <Button asChild variant="outline">
                <Link href="/">
                  <Home className="mr-2" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const currentQuestion = questions[currentQuestionIndex];
  if (!currentQuestion) return null; // Should not happen if quizFinished is handled correctly

  const image = currentQuestion.imageId ? PlaceHolderImages.find((img) => img.id === currentQuestion.imageId) : null;

  const handleOptionSelect = (optionKey: string) => {
    if (selectedOption !== null) return; // Already answered

    const correct = optionKey === currentQuestion.correctOption;
    setSelectedOption(optionKey);
    setIsCorrect(correct);
    if (correct) {
      setScore(prev => prev + 1);
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
  
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };


  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-4">
         <div className="flex items-center gap-2 text-lg font-bold text-primary">
            <Clock className="h-6 w-6"/>
            <span>{formatTime(timeLeft)}</span>
         </div>
        <div className="text-sm font-bold">
          Question {currentQuestionIndex + 1} / {questions.length}
        </div>
      </div>

      <Progress value={((currentQuestionIndex + 1) / questions.length) * 100} className="mb-8 h-2" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center justify-center bg-muted/50 rounded-lg p-8">
          {image ? (
            <Image
              src={image.imageUrl}
              alt={image.description || 'Question-related image'}
              width={300}
              height={300}
              className="object-contain"
            />
          ) : <div className='h-[300px] flex items-center justify-center text-muted-foreground'>No image for this question.</div>}
          <p className="mt-4 text-center font-semibold text-xl">{currentQuestion.question}</p>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Select the correct answer</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(currentQuestion.options).map(([key, value]) => {
                  if (!value) return null;
                  return (
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
                  )
                })}
              </div>

              {selectedOption && (
                <div className="mt-6">
                  <Alert variant={isCorrect ? "default" : "destructive"} className={isCorrect ? 'border-green-500' : 'border-red-500'}>
                    {isCorrect ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                    <AlertTitle>{isCorrect ? "Correct!" : "Incorrect"}</AlertTitle>
                    <AlertDescription>
                      Correct Answer: {currentQuestion.explanation}
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
