import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

interface Props{
    title: string;
    urlToImage: string;
    author: string;
    sourceName: string;
    publishedAt: string;
    description: string;
    url: string;
}

function CardNews({
	title,
	urlToImage,
	url,
	author,
	sourceName,
	publishedAt,
	description,
}: Props) {
	return (
		<Card sx={{ maxWidth: 300 }}>
			<CardMedia
				component="img"
				alt={title}
				height="140"
				image={urlToImage}
			/>
			<CardContent>
				<Typography variant="body2" color="text.secondary">
					{author}
				</Typography>
				<Typography variant="caption" color="text.secondary">
					{new Date(publishedAt).toLocaleDateString("pt-br")} -{" "}
					{sourceName}
				</Typography>
				<Typography gutterBottom variant="h5" component="div">
					<Link
						href={url}
						target="_blank"
						rel="noopener noreferrer"
						underline="none">
						{title}
					</Link>
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{description}
				</Typography>
			</CardContent>
			<CardActions>
				<Button>
					<Link href={url} target="_blank" rel="noopener noreferrer">
						leia a materia completa
					</Link>
				</Button>
			</CardActions>
		</Card>
	);
}

export default CardNews;