import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { useBlindCtx } from "@/lib/blind-context-provider";

type IProps = PropsWithChildren;

const Lens = ({ children }: IProps) => {
  const { isBlind } = useBlindCtx();
  return (
    <motion.section
      className={cn(
        "col-span-full row-span-full flex items-center justify-center w-full h-full z-50 lens",
        { visible: isBlind }
      )}
    >
      {children}
    </motion.section>
  );
};

export default Lens;
