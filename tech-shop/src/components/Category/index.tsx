import { ReactNode } from "react";
import { Typography } from "@mui/material";
import './index.css'

interface Props{
    style: any;
    children: ReactNode
}

const Category = ({style, children}: Props) => {

	return (
		<>
			<div className="category__container" style={style}>
				<Typography variant="h4">{children}</Typography>
			</div>
		</>
	);
};

export default Category;
