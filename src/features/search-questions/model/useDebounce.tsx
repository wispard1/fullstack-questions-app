import { useCallback, useEffect, useRef } from "react";

export function useDebounce(
  callback: (value: string) => void,
  delay: number
) {
  const timerId = useRef<number | undefined>(undefined);

  const debouncedCallback = useCallback(
    (value: string) => {
      clearTimeout(timerId.current);
      timerId.current = window.setTimeout(() => {
        callback(value);
      }, delay);
    },
    [callback, delay]
  );

  const clear = useCallback(() => {
    clearTimeout(timerId.current);
  }, []);

  useEffect(() => {
    return () => {
      clearInterval(timerId.current);
    };
  }, []);
  return { debouncedCallback, clear };
}
