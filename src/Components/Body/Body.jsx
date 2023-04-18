import Cards from '../Card/Cards';
import { useEffect, useState } from 'react';
import HTTPService from '../../Services/HTTPService';
import React from 'react';
 


function Body() {
    

    const [data, setData] = useState([]);
   
   

    useEffect(() => {
        HTTPService().ApiGetService()
            .then((data) => setData(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="body-view">
            {JSON.stringify(data) !== JSON.stringify([]) ?
                data.map((item) => (
                <Cards key={item.id} id={item.id} author={item.author} title={item.title} url={item.url} poem={item.poem} genre={item.genre}  />
            
                ))
                :
                <h3>Cargando poemas...</h3>
            }


        </div>
    )
}

export default Body;


