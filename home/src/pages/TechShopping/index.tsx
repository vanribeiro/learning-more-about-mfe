import { Container } from "@mui/material";
import Products from "techshop/Products";
import Header from "../../components/Header";
import { ArrowBack } from "@mui/icons-material";
import Footer from "../../components/Footer";
import ListLastNewsTopics from 'techshop/ListLastNewsTopics';

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
