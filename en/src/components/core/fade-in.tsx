import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";

// Global set จำทุก fadeKey
const fadeInAnimatedKeys = new Set<string | number>();

type FadeInProps = {
  children: React.ReactNode;
  fadeKey: string | number;
  transform?: "right" | "left" | "top" | "bottom" | "default";
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  manual?: boolean;
  animated?: boolean;
  threshold?: number;
  [key: string]: any;
};

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  fadeKey,
  transform = "right",
  duration = 0.8,
  className,
  style,
  delay = 0,
  manual = false,
  animated,
  threshold,
  ...rest
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold:
      threshold || transform === "right" || transform === "left" ? 0.1 : 0.3,
  });

  useEffect(() => {
    if (!manual && inView && fadeKey !== undefined) {
      console.log("fadeKey", fadeKey);
      fadeInAnimatedKeys.add(fadeKey);
    }
  }, [inView, fadeKey, manual]);

  const alreadyAnimated =
    !manual && fadeKey !== undefined && fadeInAnimatedKeys.has(fadeKey);

  const transformMap = {
    right: { x: 100, y: 0 },
    left: { x: -100, y: 0 },
    top: { x: 0, y: -100 },
    bottom: { x: 0, y: 100 },
    default: { x: 0, y: 0 },
  };

  if (manual) {
    if (animated) {
      return (
        <div className={className} style={style} {...rest}>
          {children}
        </div>
      );
    }

    return (
      <motion.div
        initial={{
          ...transformMap[transform],
          opacity: 0,
        }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration, ease: "easeInOut", delay }}
        className={className}
        style={{ zIndex: 100, ...style }}
        {...rest}
      >
        {children}
      </motion.div>
    );
  }

  if (alreadyAnimated) {
    return (
      <div className={className} style={{ zIndex: 100, ...style }} {...rest}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{
        ...transformMap[transform],
        opacity: 0,
      }}
      animate={
        inView
          ? { x: 0, y: 0, opacity: 1 }
          : {
              ...transformMap[transform],
              opacity: 0,
            }
      }
      transition={{ duration, ease: "easeInOut", delay }}
      className={className}
      style={{ zIndex: 100, ...style }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
