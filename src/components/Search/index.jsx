import { useRef, useState } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import "./search.scss";

function Search({ onChange, value, onClear }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  const handleSearch = () => {
    setOpen(!open);
    open || ref.current.focus();
  };

  return (
    <div className={`search_container ${open && "search_container-open"}`}>
      <span className="search_icon" onClick={handleSearch}>
        <AiOutlineSearch />
      </span>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={`search_input ${open && "search_input-open"}`}
        placeholder="search..."
        ref={ref}
      />
      <button className="search_button" type="reset" onClick={onClear}>
        <AiOutlineClose />
      </button>
    </div>
  );
}

export default Search;
