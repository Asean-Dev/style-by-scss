import { motion, MotionProps } from "framer-motion";
import { ElementType, ReactNode, memo, useMemo } from "react";

type MotionWrapperProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  duration?: number;
  ease?: string;
} & MotionProps &
  Omit<React.ComponentPropsWithoutRef<T>, keyof MotionProps>;

export const MotionWrapper = memo(
  <T extends ElementType = "div">({
    as,
    children,
    duration = 0.8,
    ease = "easeInOut",
    ...rest
  }: MotionWrapperProps<T>) => {
    const MotionTag = motion(as || "div");

    // ใช้ useMemo เพื่อป้องกัน object recreation
    const motionProps = useMemo(
      () => ({
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 0 },
        transition: { duration, ease },
      }),
      [duration, ease]
    );

    return (
      <MotionTag {...motionProps} {...rest}>
        {children}
      </MotionTag>
    );
  }
) as <T extends ElementType = "div">(props: MotionWrapperProps<T>) => ReactNode;
