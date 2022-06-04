import React from "react";
import About from "../About";
import Resume from "../Resume";

function Main({ currentPage }) {
  const activePage = () => {
    if (currentPage === "Portfolio") {
      return <div>Portfolio</div>;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <div>Contact</div>;
  };

  return <main>{activePage()}</main>;
}

export default Main;
