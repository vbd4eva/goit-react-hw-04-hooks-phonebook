import PropTypes from 'prop-types'
import Notification from '../Notification/Notification'
import s from './ContactsBook.module.css'
 
function ContactsBook({totalNumber, children}) {
    return (
        <>
            {(totalNumber > 0)
                ?
            (<>
            <h2>Contacts</h2>
                <div className={s.contactsContainer}>
                    {children}
                </div>
            </>)
                :
            <Notification message="PhoneBook is emty"/>
            }
        </>
    )
}

ContactsBook.propTypes = {
    totalNumber: PropTypes.number.isRequired,
}

export default ContactsBook

