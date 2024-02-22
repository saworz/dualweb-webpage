import React, { useState, useEffect, useCallback } from "react";
import createScrollSnap from "scroll-snap";

export function useScrollSnap({
  itemHeight,
  scrollRef,
  initialSnappedIndex = 0
}: {
  itemHeight: number;
  scrollRef: React.MutableRefObject<HTMLElement | undefined>;
  initialSnappedIndex?: number;
}) {
  const [snappedIndex, setSnappedIndex] = useState(initialSnappedIndex);

  const updateSnappedIndex = useCallback(
    (scrollContainer: HTMLElement) =>
      setSnappedIndex(scrollContainer.scrollTop / itemHeight),
    [itemHeight]
  );

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    element.scrollTo({ top: initialSnappedIndex * itemHeight });
    updateSnappedIndex(element);

    if (element)
      createScrollSnap(
        element,
        {
          snapDestinationY: `${itemHeight}px`
        },
        () => updateSnappedIndex(element)
      );
  }, []);

  return snappedIndex;
}
