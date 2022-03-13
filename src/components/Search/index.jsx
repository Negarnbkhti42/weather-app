import { useRef, useState } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import "./search.scss";

function Search({ onChange }) {
  const [input, setInput] = useState("");
  const ref = useRef();

  const handleSearch = () => {
    if (document.activeElement !== ref.current) {
      ref.current.focus();
    }
  };

  const handleChange = (e) => {
    let value = e.target.value;
    setInput(value);
    onChange?.(value);
  };

  const handleClear = () => {
    setInput("");
    ref.current.focus();
    onChange?.("");
  };

  return (
    <div className={`search_container `}>
      <span className="search_icon" onClick={handleSearch}>
        <AiOutlineSearch />
      </span>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        className={`search_input`}
        placeholder="search..."
        ref={ref}
      />
      <button className="search_button" type="reset" onClick={handleClear}>
        <AiOutlineClose />
      </button>
    </div>
  );
}

export default Search;
