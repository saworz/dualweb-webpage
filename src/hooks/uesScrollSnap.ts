import React, { useState, useEffect, useRef, useCallback } from "react";
import createScrollSnap from "scroll-snap";
import useWindowSize from "./useWindowSize";

export function useScrollSnap({
  itemHeight,
  scrollRef,
  initialSnappedIndex = 0,
  unbindListRef,
}: {
  itemHeight: number;
  scrollRef: React.MutableRefObject<HTMLElement | undefined>;
  initialSnappedIndex?: number;
  unbindListRef: React.MutableRefObject<any[]>;
}) {
  const lastIndexRef = useRef(initialSnappedIndex);
  const windowSize = useWindowSize();

  useEffect(() => {
    unbindListRef.current.forEach((unbind: () => void) => {
      unbind();
    });

    unbindListRef.current = [];

    const element = scrollRef.current;

    if (element) {
      element.scrollTo({ top: lastIndexRef.current * itemHeight });

      const { bind, unbind } = createScrollSnap(
        element,
        {
          snapDestinationY: `${itemHeight}px`,
        },
        () => {
          lastIndexRef.current = element.scrollTop / itemHeight;
        }
      );

      unbindListRef.current.push(unbind);
      bind();
    }
  }, [windowSize]);
}
