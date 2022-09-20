import { useEffect, useRef, useState } from "react";

/**
 * Returns a ref, and a stateful value bound to the ref
 */
export function useSticky<T extends HTMLElement>(length = 20) {
  const stickyRef = useRef<T>(null);
  const [sticky, setSticky] = useState(false);
  const [stickyFactor, setStickyFactor] = useState(0);

  useEffect(() => {
    // Observe when ref enters or leaves sticky state
    // rAF https://stackoverflow.com/questions/41740082/scroll-events-requestanimationframe-vs-requestidlecallback-vs-passive-event-lis
    function observe() {
      if (!stickyRef.current) return;
      const refPageOffset = stickyRef.current.getBoundingClientRect().top;
      const stickyOffset = parseInt(getComputedStyle(stickyRef.current).top);
      const stickyActive = refPageOffset <= stickyOffset;
      if (refPageOffset <= stickyOffset && stickyFactor !== 1) {
        setStickyFactor(1);
      } else {
        setStickyFactor(
          1 - Math.min(Math.abs(refPageOffset - stickyOffset) / length, 1)
        );
      }

      if (stickyActive && !sticky) setSticky(true);
      else if (!stickyActive && sticky) setSticky(false);
    }
    observe();

    // Bind events
    document.addEventListener("scroll", observe);
    window.addEventListener("resize", observe);
    window.addEventListener("orientationchange", observe);

    return () => {
      document.removeEventListener("scroll", observe);
      window.removeEventListener("resize", observe);
      window.removeEventListener("orientationchange", observe);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sticky]);

  return [stickyRef, sticky, stickyFactor] as const;
}
