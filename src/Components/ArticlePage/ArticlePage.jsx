import { useState, useEffect } from "react";
import ApiService from "../../Services/ApiService";
import "./ArticlePage.css";

function ArticlePage() {
  const [data, setData] = useState([{}]);   

  
  useEffect(() => {
    ApiService()
    
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="article-body">
      <div className="article-container">
        <img src={data[0].url} alt="art-img" className="article-img" />
        <div className="article-data">
          <p className="article-title">Title: {data[0].title}</p>
          <p className="article-author">Author: {data[0].author} $</p>
          <p className="article-cathegory">{data[0].genre}</p>
        </div>
      </div>
      <div className="article-poem-container">
        <p className="article-poem">
        {data[0].poem}
        </p>
      </div>
    </div>
  );
}

export default ArticlePage;
