import React, { useRef, LegacyRef } from "react";
import { useScrollSnap } from "../../hooks/uesScrollSnap";

interface ScrollSnapProps {
  children: React.ReactNode;
}

const ScrollSnap: React.FC<ScrollSnapProps> = ({ children }) => {
  const scrollRef = useRef<HTMLElement>();
  useScrollSnap({
    scrollRef,
    itemHeight: window.innerHeight,
    initialSnappedIndex: 2,
  });

  return (
    <div
      className="scroll-container"
      ref={scrollRef as LegacyRef<HTMLDivElement>}
      style={{ height: window.innerHeight }}
    >
      {children}
    </div>
  );
};

export default ScrollSnap;
