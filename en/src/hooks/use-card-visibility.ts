import { useMemo } from "react";

type UseCardVisibilityProps = {
  index: number;
  activeIndex: number;
  visibleRange?: number; // จำนวน cards ที่แสดงหลัง activeIndex (default: 3)
};

export const useCardVisibility = ({
  index,
  activeIndex,
  visibleRange = 3,
}: UseCardVisibilityProps) => {
  const opacity = useMemo(() => {
    return index < activeIndex || index > activeIndex + visibleRange ? 0 : 1;
  }, [index, activeIndex, visibleRange]);

  const isVisible = opacity === 1;

  return {
    opacity,
    isVisible,
    isHidden: !isVisible,
  };
}; 