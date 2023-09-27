import { useEffect, useState } from "react";

export function useDebounce(value, delay = 400) {
  const [result, setResult] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setResult(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return result;
}
