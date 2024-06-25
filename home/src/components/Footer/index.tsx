import { Container, Typography } from "@mui/material";

export default function Footer() {
	return (
		<footer>
			<Container maxWidth="xl" sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				height: '48px',
			}}>
				<Typography variant="body2">
					2024 - <a href="https://vanribeiro.github.io/">van ribeiro</a>
				</Typography>
			</Container>
		</footer>
	);
}
