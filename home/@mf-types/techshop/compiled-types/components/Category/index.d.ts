import { ReactNode } from "react";
import './index.css';
interface Props {
    id: number;
    style?: any;
    children: ReactNode;
}
declare const Category: ({ id, style, children }: Props) => import("react/jsx-runtime").JSX.Element;
export default Category;
