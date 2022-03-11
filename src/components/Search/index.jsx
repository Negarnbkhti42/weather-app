import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./search.scss";

function Search() {
  const [input, setInput] = useState();

  return (
    <div className="search_container">
      <span className="search_icon">
        <AiOutlineSearch />
      </span>
      <input
        type="search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="search_input"
        placeholder="search..."
      />
    </div>
  );
}

export default Search;
