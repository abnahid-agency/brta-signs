'use client';

import { useState, useRef, type ChangeEvent, type FormEvent } from 'react';
import { Upload, Loader2, X, Lightbulb } from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { getTrafficSignInfo } from '@/app/actions';
import type { TrafficSignInformationOutput } from '@/ai/flows/traffic-sign-information';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export function ScanForm() {
  const { toast } = useToast();
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<TrafficSignInformationOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setResult(null);
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const clearSelection = () => {
    setFile(null);
    setPreview(null);
    setResult(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!file) {
      toast({
        title: 'No file selected',
        description: 'Please select an image file to analyze.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);
    setResult(null);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const base64 = reader.result as string;
      if (base64) {
        const { data, error } = await getTrafficSignInfo(base64);

        if (error) {
          toast({
            title: 'Analysis Failed',
            description: error,
            variant: 'destructive',
          });
        } else if (data) {
          setResult(data);
        }
      }
      setIsLoading(false);
    };
    reader.onerror = () => {
      setIsLoading(false);
      toast({
        title: 'File Read Error',
        description: 'Could not read the selected file.',
        variant: 'destructive',
      });
    };
  };

  return (
    <div className="mx-auto max-w-4xl">
      <form onSubmit={handleSubmit}>
        <Card
          className="relative flex aspect-video w-full cursor-pointer flex-col items-center justify-center border-2 border-dashed bg-secondary/50 transition-colors hover:border-primary hover:bg-secondary/80"
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            accept="image/*"
          />
          {preview ? (
            <>
              <Image src={preview} alt="Selected traffic sign" layout="fill" objectFit="contain" className="p-4" />
              <Button
                type="button"
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2 z-10 h-8 w-8 rounded-full"
                onClick={(e) => {
                  e.stopPropagation();
                  clearSelection();
                }}
              >
                <X className="h-4 w-4" />
              </Button>
            </>
          ) : (
            <div className="text-center">
              <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
              <p className="mt-2 font-semibold text-foreground">Click to upload or drag & drop</p>
              <p className="text-sm text-muted-foreground">PNG, JPG, or WEBP</p>
            </div>
          )}
        </Card>
        <div className="mt-6 flex justify-center">
          <Button type="submit" size="lg" disabled={!file || isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Analyzing...
              </>
            ) : (
              'Analyze Sign'
            )}
          </Button>
        </div>
      </form>

      {result && (
        <div className="mt-12 animate-fade-in-up">
           <h2 className="mb-6 text-center text-3xl font-bold font-headline">Analysis Result</h2>
           <div className="grid gap-8 md:grid-cols-2">
            <Card className="overflow-hidden">
                <CardHeader>
                    <CardTitle className="text-2xl">{result.nameEnglish}</CardTitle>
                    <p className="text-xl font-medium text-primary">{result.nameBangla}</p>
                </CardHeader>
                <CardContent>
                    <Badge>{result.category}</Badge>
                    <p className="mt-4 text-base text-muted-foreground">{result.explanation}</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Lightbulb className="h-6 w-6 text-accent"/>
                        <span>Test Your Knowledge</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                        {result.aiGeneratedQuestions.map((q, index) => (
                             <AccordionItem value={`item-${index+1}`} key={index}>
                                <AccordionTrigger>Question {index + 1}</AccordionTrigger>
                                <AccordionContent>
                                {q}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </CardContent>
            </Card>
           </div>
        </div>
      )}
    </div>
  );
}
