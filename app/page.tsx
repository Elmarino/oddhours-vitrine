import { Button, buttonVariants } from '@/src/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/src/components/ui/card';
import { Input } from '@/src/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className=" items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Hellso</h1>
      <Button>Youhou</Button>
      <Input />
      <Card className="p-5 w-full">
        <CardHeader>
          <CardTitle>Hoome</CardTitle>
        </CardHeader>

        <CardTitle>Go to admin page</CardTitle>
        <CardContent>
          <Link
            href={'admin'}
            className={buttonVariants({ size: 'lg', variant: 'destructive' })}
          >
            Go to admin
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
