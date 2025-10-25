'use client';

import { useState } from 'react';
import Image from 'next/image';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Car, Search } from 'lucide-react';

import { trafficSigns } from '@/lib/data';
import type { TrafficSign } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const categories = ['All', 'Mandatory', 'Warning', 'Informatory'];

export default function TrafficSignsPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const filteredSigns = trafficSigns.filter((sign) => {
    const searchLower = search.toLowerCase();
    const titleMatch =
      sign.titleEnglish.toLowerCase().includes(searchLower) ||
      sign.titleBangla.toLowerCase().includes(searchLower);
    const categoryMatch = category === 'All' || sign.category === category;
    return titleMatch && categoryMatch;
  });

  return (
    <div className="container py-12">
      <div className="mb-12 text-center">
        <Car className="mx-auto h-12 w-12 text-primary" />
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl font-headline">
          Traffic Signs Library
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          Browse, search, and filter all Bangladeshi traffic signs. Click on a
          sign to learn more about its meaning and category.
        </p>
      </div>

      <div className="mb-8 flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search signs (e.g., Stop, থামুন)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {filteredSigns.map((sign) => {
          const image = PlaceHolderImages.find((img) => img.id === sign.imageId);
          return (
            <Card
              key={sign.id}
              className="group overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <CardHeader className="p-0">
                <div className="relative aspect-square w-full bg-muted">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={sign.titleEnglish}
                      data-ai-hint={image.imageHint}
                      layout="fill"
                      className="object-contain p-4 transition-transform group-hover:scale-105"
                    />
                  )}
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg">{sign.titleEnglish}</CardTitle>
                <p className="font-medium text-primary">{sign.titleBangla}</p>
                <Badge
                  variant={
                    sign.category === 'Mandatory'
                      ? 'destructive'
                      : sign.category === 'Warning'
                      ? 'default'
                      : 'secondary'
                  }
                  className="mt-2"
                >
                  {sign.category}
                </Badge>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredSigns.length === 0 && (
         <div className="col-span-full mt-16 text-center">
            <Search className="mx-auto h-12 w-12 text-muted-foreground" />
            <h3 className="mt-4 text-xl font-semibold">No Signs Found</h3>
            <p className="mt-2 text-muted-foreground">Your search for "{search}" in the "{category}" category did not match any signs.</p>
            <Button variant="outline" className="mt-6" onClick={() => { setSearch(''); setCategory('All'); }}>
              Clear Filters
            </Button>
         </div>
      )}
    </div>
  );
}
