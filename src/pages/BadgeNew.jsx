import React, { Component } from 'react'
import Navbar from "../components/navbar/Navbar.jsx"
import header from "../images/badge-header.svg"
import "./styles/BadgeNew.css"

class BadgeNew extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                <img className="img-fluid" src={header} alt="Hero"/>
                </div>
            </div>
        )
    }
}

export default BadgeNew