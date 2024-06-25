import { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import { fetchData } from "../../service/api";
import LastNewsTopics from "../LastNewsTopics";

function ListLastNewsTopics() {
	const [list, setList] = useState([]);

	useEffect(() => {
		const fetchApi = async () => {
			const result: any = await fetchData("tech", "pt", 6);
			setList(result?.articles);
		};

		fetchApi();
	}, []);
	return (
		<>
			<Grid>
				<Grid xl={12} sx={{ marginTop: "24px", marginBottom: "16px" }}>
					<Typography variant="h5">Tech News</Typography>
				</Grid>
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}>
					{list.map((item: any, index) => {
						return (
							<LastNewsTopics
								key={`${item?.id}-${index}`}
								title={item?.title}
								author={item?.author}
								sourceName={item?.source.name}
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
