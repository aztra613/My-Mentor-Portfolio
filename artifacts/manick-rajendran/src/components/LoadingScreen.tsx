import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const duration = 900;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(elapsed / duration, 1);
      setProgress(pct);
      if (pct < 1) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => setVisible(false), 120);
      }
    };

    requestAnimationFrame(tick);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          data-testid="loading-screen"
        >
          {/* MR Monogram */}
          <motion.div
            className="flex items-center justify-center w-14 h-14 bg-primary text-primary-foreground rounded-sm mb-6 shadow-md"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-serif font-bold text-2xl tracking-wider">MR</span>
          </motion.div>

          <motion.p
            className="text-xs font-sans font-semibold tracking-[0.22em] text-muted-foreground uppercase mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            Healthcare Transformation Leader
          </motion.p>

          {/* Progress bar */}
          <div className="w-48 h-px bg-border overflow-hidden">
            <motion.div
              className="h-full bg-primary origin-left"
              style={{ scaleX: progress }}
              transition={{ ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
