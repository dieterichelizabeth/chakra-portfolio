import React from "react";
import About from "../About";
import Resume from "../Resume";
import Portfolio from "../Portfolio";

function Main({ currentPage }) {
  const activePage = () => {
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
  };

  return <main>{activePage()}</main>;
}

export default Main;
