import { ReactNode } from "react";
interface ICategory {
    id: number;
    name: string;
    children?: ReactNode;
    style: {
        backgroundColor: string;
        color?: string;
    };
}
interface ICategoryList {
    list: ICategory[];
}
export type { ICategory, ICategoryList };
