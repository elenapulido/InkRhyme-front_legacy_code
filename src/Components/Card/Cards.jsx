import { Navigate, useNavigate } from 'react-router-dom'
import React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Link from '@mui/joy/Link';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import HeartButton from '../HeartButton/HeartButton';


const Cards = ({ id, title, url, author, poem }) => {

    let navigate = useNavigate()

return (

        <>
            <Card
                key={id}
                variant="outlined"
                sx={{
                    minWidth: 300,
                    '--Card-radius': (theme) => theme.vars.radius.xs,
                }}
            >

                <Box sx={{ display: 'flex', alignItems: 'center', pb: 1.5, gap: 1 }}>
                    <Box
                        sx={{
                            position: 'relative',
                            '&:before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                m: '-2px',
                                borderRadius: '50%',
                                background:
                                    'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
                            },
                        }}
                    >
                        <Avatar
                            size="sm"
                            src="/static/logo.png"
                            sx={{ p: 0.5, border: '2px solid', borderColor: 'background.body' }}
                        />
                    </Box>
                    <Typography fontWeight="lg" component="p" variant='h2'>{author}</Typography>

                </Box>

                <CardOverflow>
                    <AspectRatio>
                        <img src={url} alt=" " loading="lazy" />
                    </AspectRatio>
                </CardOverflow>

                <Box sx={{ display: 'flex', alignItems: 'center', mx: -1, my: 1 }}>
                    <Box sx={{ width: 0, display: 'flex', gap: 0.5 }}>
                        <IconButton variant="plain" color="neutral" size="sm">
                            <HeartButton />
                        </IconButton>
                    </Box>
                </Box>

             

                <Typography fontSize="sm">
                    <Link
                        component="button"
                        color="neutral"
                        fontWeight="lg"
                        textColor="text.primary"
                    >
                        {title}
                    </Link>{' '}
                    {poem}
                </Typography>

                <Link
                    onClick={() => { navigate("/Article", { state: { id } }) }}
                    component="button"
                    underline="none"
                    fontSize="sm"
                    startDecorator="…"
                    sx={{ color: 'text.tertiary' }}
                >
                    more
                </Link>

                

            </Card>
        </>

    )
}

export default Cards

