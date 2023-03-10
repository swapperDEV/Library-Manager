import { AnimatePresence } from "framer-motion";
import React from "react";
import { MotionProvider } from "../../routes/MotionProvider";
export const FadeAnimationWrapper = ({
  children,
}: {
  children: JSX.Element;
}) => {
  return (
    <MotionProvider>
      <AnimatePresence exitBeforeEnter>
        <>{children}</>
      </AnimatePresence>
    </MotionProvider>
  );
};
