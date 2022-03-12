import { useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./search.scss";

function Search() {
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useRef();

  const handleSearch = () => {
    setOpen(true);
    ref.current.focus();
  };

  const cancelSearch = () => {
    setOpen(false);
    setInput("");
  };

  return (
    <div className="search_container">
      <span className="search_icon" onClick={handleSearch}>
        <AiOutlineSearch />
      </span>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={`search_input ${open && "search_input-open"}`}
        placeholder="search..."
        ref={ref}
      />
      {open && (
        <button className="search_button" type="reset" onClick={cancelSearch}>
          X
        </button>
      )}
    </div>
  );
}

export default Search;
