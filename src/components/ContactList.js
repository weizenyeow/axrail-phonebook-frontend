import React, { Component } from "react";
import {contactItems} from "./data";

class ContactList extends Component {
  renderItems = () => {
    return contactItems.map((item) => (
      <div className="blog-preview" key={item.id} >
        <h2>{ item.name }</h2>
        <p>{ item.phone_number }</p>
      </div>
    ))
  }

  render() {
    return (
      <div className="blog-list">
        {this.renderItems()}
      </div>
    )
  }
}

export default ContactList;