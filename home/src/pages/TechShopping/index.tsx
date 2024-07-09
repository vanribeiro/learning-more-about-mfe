import React from "react";
import { Container } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

// const ListLastNewsTopics = React.lazy(() => import("techshop/ListLastNewsTopics"));
const Products = React.lazy(() => import("techshop/Products"));

import Header from "../../components/Header";
import Footer from "../../components/Footer";

// import ListLastNewsTopics from 'techshop/ListLastNewsTopics';

const TechShopping = () => {
	return (
		<>
			<Header
				title="Tech Shopping"
				arrowComponent={<ArrowBack sx={{ fontSize: "3rem" }} />}
			/>
			<Container maxWidth="xl">
				<Products />
				{/* <ListLastNewsTopics /> */}
			</Container>
			<Footer />
		</>
	);
};

export default TechShopping;
