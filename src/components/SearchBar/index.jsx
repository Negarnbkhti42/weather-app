import { useState } from "react";
import { getSearchResults } from "../../services/httpService/getSearchResults";
import Search from "../Search";
import "./searchBar.scss";

function SearchBar() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  var searchTimeout = undefined;

  const search = (value) => {
    getSearchResults(value)
      .then((data) => {
        console.log(data);
        setResults(data);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    clearTimeout(searchTimeout);

    let value = e.target.value;
    setInput(value);

    searchTimeout = setTimeout(() => {
      search(value);
    }, 2000);
  };

  return (
    <div className="searchbar_container">
      <Search
        value={input}
        onChange={handleChange}
        onClear={() => setInput("")}
      />
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
