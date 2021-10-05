import { useState } from "react";
import { API } from "../services/url";


const CreateContact = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = {name, phoneNumber};
  }

  return (
    <div className="create">
      <h2>Add A New Contact</h2>
      <form onSubmit={handleSubmit}>
        <label>Contact Name:</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Contact Number:</label>
        <input
          type="number"
          required
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button>Add Contact</button>
      </form>
    </div>
  );
};

export default CreateContact;
