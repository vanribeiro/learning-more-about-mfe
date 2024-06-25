import { Box, Container, Typography } from "@mui/material";

export default function Header() {
	return (
		<Box sx={{
			margin: '16px 0'
		}}>
			<Container maxWidth="xl">
				<Typography variant="h1" sx={{ fontSize: "4rem" }}>
					TechShop
				</Typography>
			</Container>
		</Box>
	);
}
