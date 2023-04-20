import React from 'react';
import Cards from '../Card/Cards';
import { useEffect, useState } from 'react';
import HTTPService from '../../Services/HTTPService';

function Body() {    

    const [data, setData] = useState([]);   

    useEffect(() => {
        HTTPService().ApiGetService()
            .then((data) => setData(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className='container'>
        <div className="body-view">
            {JSON.stringify(data) !== JSON.stringify([]) ?
                data.map((item) => (
                <Cards key={item.id} id={item.id} title={item.title} url={item.url} />
            
                ))
                :
                <h3>Cargando poemas...</h3>
            }

        </div>
        </div>
    )
}

export default Body;