"use client";
import { type MotionProps, motion } from "framer-motion";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <main >
        <Image src="/logo.svg" width={50} height={0} alt="logo" className="mx-auto py-10" />
        <div className="min-h-screen px-4 pb-12">
      <div className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4">
        <HeaderBlock />
        <Block className="col-span-12 row-span-5 md:col-span-6">
          <Image
            src="https://utfs.io/f/53a12102-d2d7-400b-9987-c5dd424b8cdc-1x991b.jpeg"
            width={991}
            height={0}
            alt="hero"
          />
        </Block>
        <LocationBlock />
        <TextBlock />
        <ContactBlock />
        <SocialBlock />
        <ExperianceBlock />
      </div>
      </div>
    </main>
  );
}

const Block = ({
  className,
  ...props
}: { className?: string } & MotionProps) => {
  return (
    <motion.div
      className={twMerge(
        "col-span-4 rounded-lg  shadow-inner bg-zinc-800 p-6",
        className,
      )}
      {...props}
    />
  );
};

const HeaderBlock = () => {
  return (
    <Block className="col-span-12 row-span-2 flex flex-col gap-2 md:col-span-6">
      <h1 className="text-4xl  font-bold leading-tight">Hello, world!</h1>
      <p className="indent-4 font-medium text-zinc-400">
        My name is Mohamed Omar and I&apos;m a software engineer @ PwC. And
        welcome to my humble website
      </p>
      <a
        href="*"
        className="flex cursor-pointer items-baseline gap-3 text-blue-400 hover:underline"
      >
        Contact Me{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="11"
          viewBox="0 0 13 11"
          className="rotate-3 transform fill-blue-400"
        >
          <path
            d="M3.99839 0.952939C4.03182 0.688531 4.16889 0.448225 4.37947 0.284864C4.59004 0.121503 4.85688 0.0484655 5.1213 0.0818122L11.4672 0.883084C11.7316 0.91651 11.9719 1.05358 12.1353 1.26416C12.2987 1.47473 12.3717 1.74157 12.3384 2.00599L11.5371 8.35192C11.4995 8.61277 11.361 8.84843 11.1514 9.00815C10.9418 9.16788 10.6778 9.23888 10.4163 9.20586C10.1549 9.17285 9.91684 9.03846 9.7535 8.83165C9.59016 8.62483 9.51458 8.36214 9.54305 8.10014L9.97208 4.21441L2.42781 10.0671C2.21719 10.2305 1.95029 10.3035 1.68583 10.2701C1.42136 10.2367 1.181 10.0997 1.0176 9.88905C0.85421 9.67843 0.781177 9.41153 0.81457 9.14707C0.847963 8.8826 0.985046 8.64223 1.19566 8.47884L8.73993 2.62615L4.86952 2.07584C4.60511 2.04242 4.36481 1.90534 4.20144 1.69477C4.03808 1.48419 3.96505 1.21736 3.99839 0.952939Z"
            fill="inherit"
          />
        </svg>
      </a>
    </Block>
  );
};

const ExperianceBlock = () => (
  <>
    <Block className="col-span-3 bg-orange-400 md:col-span-3">
      <span className="grid h-full place-content-center text-3xl text-white">
        <Image src="/pwc.svg" width={60} height={0} alt="pwc" />
      </span>
    </Block>
    <Block className="col-span-3 bg-green-500 md:col-span-3">
      <span className="grid h-full place-content-center text-3xl text-white">
        <Image src="/ogl.svg" width={100} height={0} alt="ogl" />
      </span>
    </Block>
    <Block className="col-span-3 bg-pink-400 md:col-span-3">
      <span className="grid h-full place-content-center text-3xl text-white">
        <Image src="/liv.svg" width={120} height={0} alt="uol" />
      </span>
    </Block>
    <Block className="col-span-3 bg-teal-500 md:col-span-3">
      <span className="grid h-full place-content-center text-3xl text-white">
        <Image src="/spar.svg" width={90} height={0} alt="spar" />
      </span>
    </Block>
  </>
);

const TextBlock = () => (
  <Block className="col-span-12 row-span-2 flex flex-col gap-2 font-bold leading-snug md:col-span-6">
    <h2 className="text-xl">
      A jack of all trades in the world of programming{" "}
    </h2>
    <p className="indent-4 font-medium text-zinc-400">
      I&apos;m a software engineer that dabbles in every cool tech that comes my
      way. I&apos;ve worked on a variety of projects ranging from web
      development to integration engineering to cloud computing. I&apos;m always
      looking for the next cool thing to learn and code on.
    </p>
  </Block>
);

const LocationBlock = () => (
  <>
    <Block className="col-span-6 flex flex-col items-center gap-4 md:col-span-3">
      <Image
        src="/location.svg"
        className="text-white"
        width={24}
        height={0}
        alt="location"
      />
      <p className=" text-xs">Birmingam, UK</p>
    </Block>
    <Block className="col-span-6 flex flex-col items-center gap-4 md:col-span-3">
      <Image
        src="/cloud.svg"
        className="text-white"
        width={33}
        height={0}
        alt="cloud"
      />
      <p className=" text-xs">Cloud Engineer</p>
    </Block>
  </>
);

const SocialBlock = () => (
  <>
    <Block className="col-span-3 bg-white md:col-span-3">
      <span className="grid h-full place-content-center text-3xl text-white">
        <Image src="/github-mark.svg" width={60} height={0} alt="github" />
      </span>
    </Block>
    <Block className="col-span-3 bg-blue-700 md:col-span-3">
      <span className="grid h-full place-content-center text-3xl text-white">
        <Image src="/linkedin.svg" width={60} height={0} alt="github" />
      </span>
    </Block>
    <Block className="col-span-3 bg-blue-400 md:col-span-3">
      <span className="grid h-full place-content-center text-3xl text-white">
        <Image src="/twitter.svg" width={60} height={0} alt="github" />
      </span>
    </Block>
    <Block className="col-span-3 bg-red-600 md:col-span-3">
      <span className="grid h-full place-content-center text-3xl text-white">
        <Image src="/youtube.svg" width={60} height={0} alt="github" />
      </span>
    </Block>
  </>
);

const ContactBlock = () => (
  <Block className="col-span-12">
    <p className="mb-3 text-lg  font-bold tracking-wide">
      Join my mailing list
    </p>
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex items-center gap-2"
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-zinc-300 focus:outline-0"
      />
      <button
        type="submit"
        className="flex items-center gap-2 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
      >
        Subscribe
      </button>
    </form>
  </Block>
);
