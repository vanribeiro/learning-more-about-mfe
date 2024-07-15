import { Typography } from "@mui/material";
import { ICategory } from "../../interfaces/category";
import './index.css'

const Category = ({id, style, children}: ICategory) => {

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
