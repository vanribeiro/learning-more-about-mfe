import React from "react";
import { useEffect, useState } from "react";
import { fetchData } from "../../service/api";
import CardList from "../../components/CardList";
import { Box, Grid, Typography } from "@mui/material";

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
			<Box
				sx={{
					width: "80%",
					flexGrow: 1,
					margin: "auto",
					paddingBottom: 16,
				}}>
				<Box sx={{ marginBottom: 4 }}>
					<Typography variant="h1">Tech News</Typography>
				</Box>
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}>
					<CardList list={list} />
				</Grid>
			</Box>
		</>
	);
};

export default News;
