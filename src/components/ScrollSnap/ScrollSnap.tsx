import React, { useRef, LegacyRef, useState } from "react";
import { useScrollSnap } from "../../hooks/useScrollSnap";

interface ScrollSnapProps {
  children: React.ReactNode;
}

const ScrollSnap: React.FC<ScrollSnapProps> = ({ children }) => {
  const unbindListRef = useRef<any>([]);

  const scrollRef = useRef<HTMLElement>();
  useScrollSnap({
    scrollRef,
    itemHeight: window.innerHeight,
    initialSnappedIndex: 0,
    unbindListRef,
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
