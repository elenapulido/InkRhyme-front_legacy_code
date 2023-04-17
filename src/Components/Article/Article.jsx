import { useState, useEffect } from "react";
import ApiGetbyIdService from "../../Services/ApiGetbyIdService";
import ApiGetService from "../../Services/ApiGetService";
import { AiFillDelete, AiFillEdit } from "react-icons/ai"
import "./Article.css";
import { useLocation, useNavigate } from "react-router-dom";
import ApiDeleteService from "../../Services/ApiDeleteService";
import HeartButton from "../HeartButton/HeartButton";

function Article() {
  const idInState = useLocation().state.id
  const [data, setData] = useState({});
  const navigate = useNavigate();

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
  
  useEffect(() => {
    ApiGetbyIdService(url, idInState)
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

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
            <button onClick={() => {navigate("/Form", {state: {id: idInState}})}}>
              <AiFillEdit className="article-icon" size={25} color="black"/>
            </button>
          </div>
          <HeartButton/>
        </div>
      </div>
      <div className="article-poem-container">
        <p className="article-poem">
        {data.poem}
        </p>
      </div>
    </div>
  );
}

export default Article;
