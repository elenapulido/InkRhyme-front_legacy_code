
import Card from '../../Components/Card/Card';
import './MainPage.css';
import { useEffect, useState } from 'react';
import ApiGetService from '../../Services/ApiGetService';

function MainPage() {
  const url = "http://localhost:8080/api/v1/poems"
  const [data, setData] = useState([]);

  useEffect(() => {
    ApiGetService(url)
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      { JSON.stringify(data) !== JSON.stringify([]) ?
        data.map((item) => (
          <Card key={item.id} title={item.title} url={item.url} />
        ))
        :
        <>No hay ningun poema :c</>
      }

    </div>
  )
}

export default MainPage;