import React from "react";
export default function Movie({ title, poster_path, overview, vote_average }) {
  let movie_title = title;
  // short only long film names
  if (movie_title.length > 25) {
    movie_title = movie_title.substring(0, 25) + "...";
  }
  const imgApi = process.env.REACT_APP_IMAGE_API_URL;
  const setVoteClass = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote < 8 && vote > 4) {
      return "orange";
    } else {
      return "red";
    }
  };
  return (
    <div className="movie mx-auto">
      <img
        src={
          poster_path
            ? imgApi + poster_path
            : "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW92aWVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        }
        alt="title"
      />
      <div className="info d-flex flex-row justify-content-between align-items-center p-2">
        <h4 style={{ fontSize: "15px" }}>{movie_title}</h4>
        <span className={`tag ${setVoteClass(vote_average)}`}>
          {vote_average}
        </span>
      </div>
      <div className="movie-hover p-3 bg-white">
        <h4 style={{ fontWeight: "500" }}>Overview :</h4>
        <p>{overview}</p>
      </div>
    </div>
  );
}
