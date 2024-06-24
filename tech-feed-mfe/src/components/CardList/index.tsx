import * as React from 'react';
import CardNews from './../CardNews';
import { Grid } from '@mui/material';

interface Props{
    list: Array<any>;
}

function CardList({
    list
}: Props) {
	return (
        // <section>
        <>
        {list.map((item: any, index) => {
            return (
                <Grid item xs={2} sm={4} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center'}}>
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
        // </section>
	);
}

export default CardList;