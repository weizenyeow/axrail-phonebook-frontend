import { Paths } from "../services/url";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Axrail Phonebook Assessment</h1>
            <div className="links">
                <a href={Paths.contact.viewContacts}>Home</a>
                <a href={Paths.contact.createContact} style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }}>Add New Contact</a>
            </div>
        </nav>
    );
}

export default Navbar;