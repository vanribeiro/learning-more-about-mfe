import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface Props{
	title: string
}

export default function Header({ title }: Props) {
	const [pageTitle, setPageTitle] = useState(title);

	useEffect(() => {
		
		if (window.location.pathname === "/tech-news") {
			setPageTitle("Tech News");
			document.title = "Tech News";
		} else {
			document.title = title;
		}

	}, []);

	return (
		<Box sx={{
			margin: '16px 0'
		}}>
			<Container maxWidth="xl">
				<Typography variant="h1" sx={{ fontSize: "4rem" }}>
					{pageTitle}
				</Typography>
			</Container>
		</Box>
	);
}
