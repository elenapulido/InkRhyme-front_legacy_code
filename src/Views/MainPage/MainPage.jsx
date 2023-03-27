
import Card from '../../Components/Card/Card';
import './MainPage.css';
import { useEffect, useState } from 'react';
import ApiGetService from '../../Services/ApiGetService';

function MainPage() {
  
  const [data, setData] = useState([{}]);   
 
  useEffect(() => {
    ApiGetService()
    
      .then((data) => {console.log(data); setData(data)})
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
     {data.map((item) => (
        <Card  key={item.id} title = {item.title} url = {item.url} />     
    ))} 
    
    </div>
  );
}

export default MainPage;