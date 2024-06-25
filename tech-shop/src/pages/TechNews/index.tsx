import { useEffect, useState } from "react";
import { fetchData } from "../../service/api";
import CardListNews from "../../components/CardListNews";
import { Container, Grid } from "@mui/material";

const News = () => {
	const [list, setList] = useState([]);

	useEffect(() => {
		const fetchApi = async () => {
			const result: any = await fetchData('tech', 'pt', 12);
			setList(result?.articles);
		};

		fetchApi();
	}, []);

	return (
		<>
			<Container maxWidth='xl'>
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}>
					<CardListNews list={list} />
				</Grid>
			</Container>
		</>
	);
};

export default News;
