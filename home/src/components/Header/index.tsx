import { Box, Container, Typography } from "@mui/material";

interface Props{
	title: string
}

export default function Header({ title }: Props) {
	return (
		<Box sx={{
			margin: '16px 0'
		}}>
			<Container maxWidth="xl">
				<Typography variant="h1" sx={{ fontSize: "4rem" }}>
					{title}
				</Typography>
			</Container>
		</Box>
	);
}
