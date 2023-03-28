import { useState, useEffect } from "react";
import ApiGetbyIdService from "../../Services/ApiGetbyIdService";
import ApiGetService from "../../Services/ApiGetService";
import { AiFillDelete, AiFillEdit } from "react-icons/ai"
import "./Article.css";

function Article() {
  const url = "http://localhost:8080/api/v1/poems"
  const [data, setData] = useState([{}]);   

  
  useEffect(() => {
    ApiGetbyIdService(url, 1)
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="article-body">
      <div className="article-container">
        <img src={data.url} alt="art-img" className="article-img" />
        <div className="article-data">
          <p className="article-title">Title: {data.title}</p>
          <p className="article-author">Author: {data.author}</p>
          <p className="article-category">{data.genre}</p>
          <div className="article-icons">
            <AiFillDelete className="article-icon" size={25} color="black"/>
            <AiFillEdit className="article-icon" size={25} color="black"/>
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
