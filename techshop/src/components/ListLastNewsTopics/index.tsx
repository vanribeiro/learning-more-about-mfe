import React, { useState, useEffect, Suspense } from "react";
import { Grid, Typography } from "@mui/material";
import { fetchData } from "../../service/api";
import { RequestNews } from "../../types/request-news";
import INews from "../../interfaces/news";
import Loader from "../Loader";
const LastNewsTopics = React.lazy(() => import("../LastNewsTopics"));

const fetchInit: RequestNews = {
	search: "tech",
	language: "pt",
	pageSize: 6,
	sortBy: "publishedAt"
}

function ListLastNewsTopics() {
	const [list, setList] = useState<Array<INews>>([]);

	useEffect(() => {
		const fetchApi = async () => {
			const result: any = await fetchData(fetchInit);
			setList(result?.articles);
		};

		fetchApi();
	}, []);
	return (
		<>
			<Grid data-testid="list-last-news-topics">
				<Grid xl={12} sx={{ marginTop: "24px", marginBottom: "16px" }}>
					<Typography variant="h5">Tech News</Typography>
				</Grid>
				<Suspense fallback={<Loader />}>
					<Grid
						container
						spacing={{ xs: 2, md: 3 }}
						columns={{ xs: 4, sm: 8, md: 12 }}>
						{list.map((item: INews, index) => {
							return (
								<LastNewsTopics
									key={index}
									index={index}
									title={item?.title}
									author={item?.author}
									source={item.source}
									publishedAt={item?.publishedAt}
									url={item?.url}
								/>
							);
						})}
					</Grid>
                </Suspense>
			</Grid>
		</>
	);
}

export default ListLastNewsTopics;
