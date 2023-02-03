import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const pathName = useLocation().pathname;

  return (
    <header>
      <div className="logo">
        <h3>
          {pathName === `/` && (
            <>
              <p>Profile</p>
            </>
          )}
          {pathName === `/gallery` && (
            <>
              <p>Gallery</p>
            </>
          )}
          {pathName === `/skills` && (
            <>
              <p>Skills</p>
            </>
          )}
        </h3>
      </div>

      <nav>
        <ul>
          <li className={pathName === `/` && "currentPath"}>
            <Link to="/">Profile</Link>
          </li>
          <li className={pathName === `/gallery` && "currentPath"}>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li className={pathName === `/skills` && "currentPath"}>
            <Link to="/skills">Skills</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
