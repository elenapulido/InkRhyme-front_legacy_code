import Card from '../../Components/Card/Card';
import { useEffect, useState } from 'react';
import HTTPService from '../../Services/HTTPService';

function Body() {
  const url = "http://localhost:8082/api/v1/poems"
  const [data, setData] = useState([]);

  useEffect(() => {
    HTTPService().ApiGetService(url)
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
     

      {JSON.stringify(data) !== JSON.stringify([]) ?
        data.map((item) => (
          <Card key={item.id} id={item.id} title={item.title} url={item.url} />
        ))
        :
        <h3>Cargando poemas...</h3>
      }
    
    
    </div>
  )
}

export default Body;