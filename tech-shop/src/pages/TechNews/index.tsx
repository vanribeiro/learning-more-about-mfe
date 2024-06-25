import { useEffect, useState } from "react";
import { fetchData } from "../../service/api";
import CardList from "../../components/CardList";
import { Box, Container, Grid, Typography } from "@mui/material";

const News = () => {
	const [list, setList] = useState([]);

	useEffect(() => {
		const fetchApi = async () => {
			const result: any = await fetchData();
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
					<CardList list={list} />
				</Grid>
			</Container>
		</>
	);
};

export default News;
