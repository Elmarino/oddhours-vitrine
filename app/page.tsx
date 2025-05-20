'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen px-[5vw]">
      <div className="w-full max-w-[600px] md:max-w-[900px] aspect-[755/274]">
        <Image
          src="/images/icons/Logo-V0.svg"
          alt="Odd Hours Logo"
          className="w-full h-full"
          width={755}
          height={274}
          priority
        />
      </div>
    </main>
  );
}
