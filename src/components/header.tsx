import Image from 'next/image';

export function Header() {
  return (
    <header className="absolute z-10 w-full py-[2vh]">
      <div className="flex justify-center items-center">
        <Image
          src="/images/icons/symbol.svg"
          alt="Logo Out Of Office"
          style={{ objectFit: 'contain' }}
          width={200}
          height={200}
        />
      </div>
    </header>
  );
}
