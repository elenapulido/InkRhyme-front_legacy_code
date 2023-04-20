import * as React from 'react';
import { useState, useEffect } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai"
import { MdCancelPresentation } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import HTTPService from "../../Services/HTTPService";
import HeartButton from "../HeartButton/HeartButton";
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import EditForm from "../EditForm/EditForm";
import "./Article.css";

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
    if (!Array.isArray(data)) {
      console.log("data no es un array!");
      return;
    }
  
    const dataToEdit = data.find(d => d.id === id);
    setEditingData(dataToEdit);
  }

  return (
    <div className="container">
      {editingData ? (
        <div>
          <EditForm data={editingData} onSubmit={handleEdit} onCancel={handleEdit} />
        </div>
      ) : (
        <div>
          <Card variant="outlined" orientation="horizontal" sx={{ bgcolor: 'primary.main', width: 720, gap: 2, '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' }, }}>
            <Box sx={{ display: 'flex', alignItems: 'center', pb: 1.5, gap: 1 }}>
              <Box sx={{ position: 'relative', '&:before': { content: '""', position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, m: '-2px', borderRadius: '50%', background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)', }, }} >
                <Avatar size="lg" src={data.url} alt=" " sx={{ p: 0.5, border: '2px solid', borderColor: 'background.body' }} />
              </Box>
              <Typography fontWeight="lg">{data.author}</Typography>
            </Box>
           
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

              <Button variant="outlined" color="neutral" size="sm"><AiFillDelete onClick={handleDelete} size={25} /></Button>
              <Button variant="outlined" color="neutral" size="sm"><AiFillEdit onClick={() => handleEdit(data.id)} size={25} /></Button>
              <Button variant="outlined" color="neutral" size="sm"><MdCancelPresentation onClick={() => {window.location.href = "/"}} size={25} /></Button>
              
              <HeartButton />
            </div>           
          </Card>
          
        </div>
      )}
    </div>
  );
}

export default Article;