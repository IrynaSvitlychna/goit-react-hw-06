import Contact from "../Contact/Contact"
import css from './ContactList.module.css'



function ContactList({ contacts, onDelete }) {

    return (
        <ul className={css.container}>
            {contacts.map((contact) => (
                <li className="" key="id">
                   <Contact data={contact} onDelete={onDelete} /> 
              </li>
          ) ) }
</ul>
    )
} 

 export default ContactList