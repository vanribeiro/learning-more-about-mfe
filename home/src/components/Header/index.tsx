import { ArrowBack } from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";
import { ReactNode, useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Props{
	title: string,
	showBackArrow?: boolean;
	arrowComponent?: ReactNode
}

export default function Header({ title, arrowComponent}: Props) {

	useEffect(() => {
		document.title = title;
	}, []);

	return (
		<Box sx={{
			margin: '16px 0'
		}}>
			<Container maxWidth="xl">
				<Link to='/'>
					{arrowComponent}
				</Link>
				<Typography variant="h1" sx={{ fontSize: "4rem", color: '#1a1a1a' }}>
					{title}
				</Typography>
			</Container>
		</Box>
	);
}
