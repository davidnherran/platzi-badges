import React, { Component } from "react";

export default class BadgeForm extends Component {

  handleChange = (e) => {
    console.log(e.target.value)
  }

  handleClick = (e) => {
    console.log("object")
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              className="form-control"
              type="text"
              name="firstName"
              onChange={this.handleChange}
            />
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">Save</button>
        </form>
      </div>
    );
  }
}
