import React from "react";
import "../../styles/styleNotFoundPage.css";
import { Link, useLocation } from "react-router-dom";
import HomePage from "./HomePage";

const NotFoundPage = () => {
  const location = useLocation();
  return (
    <>
      <div id="NotFound">
        <div className="message">
          <h1>Error 404</h1>
          <p>
            Oops! Itseems like you're lost, let me help you find your way back
            home!
          </p>
          <p>
            Link : <span>{window.location.href}</span>{" "}
          </p>
          <p>
            Pathname : <span>{location.pathname}</span>
          </p>
          <p>The Link/Pathname is unavailable or broken</p>
          <Link to="/" element={HomePage}>
            <button className="button-not-found">Home</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
