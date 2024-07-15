import React from "react";
import { Container, Grid } from "@mui/material";
import Category from '../Category'
import ICategory from "../../interfaces/category";

interface Props{
    list: Array<ICategory>;
}

const CategoryList = ({ list }: Props) => {

	return (
		<>
			<Container maxWidth="xl" data-testid="category-list">
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}>
					{list.map((category, index) => (
						<Grid item xs={4} sm={4} md={4} key={index}>
							<Category id={category.id} style={category.style}>
                                {category.name}
                            </Category>
						</Grid>
					))}
				</Grid>
			</Container>
		</>
	);
};

export default CategoryList;
