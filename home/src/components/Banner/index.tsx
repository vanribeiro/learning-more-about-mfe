import { Container, Typography } from "@mui/material";
import setup from './../../assets/images/setup.jpg';
import './index.css';
import { ArrowForward } from "@mui/icons-material";
import { Link } from "react-router-dom";

function Banner() {
	return (
		<Container maxWidth="xl" sx={{ position: 'relative', padding: '0px !important'}}>
				<Link className="banner__link" to="/tech-shopping" title="Go to Tech Shopping">
					<img className="banner__image" src={setup} alt="computador desktop" />
					<div className="banner__layer">
						<div className="banner__text-container">
							<div className="banner__cta">
								<Typography variant="h4" color="#fff">
									Home Office
								</Typography>
								<Typography variant="body1" color="#fff">
									Tecnologia para o seu dia a dia
								</Typography>
							</div>
							<div className="banner__icon">
								<ArrowForward sx={{ color: '#fff', fontSize: '4rem'}} />
							</div>
						</div>
					</div>
				</Link>
		</Container>
	);
}

export default Banner;