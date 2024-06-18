import Button from 'home/button';
import { useEffect, useState } from 'react';
import { fetchData } from './service/api';

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
      <Button />

      <ol>
        {list.map((item: any, index) => {
          return (<li key={`${item?.id}-${index}`}>{item?.source.name}</li>)
        })}
      </ol>
  

    </div>
  );
};

export default App;
