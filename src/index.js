import React from 'react';
import ReactDOM from 'react-dom';
//import Badge from "./components/badge/Badge";
import BadgeNew from "./pages/BadgeNew"
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

ReactDOM.render(
  <React.StrictMode>
    <BadgeNew />
      {/*<Badge
    firstName="David"
    lastName="Herran"
    jobTitle="Frontend Engineer"
    tagName="davidnherran"
    avatarURL="https://icon-library.com/images/avatar-icon/avatar-icon-6.jpg"
  />*/}
  </React.StrictMode>,
  document.getElementById('root')
);
