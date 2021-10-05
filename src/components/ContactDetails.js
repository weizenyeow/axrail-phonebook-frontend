import { useParams } from "react-router-dom";
import { API } from "../services/url";
import useFetch from "../services/useFetch";

const ContactDetails = () => {
    const { id } = useParams();
    const { data: contact, error, isPending } = useFetch(API.contact.retrieve`${id}`);

    return ( 
        <div className="contact-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{error}</div> }
            { contact && (
                <div>
                    <h2>{contact.name}</h2>
                    <p>{contact.phone_number}</p>
                </div>
            )}
        </div>
     );
}
 
export default ContactDetails;