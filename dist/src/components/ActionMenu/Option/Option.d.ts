import { ReactElement } from "react";
interface Props {
    children: ReactElement;
    onClick: () => void;
    dataTestId?: string;
}
export declare const Option: ({ children, onClick, dataTestId }: Props) => ReactElement;
export {};
