export function Header() {
  return (
    <header className="absolute top-0 z-10 w-full px-[2vw] pt-[3vh] flex flex-col justify-center items-center">
      <div className="flex flex-row justify-between items-start md:items-center w-full px-5 py-10 border-y border-light">
        <h1 className="font-director text-light text-xl">design over hours</h1>
        <p className="font-ronzino text-light text-xl hidden md:block">Paris — Prague</p>
      </div>
    </header>
  );
}
