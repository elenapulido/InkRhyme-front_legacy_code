import { Navigate, useNavigate } from 'react-router-dom'
//import './Card.css'

import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Link from '@mui/joy/Link';
import IconButton from '@mui/joy/IconButton';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';




const Cards = ({ id, title, url , author, poem}) => {

    let navigate = useNavigate()
    
   
   
return (

    //     <div>
             
    //   <div className='cardContainer'>
    //     <div className='cardImage'>
    //       <img src={url} alt='' />
    //     </div>
    //     <h3 onClick={() => { navigate("/Article", { state: { id } }) }} className='cardText'>{title}</h3>
    //   </div>
    // </div>
     
     <>
         <Card key={id} onClick={() => { navigate("/Article", { state: { id } }) }} variant="outlined" sx={{ minWidth: 300, '--Card-radius': (theme) => theme.vars.radius.xs, }}>

                <Box sx={{ display: 'flex', alignItems: 'center', pb: 1.5, gap: 1 }}>
                        <Box sx={{ position: 'relative', '&:before': { content: '""', position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, m: '-2px', borderRadius: '50%', background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)', }, }} >
                          <Avatar size="sm" alt=" " sx={{ p: 0.5, border: '2px solid', borderColor: 'background.body' }} />
                          </Box>
                        <Typography fontWeight="lg">InkRhyme</Typography>
                     </Box>

                    <CardOverflow>
                        <AspectRatio>
                             <img src={url} alt=" " loading="lazy" />
                         </AspectRatio>
                  </CardOverflow>

                 <Box sx={{ display: 'flex', alignItems: 'center', mx: -1, my: 1 }}>

                      <Box sx={{ width: 0, display: 'flex', gap: 0.5 }}>
                           <IconButton variant="plain" color="neutral" size="sm">
                                heart
                          </IconButton>
                      </Box>
                 </Box>

                 <Link component="button" underline="none" fontSize="sm" fontWeight="lg" textColor="text.primary" >
                      8.1M Likes
                  </Link>


                     <Link component="button" color="neutral" fontSize="sm" fontWeight="lg" textColor="text.primary">
                      {author}
                  </Link>{' '}

                   {poem}

                  <Link  underline="none" fontSize="sm" startDecorator="…" sx={{ color: 'text.tertiary' }}>
                     more
                      </Link>

                  <CardOverflow sx={{ p: 'var(--Card-padding)', display: 'flex' }}>
                       <Input variant="plain" size="sm" placeholder="Add a comment…" sx={{ flexGrow: 1, mr: 1, '--Input-focusedThickness': '0px' }} />
                        <Link disabled underline="none" role="button">
                            Post
                        </Link>
                    </CardOverflow>

              </Card> 
              </>

    )
}

export default Cards




