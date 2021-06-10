import React, { useState } from "react";
import { Form, Input } from "reactstrap";
export default function Header({ getMovies, link }) {
  const [returnBack, setReturnBack] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  const searchLink = process.env.REACT_APP_SEARCH_URL + searchKey;
  function handleChange(e) {
    setSearchKey(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (searchKey) {
      getMovies(searchLink);
      setSearchKey("");
      setReturnBack((prev) => !prev);
    }
  }
  const handleButtonClick = (e) => {
    e.preventDefault();
    getMovies(link);
    setReturnBack((prev) => !prev);
  };
  return (
    <div className="header d-flex  flex-row justify-content-between mt-3">
      <button
        onClick={handleButtonClick}
        style={{ visibility: !returnBack && "hidden" }}
        className="home"
      >
        Home
      </button>
      <Form onSubmit={handleSubmit}>
        <Input
          type="search"
          placeholder="Search..."
          className="search ml-5 pl-5"
          value={searchKey}
          onChange={handleChange}
        />
      </Form>
    </div>
  );
}
