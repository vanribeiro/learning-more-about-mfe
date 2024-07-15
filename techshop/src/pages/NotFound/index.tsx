import { Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {

	return (
		<>
			<Container 
				maxWidth="sm" 
				sx={{ 
					width: '100%', 
					height: '90vh', 
					display: 'flex', 
					alignItems: 'center', 
					justifyContent: 'center' 
				}}>
				<div style={{textAlign: 'center'}}>
					<Typography component="h1" variant="h1">404</Typography>
					<Typography component="h2" variant="h2">Page not found</Typography>
					<Button variant="outlined" color="primary">
						<Link to="/" style={{textDecoration: 'none', color: '#1a1a1a'}}>Voltar para Home</Link>
					</Button>
				</div>

			</Container>

		</>
	);
};

export default NotFound;
