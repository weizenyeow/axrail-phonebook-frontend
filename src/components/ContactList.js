const ContactList = ({ title, items }) => {
  const renderItems = () => {
    return items.map((item) => (
      <div className="blog-preview" key={item.id} >
        <h2>{ item.name }</h2>
        <p>{ item.phone_number }</p>
      </div>
    ));
  }

  return (
    <div className="blog-list">
      <h2>{ title }</h2>
      {renderItems()}
    </div>
  )
}

export default ContactList;