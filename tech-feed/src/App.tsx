// import Button from 'home/button';
import { useEffect, useState } from 'react';
import { fetchData } from './../service/api';

const App = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchApi = async() => {
      const result: any = await fetchData();
      setList(result?.articles);
    }

    fetchApi();

  }, []);

  return (
    <div className="content">
      <button type='button' onClick={() => history.back()}>voltar</button>
      <h1>Consumer</h1>
      {/* <Button /> */}

      <section>
        {list.map((item: any, index) => {
          return (
            <article key={`${item?.id}-${index}`}>
              <header>
                <img style={{ maxWidth: '100%'}} src={item?.urlToImage} alt={item?.title} />
                <h2>
                  {item?.title}
                </h2>
                <p>
                  <span>{item?.author}</span> | <span>{item?.source.name}</span>
                </p>
                <span>{new Date(item?.publishedAt).toLocaleDateString('pt-br')}</span>
                <p>{item?.description}</p>
                <p>{item?.content.replace(/\[[0-9+\schars]*]$/gi, '')}
                  [<a href={item?.url} target='_blank' rel='noopener noreferrer'>
                  leia a materia completa
                  </a>]
                </p>
                
              </header>
            </article>
          )
        })}
      </section>
  

    </div>
  );
};

export default App;