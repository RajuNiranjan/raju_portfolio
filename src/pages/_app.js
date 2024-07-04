import NavBar from "@/components/NavBar/NavBar";
import "@/styles/globals.css";
import { AnimatePresence, delay, motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.router}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 0.75,
          delay: 1,
        }}
        variants={{
          initialState: {
            opacity: 0,
          },
          animateState: {
            opacity: 1,
          },
          exitState: {},
        }}
        className="w-full">
        <NavBar />
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}
