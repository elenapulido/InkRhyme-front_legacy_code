import { useState } from "react";
import HTTPService from "../../Services/HTTPService";
import "./Search.css";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const httpService = HTTPService();

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = async () => {
    if (searchTerm) {
      const data = await httpService.ApiGetService();
      const filteredResults = data.filter((item) =>
        item.genre.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="d-flex" role="search">
      <input
        className="form-control me-2"
        placeholder="Search"
        type="text"
        value={searchTerm}
        onChange={handleSearchTermChange}
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
            <div key={result.id}>{result.genre}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
