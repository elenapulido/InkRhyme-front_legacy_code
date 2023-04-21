import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../../Services/AuthService";
import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Link from '@mui/joy/Link';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import HeartButton from '../HeartButton/HeartButton';

function Profile({ id, url }) {
  const [redirect, setRedirect] = useState(null);
  const [currentUser, setCurrentUser] = useState({ username: "" });
  const [userReady, setUserReady] = useState(false);


  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) {
      setRedirect("/home");
    } else {
      setCurrentUser(currentUser);
      setUserReady(true);
    }
  }, []);

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div className="container">
      {userReady ? (
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
            <Typography fontWeight="lg" component="p" variant='h2'>{currentUser.username}</Typography>
          </Box>

          <CardOverflow>
            <AspectRatio>
              <img src={url} alt=" " loading="lazy" />
            </AspectRatio>
          </CardOverflow>

          <Typography fontWeight="lg">
            <Link
              component="button"
              color="neutral"
              fontWeight="lg"
              textColor="text.primary"
            >User:
              {currentUser.username}
            </Link>{' '}
          </Typography>
          <Typography fontSize="sm">
            <Link
              component="button"
              color="neutral"
              fontWeight="lg"
              textColor="text.primary"
            >Token:
              {currentUser.accessToken.substring(0, 20)} ...{" "}
              {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
            </Link>{' '}
          </Typography>
          <Typography fontSize="sm">
            <Link
              component="button"
              color="neutral"
              fontWeight="lg"
              textColor="text.primary"
            >Id:
              {currentUser.id}
            </Link>{' '}
          </Typography>
          <Typography fontSize="sm">
            <Link
              component="button"
              color="neutral"
              fontWeight="lg"
              textColor="text.primary"
            >Email:
              {currentUser.email}
            </Link>{' '}
          </Typography>
          <Typography fontSize="sm">
            <Link
              component="button"
              color="neutral"
              fontWeight="lg"
              textColor="text.primary"
            >Authorities:
              {currentUser.roles &&
                currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
            </Link>{' '}
          </Typography>
        </Card>
      ) : null}
    </div>
  );
}
export default Profile;

