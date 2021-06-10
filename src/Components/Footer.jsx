import React from "react";
const Footer = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  return (
    <footer className="footer">
      <p className="small">
        Copyright {year}, <span style={{ fontWeight: "600" }}>@TMDB</span>
      </p>
      <p className="small text-warning">Design and coding by Paresh</p>
    </footer>
  );
};
export default Footer;
