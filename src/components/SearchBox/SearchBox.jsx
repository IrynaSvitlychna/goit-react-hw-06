import { useId } from "react"
import css from './SearchBox.module.css'


function SearchBox({ value, onChange }) {
 
    const id = useId();

    return (
        <div className={css.container}>
          
            <label htmlFor={id}>Find contacts by name</label>
            <input className={css.input} type="text" value={value} onChange={(e) => onChange(e.target.value)} id={id} />
               
        </div>
    )
} 

 export default SearchBox