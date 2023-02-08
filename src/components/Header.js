import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const pathName = useLocation().pathname;

  return (
    <header className="header">
      <div className="logo">
        <h1 className="title-font sm:text-4xl text-3xl font-bold mb-4">
          - {pathName === `/` && <>Profile</>}
          {pathName === `/gallery` && <>Gallery</>}
          {pathName === `/skills` && <>Skills</>} -
        </h1>
      </div>

      <nav>
        <ul>
          <li className={pathName === `/` ? "currentPath" : ""}>
            <Link to="/">Profile</Link>
          </li>
          <li className={pathName === `/gallery` ? "currentPath" : ""}>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li className={pathName === `/skills` ? "currentPath" : ""}>
            <Link to="/skills">Skills</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
