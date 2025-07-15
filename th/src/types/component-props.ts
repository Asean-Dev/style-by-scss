export interface PropsType {
    window?: () => Window;
    children?: React.ReactElement<unknown>;
}

export type AnchorType = 'top' | 'left' | 'bottom' | 'right';