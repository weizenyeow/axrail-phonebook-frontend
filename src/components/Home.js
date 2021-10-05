import useFetch from "../services/useFetch";
import ContactList from './ContactList';
import { API } from '../services/url';

const Home = () => {
    const { data: contacts, isPending, error } = useFetch(API.contact.list);

    return (
        <div className="home">
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div> }
            { contacts && <ContactList title="All Contacts" items={contacts} />}
        </div>
    )
}

export default Home;