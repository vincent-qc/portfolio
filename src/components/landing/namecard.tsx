import { motion } from "motion/react";
import { fadeUp } from "../../animations/fade";

export default function Namecard() {
  const { initial, animate } = fadeUp(20);
  return (
    <motion.div
      layout
      initial={initial}
      animate={animate}
      transition={{
        type: "spring",
        duration: 2,
        delay: 0.5,
      }}
    >
      <h1 className="text-[350%] font-semibold">Vincent's Portfolio</h1>
    </motion.div>
  );
}
