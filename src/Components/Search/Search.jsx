import { useState } from "react";
import Cards from '../Card/Cards';
import HTTPService from "../../Services/HTTPService";
import "./Search.css";

function Search() {
  const [searchGenre, setSearchGenre] = useState("");
  const [results, setResults] = useState([]);
  const httpService = HTTPService();

  const handleSearchGenreChange = (event) => {
    setSearchGenre(event.target.value);
  };

  const handleSearchClick = async () => {
    if (searchGenre) {
      const data = await httpService.ApiGetService();
      const filteredResults = data.filter((item) =>
        item.genre.toLowerCase().includes(searchGenre.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="d-flex" role="search">
      <h2>𝓟𝓞𝓔𝓜𝓐𝓢</h2>
      <input
        className="form-control me-2"
        placeholder="🔍Search..."
        type="search"
        value={searchGenre}
        onChange={handleSearchGenreChange}
        aria-label="Search"
      />

      <button
        className="btn btn-outline-success"
        type="button"
        onClick={handleSearchClick}
      >
        Search
      </button>

      {results.length > 0 && (
        <div className="position-absolute bg-white">
          {results.map((result) => (
            <Cards key={result.id} id={result.id} author={result.author} title={result.title} url={result.url} poem={result.poem} genre={result.genre}  />
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;


