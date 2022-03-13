import { useState } from "react";
import { getSearchResults } from "../../services/httpService/getSearchResults";
import Search from "../Search";
import "./searchBar.scss";

function SearchBar() {
  const [input, setInput] = useState("");
  var searchTimeout;

  const search = (value) => {
    getSearchResults(value)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    let value = e.target.value;
    setInput(value);

    clearTimeout(searchTimeout);

    if (value.length >= 3) {
      searchTimeout = setTimeout(() => {
        search(value);
      }, 2000);
    }
  };

  return (
    <div className="searchbar_container">
      <Search value={input} onChange={handleChange} />
      <div className="searchBar_results"></div>
    </div>
  );
}

export default SearchBar;
