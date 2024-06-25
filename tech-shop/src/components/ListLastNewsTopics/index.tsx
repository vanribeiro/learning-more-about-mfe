import * as React from "react";
import { Box, Button, Link, Typography } from "@mui/material";
import { fetchData } from "../../service/api";
import LastNewsTopics from "../LastNewsTopics";

function ListLastNewsTopics() {
	const [list, setList] = React.useState([]);

	React.useEffect(() => {
		const fetchApi = async () => {
			const result: any = await fetchData("tech", "pt", 5);
			setList(result?.articles);
		};

		fetchApi();
	}, []);
	return (
		<>
			<Box sx={{ maxWidth: 300 }}>
				<Box sx={{ marginTop: "24px", marginBottom: "16px" }}>
					<Typography variant="h5">Tech News</Typography>
				</Box>
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
				<Button>
					<Link href="/">
						<Typography variant="button">mais notícias</Typography>
					</Link>
				</Button>
			</Box>
		</>
	);
}

export default ListLastNewsTopics;
