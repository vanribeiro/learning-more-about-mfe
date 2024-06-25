declare const categories: ({
    id: number;
    name: string;
    style: {
        backgroundColor: string;
        color: string;
    };
} | {
    id: number;
    name: string;
    style: {
        backgroundColor: string;
        color?: undefined;
    };
})[];
export default categories;
