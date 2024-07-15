import { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import { fetchData } from "../../service/api";
import LastNewsTopics from "../LastNewsTopics";
import INews from "../../interfaces/news";

const fetchInit = {
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
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}>
					{list.map((item: INews, index) => {
						return (
							<LastNewsTopics
								index={index}
								key={`${index}`}
								title={item?.title}
								author={item?.author}
								source={item.source}
								publishedAt={item?.publishedAt}
								url={item?.url}
							/>
						);
					})}
				</Grid>
			</Grid>
		</>
	);
}

export default ListLastNewsTopics;
