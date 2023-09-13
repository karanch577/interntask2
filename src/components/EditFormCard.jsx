import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';

function EditFormCard() {
  return (
    <div className='shadow-primary px-3 mt-5 rounded-[21px]'>
        <h2 className='font-[500]'>Personal Information</h2>
        <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form>
            <label htmlFor="firstName">First Name</label>
           <Field type="text" placeholder="Enter your first name" name="email" id="email"/>
           <ErrorMessage name="email" component="div" />
           <Field type="password" name="password" />
           <ErrorMessage name="password" component="div" />
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </Form>
       )}
     </Formik>
    </div>
  )
}

export default EditFormCard