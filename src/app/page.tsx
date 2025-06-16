import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <div className="flex flex-col min-h-screen justify-center items-center">
          <div>
            <h1>Art Institute of Chicago</h1>
          </div>
          <Link
            className="h-full m-2 p-3 border-2 text-center hover:bg-ruby-300 hover:font-bold hover:cursor-pointer"
            href="/artworks"
          >
            Search our Art
          </Link>
        </div>
      </main>
      <footer className="fixed bottom-px w-full py-5 flex gap-[24px] flex-wrap items-center justify-center">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://api.artic.edu/docs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          API Docs
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/artworks"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          See Art
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.artic.edu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to artic.edu →
        </Link>
      </footer>
    </div>
  );
}
