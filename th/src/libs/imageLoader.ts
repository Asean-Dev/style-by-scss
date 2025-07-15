export const imageLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }): string => {
    return `${src}?w=${width}&q=${quality || 75}`;
};