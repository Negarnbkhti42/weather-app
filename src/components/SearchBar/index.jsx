import { useState } from "react";
import { getSearchResults } from "../../services/httpService/getSearchResults";
import Search from "../Search";
import "./searchBar.scss";

function SearchBar() {
  const [results, setResults] = useState([]);
  var searchTimeout = undefined;

  const search = (value) => {
    getSearchResults(value || " ")
      .then((data) => {
        console.log(data);
        setResults(data);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (value) => {
    clearTimeout(searchTimeout);

    searchTimeout = setTimeout(() => {
      search(value);
    }, 2000);
  };

  return (
    <div className="searchbar_container">
      <Search onChange={handleChange} />
      <div className="searchBar_results">
        {results.map((result) => (
          <div key={result.id}>
            {result.country}, {result.region}, {result.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
