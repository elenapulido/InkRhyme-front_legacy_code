import { useState, useEffect } from "react";
import ApiService from "../../Services/ApiService";
import "./ArticlePage.css";

function ArticlePage() {
  const [data, setData] = useState([{}]);   
  const [pos, setPos] = useState([]);
  
  
  useEffect(() => {
    ApiService()
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="article-body">
      <div className="article-container">
        <img src={data[0].images} alt="art-img" className="article-img" />
        <div className="article-data">
          <p className="article-title">Title: {data[0].title}</p>
          <p className="article-author">Author: {data[0].price} $</p>
          <p className="article-cathegory">Amor</p>
        </div>
      </div>
      <div className="article-poem-container">
        <p className="article-poem">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio nihil
          consequuntur, nulla iste officiis facilis, numquam quia esse voluptate
          quae voluptatum minima ut dolore! Commodi soluta quidem repellat
          reprehenderit recusandae.
        </p>
      </div>
    </div>
  );
}

export default ArticlePage;
