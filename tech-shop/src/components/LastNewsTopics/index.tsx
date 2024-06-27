import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Grid, Link } from "@mui/material";

interface Props {
	title: string;
	author?: string;
	sourceName: string;
	publishedAt: string;
	url: string;
}

function LastNewsTopics({
	title,
	url,
	sourceName,
	publishedAt,
}: Props) {
	return (
		<Grid item xs={2} sm={4} md={2}>
			<Box sx={{ marginBottom: "16px" }}>
				<Typography gutterBottom variant="body1" component="div">
					<Link
						sx={{
							fontWeight: "bold",
						}}
						href={url}
						target="_blank"
						rel="noopener noreferrer"
						underline="hover">
						{title}
					</Link>
				</Typography>
				<Typography variant="body2" color="text.secondary">
					<Typography variant="caption" color="text.secondary">
						{new Date(publishedAt).toLocaleDateString("pt-br")} -{" "}
						{sourceName}
					</Typography>
				</Typography>
			</Box>
		</Grid>
	);
}

export default LastNewsTopics;
