import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Link } from "@mui/material";

interface Props {
	title: string;
	author: string;
	sourceName: string;
	publishedAt: string;
	url: string;
}

function LastNewsTopics({
	title,
	url,
	author,
	sourceName,
	publishedAt,
}: Props) {
	return (
		<Box>
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
					{author}{" "}
					<Typography variant="caption" color="text.secondary">
						| {new Date(publishedAt).toLocaleDateString("pt-br")} -{" "}
						{sourceName}
					</Typography>
				</Typography>
			</Box>
		</Box>
	);
}

export default LastNewsTopics;
