import PropTypes from 'prop-types'
import s from './ContactListItem.module.css'

function ContactListItem({ name, number, deleteContact}) {
    return (
        <>
            <span className={s.name}>{name}</span> : <span className={s.number}>{number}</span> <button className={s.deleteBtn} type="button" onClick={deleteContact} >delete</button>
        </>
    )
}

ContactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
}

export default ContactListItem

