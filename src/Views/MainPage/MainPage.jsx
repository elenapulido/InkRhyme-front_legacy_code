
import Card from '../../Components/Card/Card';
import './MainPage.css';
import { useEffect, useState } from 'react';
import ApiGetService from '../../Services/ApiGetService';

function MainPage() {

  const [data, setData] = useState([{}]);   
 
  useEffect(() => {
    ApiGetService()
    
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
    {data.map((item) => (
        <Card  title = {item[0].title} url = {item[0].url} />     
    ))}
      
    </div>
  );
}

export default MainPage;