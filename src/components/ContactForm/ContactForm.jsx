import { useId } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';
 import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';


 const FormSchema = Yup.object().shape({
   name: Yup.string()
     .min(3, 'Too Short!')
     .max(50, 'Too Long!')
     .required('This is required to dummy!'),
   number: Yup.string()
     .min(3, 'Too Short!')
     .max(50, 'Too Long!')
     .required('This is required to dummy!'),
   });

function ContactForm({ onAdd }) {
     
    const idName = useId();
  const idNumber = useId();
  
  const handleFormSubmit = (values) => {
      
    onAdd({
      id: nanoid(10),
      name: values.name,
      number: values.number,
    });
    
  };
   
    return (
         <Formik
            initialValues={{ name: "", number: ""}}
            validationSchema={FormSchema}
            onSubmit={(values, actions) => {
                handleFormSubmit(values);
                actions.resetForm();
        }}
      >
        <Form className={css.form}>
                <div className={css.list}>
                    <label className={css.label} htmlFor={idName}>Name</label>
                    <Field className={css.input} name="name" type="text" id={idName} />
            <ErrorMessage className={css.error} name="name" component="span" />
                </div>
                <div className={css.list}>
                    <label htmlFor={idNumber}>Number</label>   
                    <Field className={css.input} name="number" type="text" id={idNumber} />
            <ErrorMessage className={css.error} name="number" component="span" />
                </div>
          
                <button className={css.btn} type="submit">Add contact</button>
            </Form>
        </Formik>
    )
} 

export default ContactForm
 