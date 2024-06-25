import CardNews from '../CardNews';
import { Grid } from '@mui/material';

interface Props{
    list: Array<any>;
}

function CardListNews({
    list
}: Props) {
	return (
        <>
        {list.map((item: any, index) => {
            return (
                <Grid item xs={4} sm={4} md={3} key={index} sx={{ display: 'flex', justifyContent: 'center'}}>
                    <CardNews
                        urlToImage={item?.urlToImage}
                        key={`${item?.id}-${index}`}
                        title={item?.title}
                        author={item?.author}
                        sourceName={item?.source.name}
                        publishedAt={item?.publishedAt}
                        description={item?.description}
                        url={item?.url}
                    />
                </Grid>
            );
        })}
        </>
	);
}

export default CardListNews;