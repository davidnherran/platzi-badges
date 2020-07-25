import React from 'react';
import ReactDOM from 'react-dom';
// import BadgeNew from "./pages/BadgeNew"
import Badges from "./pages/Badges"
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

ReactDOM.render(
  <React.StrictMode>
    <Badges />
  </React.StrictMode>,
  document.getElementById('root')
);
