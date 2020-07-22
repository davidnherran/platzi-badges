import React, { Component } from 'react'
import logo from "../../images/logo.svg"
import "./Navbar.css"

export default class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <a href="/">
                    <img src={logo} alt="Logo"/>
                    <span className="font-weight-light">Platzi</span>
                    <span className="font-weight-bold">Conf</span>
                </a>
            </div>
        )
    }
}
