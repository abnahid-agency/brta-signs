import Image from 'next/image';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MoreHorizontal, PlusCircle } from 'lucide-react';
import { trafficSigns } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export default function AdminSignsPage() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Traffic Signs</h1>
          <p className="text-muted-foreground">
            Manage all traffic signs in the library.
          </p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add New Sign
        </Button>
      </div>

      <Card className="mt-8">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="hidden w-[100px] sm:table-cell">Image</TableHead>
                  <TableHead>English Title</TableHead>
                  <TableHead>Bangla Title</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {trafficSigns.map((sign) => {
                  const image = PlaceHolderImages.find(
                    (img) => img.id === sign.imageId
                  );
                  return (
                    <TableRow key={sign.id}>
                      <TableCell className="hidden sm:table-cell">
                        {image && (
                          <Image
                            alt={sign.titleEnglish}
                            className="aspect-square rounded-md object-cover"
                            height="64"
                            src={image.imageUrl}
                            width="64"
                          />
                        )}
                      </TableCell>
                      <TableCell className="font-medium">
                        {sign.titleEnglish}
                      </TableCell>
                      <TableCell>{sign.titleBangla}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{sign.category}</Badge>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              aria-haspopup="true"
                              size="icon"
                              variant="ghost"
                            >
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Toggle menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
      </Card>
    </div>
  );
}
