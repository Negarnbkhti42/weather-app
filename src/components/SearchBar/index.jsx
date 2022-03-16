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
    let { value } = { ...target };
    setInput(value);
    value = value.trim();
    showOptions || setShowOptions(true);

    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      getSearchResults(value)
        .then((data) => setOptions(data))
        .catch((err) => console.log(err));
    }, 2000);
  };

  const handleClick = () => {};

  return (
    <div className="searchbar_container" ref={wrapperRef}>
      <span className="searchbar_icon">
        <AiOutlineSearch />
      </span>
      <input
        className="searchbar_input"
        type="text"
        value={input}
        onChange={handleChange}
      />
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
    </div>
  );
}

export default SearchBar;
