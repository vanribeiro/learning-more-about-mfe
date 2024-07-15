import { Box, Button, ButtonBase, Container, Typography } from "@mui/material";
import { ReactNode, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface Props{
	title: string,
	showBackArrow?: boolean;
	arrowComponent?: ReactNode
}

export default function Header({ title, arrowComponent}: Props) {
	const location = useLocation();
	const navigate = useNavigate();
	const [showArrow, setShowArrow] = useState(false);

	useEffect(() => {
		document.title = title;

		if(location?.pathname.includes('tech-shopping')){
			setShowArrow(true);
		}
	}, []);

	return (
		<Box 
			data-testid={`header-${title.toLowerCase().replace(' ', '-')}`}
			role="heading"
			sx={{
				margin: "16px 0",
			}}>
			<Container maxWidth="xl">
				<Typography
					variant="h1"
					sx={{ fontSize: "4rem", color: "#1a1a1a" }}>
					{showArrow && (
						<ButtonBase
							data-testid="back-button"
							sx={{ color: "#1a1a1a", marginRight: "16px" }}
							onClick={() => navigate("/")}>
							{arrowComponent}
						</ButtonBase>
					)}
					{title}
				</Typography>
			</Container>
		</Box>
	);
}
