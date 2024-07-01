import { ReactNode } from "react";
import { Typography } from "@mui/material";
import './index.css'
import React from "react";

interface Props{
	id: number;
    style?: any;
    children: ReactNode
}

const Category = ({id, style, children}: Props) => {

	return (
		<>
			<div 
				className="category__container" 
				style={style} 
				data-testid={`category-list-item-${id}`}>
				<Typography variant="h4">{children}</Typography>
			</div>
		</>
	);
};

export default Category;
