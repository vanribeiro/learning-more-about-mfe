import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Grid, Link } from "@mui/material";
import INews from "../../interfaces/news";

function LastNewsTopics({
	index,
	title,
	url,
	source,
	publishedAt,
}: INews) {
	return (
		<Grid item xs={2} sm={4} md={2}>
			<Box sx={{ marginBottom: "16px" }}>
				<Typography gutterBottom variant="body1" component="div">
					<Link
					    data-testid={`last-news-topics-${index}`}
						sx={{
							fontWeight: "bold",
						}}
						href={url}
						target="_blank"
						rel="noopener noreferrer"
						underline="hover">
						{title ? title : "Título da notícia indisponível" }
					</Link>
				</Typography>
				<Typography variant="body2" color="text.secondary">
					<Typography variant="caption" color="text.secondary">
						{ (`${new Date(publishedAt).toLocaleDateString("pt-br")} - ${source?.name}`) }
					</Typography>
				</Typography>
			</Box>
		</Grid>
	);
}

export default LastNewsTopics;
