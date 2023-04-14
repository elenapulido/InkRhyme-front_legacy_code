import { useState, useEffect } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai"
import "./Article.css";
import { useLocation, useNavigate } from "react-router-dom";
import HTTPService from "../../Services/HTTPService";
import HeartButton from "../HeartButton/HeartButton";

function Article() {
  const [data, setData] = useState({});
  const idInState = useLocation().state.id
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    HTTPService().ApiGetbyIdService(idInState)
    .then((data) => setData(data))
    .catch((error) => console.error(error));
  }, [location.state, navigate]);

  const handleDelete = () => {
    if (window.confirm("¿Está seguro de que desea eliminar este elemento?")) {
      HTTPService().ApiDeleteService(data.id)
        .then(() => navigate("/"))
        .catch(console.error);
    }
  };

  return (
    <div className="article-body">
      <div className="article-container">
        <img src={data.url} alt="art-img" className="article-img" />
        <div className="article-data">
          <p className="article-title">{data.title}</p>
          <p className="article-author">Author: {data.author}</p>
          <p className="article-category">{data.genre}</p>
          <div className="article-icons">
            <button onClick={handleDelete}>
              <AiFillDelete className="article-icon" size={25} color="black"/>
            </button>
            <button onClick={() => navigate("/Form", { state: { id: data.id } })}>
              <AiFillEdit className="article-icon" size={25} color="black"/>
            </button>
          </div>
          <HeartButton />
        </div>
      </div>
      <div className="article-poem-container">
        <p className="article-poem">{data.poem}</p>
      </div>
    </div>
  );
}

export default Article;
