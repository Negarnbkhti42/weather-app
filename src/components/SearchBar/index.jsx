import { useRef } from "react";
import { useEffect, useState } from "react";

import { getSearchResults } from "../../services/httpService/getSearchResults";
import { AiOutlineSearch } from "react-icons/ai";

import "./searchbar.scss";

function SearchBar() {
  const [input, setInput] = useState("");
  const [options, setOptions] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const wrapperRef = useRef();
  const inputRef = useRef();

  var searchTimeout = undefined;

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowOptions(false);
        setInput("");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef]);

  const handleChange = ({ target }) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      getSearchResults(value)
        .then((data) => setOptions(data))
        .catch((err) => console.log(err));
    }, 2000);

    let { value } = { ...target };
    setInput(value);
    value = value.trim();
    showOptions || setShowOptions(true);
  };

  const handleClick = () => {};

  return (
    <>
      <div className="searchbar_container" ref={wrapperRef}>
        <div className="searchbar_searchField">
          <span
            className="searchbar_icon"
            onClick={() => inputRef.current.focus()}
          >
            <AiOutlineSearch />
          </span>
          <input
            className="searchbar_input"
            type="text"
            value={input}
            onChange={handleChange}
            ref={inputRef}
            placeholder="search..."
          />
        </div>
      </div>
      <div className="searchbar_options">
        {showOptions &&
          options.map((opt) => (
            <div
              className="searchbar_option"
              key={opt.id}
              onClick={handleClick}
            >
              {opt.country}, {opt.region}, {opt.name}
            </div>
          ))}
      </div>
    </>
  );
}

export default SearchBar;
