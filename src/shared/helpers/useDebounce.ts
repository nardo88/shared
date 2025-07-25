import { useRef } from "react";

type TimeoutType = ReturnType<typeof setTimeout>;

export default function useDebounce(fn: any, ms: any) {
  const timeOut = useRef<TimeoutType | null>(null);
  return function (...args: any) {
    const fnCall = () => fn.apply(null, args);
    if (timeOut.current) clearTimeout(timeOut.current);
    timeOut.current = setTimeout(fnCall, ms);
  };
}
