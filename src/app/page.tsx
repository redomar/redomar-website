import { type MotionProps, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <main className="min-h-screen px-4 py-12">
      <div className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4">
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
      </div>
    </main>
  );
}

const Block = ({className, ...props}: {className?: string;}&MotionProps) => {
  return <motion.div className={twMerge("col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 shadow-inner p-6", className)
  } {...props} />;
};
