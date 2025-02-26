import Image from 'next/image';

export function Footer() {
  return (
    <footer className="relative z-10 w-full px-[5vw]">
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
      <div className="flex flex-col md:flex-row justify-between items-center font-semibold text-xl text-white mb-14 px-2">
        <div className="flex gap-8 md:w-1/3 w-full justify-between mb-3 md:mb-0">
          <p>©2025</p>
          <p>
            <a
              href="mailto:hello@out-of-office.work"
              className="transition hover:text-accent"
            >
              hello@out-of-office.work
            </a>
          </p>
        </div>
        <div className="flex gap-8 md:w-1/3 w-full justify-between">
          <p>(PAR—PRG)</p>
          <Image
            src="/images/icons/symbol.svg"
            alt="Logo Out Of Office"
            style={{ objectFit: 'contain' }}
            width={50}
            height={20}
          />
        </div>
      </div>
    </footer>
  );
}
