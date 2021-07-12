import { useRef } from 'react';

/* eslint-disable no-unused-vars */
export default function useDebounce<T>(fn: (any: T) => void, delay: number) {
  const timeoutRef = useRef<null | number>(null);

  function debouncedFn(args: T) {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      fn(args);
    }, delay);
  }

  return debouncedFn;
}
