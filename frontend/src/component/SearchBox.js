import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { BsSearch } from "react-icons/bs";

function SearchBox(props) {
  const [name, setName] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    props.history.push(`/search/name/${name}`);
  };
  return (
    <form onSubmit={submitHandler} className="header__search">
      <input
        className="header__searchInput"
        type="text"
        name="q"
        id="q"
        onChange={(e) => setName(e.target.value)}
      />

      {/* <SearchIcon fontSize="medium" className="header__searchIcon" /> */}
      <button type="submit" className="header__searchIcon">
        <BsSearch size="2.3rem" />
      </button>
    </form>
  );
}

export default SearchBox;
