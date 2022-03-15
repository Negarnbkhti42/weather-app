import { useRef } from "react";
import { useEffect, useState } from "react";

import { getSearchResults } from "../../services/httpService/getSearchResults";

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
    let { value } = target;
    setInput(value);
    showOptions || setShowOptions(true);

    clearInterval(searchTimeout);

    searchTimeout = setTimeout(() => {
      if (value.length >= 3) {
        getSearchResults(value.toLowerCase())
          .then((data) => setOptions(data))
          .catch((err) => console.log(err));
      }
    }, 1000);
  };

  const handleClick = () => {};

  return (
    <div ref={wrapperRef}>
      <input type="text" value={input} onChange={handleChange} />
      <div>
        {showOptions &&
          options.map((opt) => (
            <div key={opt.id} onClick={handleClick}>
              {opt.country}, {opt.region}, {opt.name}
            </div>
          ))}
      </div>
    </div>
  );
}

export default SearchBar;
