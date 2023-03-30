
import Card from '../../Components/Card/Card';
import './MainPage.css';
import { useEffect, useState } from 'react';
import ApiGetService from '../../Services/ApiGetService';
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer';
import ButtonUp from '../../Components/ButtonUp/ButtonUp';

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
      <Header />
      <Navbar />
      {JSON.stringify(data) !== JSON.stringify([]) ?
        data.map((item) => (
          <Card key={item.id} id={item.id} title={item.title} url={item.url} />
        ))
        :
        <h3>Cargando poemas...</h3>
      }
      <ButtonUp />
      <Footer />
    </div>
  )
}

export default MainPage;