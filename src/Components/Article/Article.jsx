import { useState, useEffect } from "react";
import ApiGetbyIdService from "../../Services/ApiGetbyIdService";
import ApiGetService from "../../Services/ApiGetService";
import { AiFillDelete, AiFillEdit } from "react-icons/ai"
import "./Article.css";
import { useLocation, useNavigate } from "react-router-dom";
import ApiDeleteService from "../../Services/ApiDeleteService";

function Article() {
  const url = "http://localhost:8080/api/v1/poems"
  const idInState = useLocation().state.id
  const [data, setData] = useState([{}]);   
  const navigate = useNavigate()



  
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
            <a href="/"><AiFillDelete onClick={() => {ApiDeleteService(url, idInState)}} className="article-icon" size={25} color="black"/></a>
            <AiFillEdit onClick={() => {navigate("/Form", {state: {id: idInState}})}} className="article-icon" size={25} color="black"/>
          </div>
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
