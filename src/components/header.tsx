import Image from 'next/image';

export function Header() {
  return (
    <header className="absolute z-10 w-full px-[5vw] pt-[5vh] mix-blend-difference">
      <div className="w-full mb-14">
        <Image
          src="/images/icons/wordmark.svg"
          alt="Logo Out Of Office"
          style={{ objectFit: 'contain' }}
          className="w-full h-auto"
          width={0}
          height={0}
        />
      </div>
    </header>
  );
}
