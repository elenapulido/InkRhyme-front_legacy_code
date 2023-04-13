import { useState, useEffect } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai"
import "./Article.css";
import { useLocation, useNavigate } from "react-router-dom";
import HTTPService from "../../Services/HTTPService";
import HeartButton from "../HeartButton/HeartButton";

function Article() {
  const url = "http://localhost:8082/api/v1/poems"
  const [poem, setPoem] = useState({});
  const idInState = useLocation().state.id
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const poemId = location.state?.id;
    if (!poemId) {
      navigate("/");
      return;
    }

    HTTPService().ApiGetbyIdService(url, idInState)
      .then(setPoem)
      .catch(console.error);
  }, [location.state, navigate]);

  const handleDelete = () => {
    if (window.confirm("¿Está seguro de que desea eliminar este elemento?")) {
      HTTPService().ApiDeleteService(poem.id)
        .then(() => navigate("/"))
        .catch(console.error);
    }
  };

  return (
    <div className="article-body">
      <div className="article-container">
        <img src={poem.url} alt="art-img" className="article-img" />
        <div className="article-data">
          <p className="article-title">{poem.title}</p>
          <p className="article-author">Author: {poem.author}</p>
          <p className="article-category">{poem.genre}</p>
          <div className="article-icons">
            <button onClick={handleDelete}>
              <AiFillDelete className="article-icon" size={25} color="black"/>
            </button>
            <button onClick={() => navigate("/Form", { state: { id: poem.id } })}>
              <AiFillEdit className="article-icon" size={25} color="black"/>
            </button>
          </div>
          <HeartButton />
        </div>
      </div>
      <div className="article-poem-container">
        <p className="article-poem">{poem.poem}</p>
      </div>
    </div>
  );
}

export default Article;
