import useFetch from '../useFetch';
import ContactList from './ContactList';

const Home = () => {
    const { data: contacts, isPending, error } = useFetch('/contacts/');

    return (
        <div className="home">
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div> }
            { contacts && <ContactList title="All Contacts" items={contacts} />}
        </div>
    )
}

export default Home;