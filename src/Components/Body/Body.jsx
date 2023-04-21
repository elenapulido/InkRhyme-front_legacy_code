import React, { useEffect, useState } from 'react';
import HTTPService from '../../Services/HTTPService';
import UserService from '../../Services/UserService';
import Cards from '../Card/Cards';


function Body() {
  const [content, setContent] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    UserService().getPublicContent()
      .then((response) => {
        setContent(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    HTTPService().ApiGetService()
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='container'>
      <div className='body-view'>
        {JSON.stringify(data) !== JSON.stringify([]) ? (
          data.map((item) => (
            <Cards
              key={item.id}
              id={item.id}
              author={item.author}
              title={item.title}
              url={item.url}
              poem={item.poem}
              genre={item.genre}
            />
          ))
        ) : (
          <h3>Cargando poemas...</h3>
        )}
      </div>
    </div>
  );
}

export default Body;
