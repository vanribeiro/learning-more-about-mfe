import { Container, Grid, Typography } from "@mui/material";
import categories from "./categories";
import Category from './../../components/Category'

const ProductsList = () => {

	return (
		<>
			<Container maxWidth="xl">
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}>
					{categories.map((category, index) => (
						<Grid item xs={4} sm={4} md={4} key={index}>
                            <Category style={category.style}>
                                {category.name}
                            </Category>
						</Grid>
					))}
				</Grid>
			</Container>
		</>
	);
};

export default ProductsList;
