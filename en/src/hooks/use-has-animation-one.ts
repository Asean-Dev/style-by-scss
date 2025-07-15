import { useCallback, useState } from "react";

/**
 * Hook สำหรับจำว่า index (หรือ key) ไหน "เคย animate แล้ว" เพื่อให้สามารถ animate อีกครั้งได้
 */
export function useHasAnimatedOne() {
  const [hasAnimated, setHasAnimated] = useState<
    Record<string | number, boolean>
  >({});

  const markAnimated = useCallback((key: string | number) => {
    setHasAnimated((prev) => (prev[key] ? prev : { ...prev, [key]: true }));
  }, []);

  const resetAnimated = useCallback(() => {
    setHasAnimated({});
  }, []);

  return { hasAnimated, markAnimated, resetAnimated };
}
