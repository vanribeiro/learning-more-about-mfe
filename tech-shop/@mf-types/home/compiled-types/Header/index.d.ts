import { ReactNode } from "react";
interface Props {
    title: string;
    showBackArrow?: boolean;
    arrowComponent?: ReactNode;
}
export default function Header({ title, arrowComponent }: Props): import("react/jsx-runtime").JSX.Element;
export {};
