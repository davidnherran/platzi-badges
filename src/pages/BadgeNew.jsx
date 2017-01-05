import React, { Component } from "react";
import Navbar from "../components/navbar/Navbar.jsx";
import Badge from "../components/badge/Badge";
import BadgeForm from "../components/forms/BadgeForm"
import header from "../images/badge-header.svg";
import "./styles/BadgeNew.css";

class BadgeNew extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Hero" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName="David"
                lastName="Herran"
                jobTitle="Frontend Engineer"
                tagName="davidnherran"
                avatarURL="https://icon-library.com/images/avatar-icon/avatar-icon-6.jpg"
              />
            </div>
            <div className="col-6">
                <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
