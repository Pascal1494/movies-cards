import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">Spiderflix</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/">Films sur serveur</Link>
            </li>

            <li>
              <Link to="/watched">Films vues</Link>
            </li>

            <li>
              <Link to="/add" className="btn btn-main">
                + Ajouter
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
