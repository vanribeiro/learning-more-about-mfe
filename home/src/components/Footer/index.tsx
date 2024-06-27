import { Container, Typography } from "@mui/material";

export default function Footer() {
	return (
		<footer>
			<Container
				maxWidth="xl"
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column",
					height: "48px",
					marginTop: "24px"
				}}>
				
				<Typography variant="body2">
					2024 -{" "}
					<a style={{color: '#1976d2'}} href="https://vanribeiro.github.io/">van ribeiro</a>
				</Typography>
				<Typography variant="body2">
					<a
						style={{color: '#1976d2'}}
						href="https://www.flaticon.com/br/icones-gratis/compra"
						title="compra ícones">
						Favicon criado por IYAHICON - Flaticon
					</a>
				</Typography>
			</Container>
		</footer>
	);
}
