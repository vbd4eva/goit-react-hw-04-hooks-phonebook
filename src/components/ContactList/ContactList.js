import PropTypes from 'prop-types'
import ContactListItem from './ContactListItem/ContactListItem'
import Notification from '../Notification/Notification'
import s from './ContactList.module.css'


function ContactList({ contacts, deleteContact }) {
    return (
        (contacts.length > 0)
        ?
        <ul className={s.list}>
            {contacts.map(
                ({ id, name, number }) => 
                    (<li key={id} className={s.item}>
                        <ContactListItem
                            name={name}
                            number={number}
                            deleteContact={()=>deleteContact(id)}
                        />
                    </li>)
            )}
        </ul>
        :
        <Notification message="is Nothing finded...Try to change request"/>
            
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    }))
}

export default ContactList

