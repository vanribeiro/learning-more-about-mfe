import { Container } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

import Products from 'techshop/Products';
import ListLastNewsTopics from 'techshop/ListLastNewsTopics';

import Header from "../../components/Header";
import Footer from "../../components/Footer";


const TechShopping = () => {
	return (
		<>
			<Header
				title="Tech Shopping"
				arrowComponent={<ArrowBack sx={{ fontSize: "3rem" }} />}
			/>
			<Container maxWidth="xl">
				<Products />
				<ListLastNewsTopics />
			</Container>
			<Footer />
		</>
	);
};

export default TechShopping;
