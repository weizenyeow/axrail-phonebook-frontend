import { Link } from "react-router-dom";
import { Paths } from "../services/url";

const ContactList = ({ title, items }) => {
  const renderItems = () => {
    return items.map((item) => (
      <div className="contact-preview" key={item.id} >
        <Link to={Paths.contact.viewContact`${item.id}`}>
          <h2>{ item.name }</h2>
          <p>{ item.phone_number }</p>
        </Link>
      </div>
    ));
  }

  return (
    <div className="contact-list">
      <h2>{ title }</h2>
      {renderItems()}
    </div>
  )
}

export default ContactList;