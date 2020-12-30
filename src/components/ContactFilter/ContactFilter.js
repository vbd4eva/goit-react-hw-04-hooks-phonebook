import PropTypes from 'prop-types'
import s from './ContactFilter.module.css'

function ContactFilter({ value, setFilter }) {

    const onChange = (e) => {
        setFilter(e.currentTarget.value);
    }
    

    return (
         <label className={s.label}>
            Find contacts by name
            <input
                className={s.input}
                 type="text"
                 name="filter"
                 value={value}
                 onChange={onChange}
             />
         </label>
    )
}

ContactFilter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default ContactFilter

