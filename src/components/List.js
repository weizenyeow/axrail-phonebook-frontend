import React, { Component } from "react";
import {contactItems} from "./data";

class List extends Component {
  renderItems = () => {
    return contactItems.map((item) => (
      <li>
        <p>{item.name}</p>
        <p>{item.phone_number}</p>
        <button>
        Edit
        </button>
        <button>
        Delete
        </button>
      </li>
    ))
  }

  render() {
    return (
      <div>
        <button onClick={() => window.location.href="/create"}>
          Add New Contact
        </button>
        <ul>
          {this.renderItems()}
        </ul>
      </div>
    )
  }
}

export default List;