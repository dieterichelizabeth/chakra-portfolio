import React from "react";

function Main({ currentPage }) {
  const activePage = () => {
    if (currentPage === "Portfolio") {
      return <div>Portfolio</div>;
    }
    if (currentPage === "About") {
      return <div>About</div>;
    }
    if (currentPage === "Resume") {
      return <div>Resume</div>;
    }
    return <div>Contact</div>;
  };

  return <main>{activePage()}</main>;
}

export default Main;
