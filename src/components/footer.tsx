'use client';
export function Footer() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:contact@oddhours.studio';
  };

  return (
    <footer className="absolute bottom-0 z-10 w-full px-[2vw] pb-[3vh] flex flex-col justify-center items-center">
      <div className="flex flex-row justify-between items-start md:items-center w-full px-5 py-10 border-y border-light">
        <p className="font-ronzino text-light text-xl">
          new biz — <span className="hover:underline cursor-pointer" onClick={handleEmailClick}>contact@oddhours.studio</span>
        </p>
        <p className="font-ronzino text-light text-xl hidden md:block">©2025</p>
      </div>
    </footer>
  );
}
