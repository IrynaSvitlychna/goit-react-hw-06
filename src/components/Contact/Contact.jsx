import { BiSolidUser, BiSolidPhone } from "react-icons/bi";
import css from './Contact.module.css';

function Contact({ data: {name, number, id}, onDelete }) {
   
    return (
        <div className={css.containercontacts}>
            <div className={css.container}>
                <div className={css.elementscontainer}>
                    <BiSolidUser />
                    <p className={css.item}>{name}</p>
                </div>
                <div className={css.elementscontainer}>
                    <BiSolidPhone />
                    <p className={css.item}>{number}</p>
                </div>
            </div>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
       
    )
} 

 export default Contact
