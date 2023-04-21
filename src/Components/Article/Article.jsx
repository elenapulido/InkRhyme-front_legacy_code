import { useState, useEffect } from "react";
import "./Article.css";
import { useLocation, useNavigate } from "react-router-dom";
import HTTPService from "../../Services/HTTPService";
import HeartButton from "../HeartButton/HeartButton";
import React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import EditForm from "../EditForm/EditForm";



function Article() {
  const idInState = useLocation().state.id
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const [editingData, setEditingData] = useState(null);

  useEffect(() => {
    HTTPService().ApiGetbyIdService(idInState)
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);


  const handleDelete = () => {
    if (window.confirm("¿Está seguro de que desea eliminar este elemento?")) {
      HTTPService().ApiDeleteService(data.id)
        .then(() => navigate("/"))
        .catch(console.error);
    }
  };

  const handleEdit = (id) => {
    const dataToEdit = data.find(d => d.id === id);
    setEditingData(dataToEdit);
  }

  return (
    <>
      {editingData ? (
        <div>
          <EditForm data={editingData} onSubmit={handleEdit} onCancel={handleEdit} />
        </div>
      ) : (
        <div>
          <Card variant="outlined" orientation="horizontal" sx={{ width: 320, gap: 2, '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' }, }}>
            <Box sx={{ display: 'flex', alignItems: 'center', pb: 1.5, gap: 1 }}>
              <Box sx={{ position: 'relative', '&:before': { content: '""', position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, m: '-2px', borderRadius: '50%', background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)', }, }} >
                <Avatar size="sm" alt=" " sx={{ p: 0.5, border: '2px solid', borderColor: 'background.body' }} />
              </Box>
              <Typography fontWeight="lg">{data.author}</Typography>
            </Box>
            <AspectRatio ratio="1" sx={{ width: 90 }}>
              <img src={data.url} loading="lazy" alt="" />
            </AspectRatio>

            <div>

              <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
                {data.title}
              </Typography>

              <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
                {data.genre}
              </Typography>

              <Typography fontSize="sm" aria-describedby="card-description" mb={1}>
                <Link overlay underline="none" href="#interactive-card" sx={{ color: 'text.tertiary' }} >
                  {data.poem}
                </Link>
              </Typography>

              <Button variant="outlined" color="neutral" onClick={handleDelete} size="sm">Borrar</Button>
              <Button variant="outlined" color="neutral" onClick={() => handleEdit(data.id)} size="sm">Editar</Button>
             
            </div>
          </Card>
          <HeartButton />
        </div>
      )}
    </>
  );
}

export default Article;




