import Cards from '../Card/Cards';
import { useEffect, useState } from 'react';
import HTTPService from '../../Services/HTTPService';
import React from 'react';
// import AspectRatio from '@mui/joy/AspectRatio';
// import Avatar from '@mui/joy/Avatar';
// import Box from '@mui/joy/Box';
//import Card from '@mui/joy/Card';
// import CardOverflow from '@mui/joy/CardOverflow';
// import Link from '@mui/joy/Link';
// import IconButton from '@mui/joy/IconButton';
// import Input from '@mui/joy/Input';
// import Typography from '@mui/joy/Typography';

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


