export const mediaQueries = {
  upMd: "@media (max-width:767px)",
  upLg: "@media (max-width:991px)",
  upXl: "@media (max-width:1200px)",
  up2Xl: "@media (max-width:1440px)",
  up3Xl: "@media (max-width:1600px)",
};

export function pxToRem(value: number): string {
  return `${value / 16}rem`;
}

export function responsiveFontSizes({
  md,
  lg,
  xl,
  xl2,
  xl3,
}: {
  md: number;
  lg: number;
  xl: number;
  xl2: number;
  xl3: number;
}) {
  return {
    [mediaQueries.upMd]: { fontSize: pxToRem(md) },
    [mediaQueries.upLg]: { fontSize: pxToRem(lg) },
    [mediaQueries.upXl]: { fontSize: pxToRem(xl) },
    [mediaQueries.up2Xl]: { fontSize: pxToRem(xl2) },
    [mediaQueries.up3Xl]: { fontSize: pxToRem(xl3) },
  };
}
