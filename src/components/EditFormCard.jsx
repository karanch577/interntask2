import React from "react";
import { Formik, Form, Field } from "formik";
import InputField from "./InputField";

// const validate = (values) => {
//   const errors = {};

//   // validating the email
//   // if (!values.email) {
//   //   errors.email = "email is required";
//   // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//   //   errors.email = "Invalid email address";
//   // }

//   // validating the first name
//   if (!values.firstName) {
//     errors.firstName = "first name is required";
//   }

//   // validating the last name
//   if (!values.lastName) {
//     errors.lastName = "last name is required";
//   }

//   // validating the date
//   if (!values.dateOfBirth) {
//     errors.dateOfBirth = "Date of Birth is required";
//   }

//   // validating the state
//   if (!values.state) {
//     errors.state = "state is required";
//   }

//   // validating the city
//   if (!values.city) {
//     errors.city = "city is required";
//   }

//   // validating the company
//   if (!values.company) {
//     errors.company = "company is required";
//   }

//   // validating the occupation
//   if (!values.occupation) {
//     errors.occupation = "occupation is required";
//   }
//   return errors;
// };

function EditFormCard() {
  // const formik = useFormik({
  //   initialValues: {
  //     firstName: "",
  //     lastName: "",
  //     dateOfBirth: "",
  //     state: "",
  //     city: "",
  //     company: "",
  //     occupation: "",
  //     email: "",
  //   },
  //   validate,
  //   onSubmit: (values) => {
  //     console.log(values)
  //     alert(JSON.stringify(values, null, 2));
  //   },
  // });

  return (
    <div className="shadow-primary px-4 pt-3 pb-3 mt-5 rounded-[21px]">
      <h2 className="font-[500] mb-3">Personal Information</h2>
      {/* <form onSubmit={formik.handleSubmit}>
        <InputField formik={formik} labelText="First Name" type="text" placeholder="Enter your first name" nameValue="firstName" />

        <InputField formik={formik} labelText="Last Name" type="text" placeholder="Enter your last name" nameValue="lastName" />

        <InputField formik={formik} labelText="Date of Birth" type="date" placeholder="Enter your date of birth" nameValue="dateOfBirth" />

        <InputField formik={formik} labelText="State" type="text" placeholder="Enter your state" nameValue="state" />

        <InputField formik={formik} labelText="City" type="text" placeholder="Enter your city" nameValue="city" />

        <InputField formik={formik} labelText="Company" type="text" placeholder="Enter your company you are working in" nameValue="company" />

        <InputField formik={formik} labelText="Occupation" type="text" placeholder="Enter your job designation" nameValue="occupation" />

        <div>
          <label htmlFor="occupation" className="text-[13px] block">
            Occupation
          </label>
          <Field
            type="text"
            placeholder="Enter your job designation"
            name="occupation"
            id="occupation"
            className="placeholder:italic placeholder:text-[11px] placeholder:text-[#878787] w-full pl-2 pb-1 pt-0.5 border border-[#B0B0B0] rounded-[6px] my-1"
          />
          <ErrorMessage
            className="text-[10px] text-red-500"
            name="occupation"
            component="div"
          />
        </div>

        <button onClick={formik.handleSubmit} type="submit">Submit</button>
      </form> */}

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          dateOfBirth: "",
          state: "",
          city: "",
          company: "",
          occupation: "",
          email: "",
          mobileNumber: "",
          addressLine1: "",
          addressLine2: ""
        }}
        validate={(values) => {
          const errors = {};

          // validating the first name
          if (!values.firstName) {
            errors.firstName = "first name is required";
          }

          // validating the last name
          if (!values.lastName) {
            errors.lastName = "last name is required";
          }

          // validating the date
          if (!values.dateOfBirth) {
            errors.dateOfBirth = "Date of Birth is required";
          }

          // validating the state
          if (!values.state) {
            errors.state = "state is required";
          }

          // validating the city
          if (!values.city) {
            errors.city = "city is required";
          }

          // validating the company
          if (!values.company) {
            errors.company = "company is required";
          }

          // validating the occupation
          if (!values.occupation) {
            errors.occupation = "occupation is required";
          }

          // validating the email
          if (!values.email) {
            errors.email = "email is required";
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = "Invalid email address";
          }

           // validating the mobile number
           if (!values.mobileNumber) {
            errors.mobileNumber = "mobile number is required";
          } else if (!/^(0|91)?[6-9][0-9]{9}$/.test(values.mobileNumber)) {
            errors.mobileNumber = "Invalid mobile number"
          }

           // validating the address line 1
           if (!values.addressLine1) {
            errors.addressLine1 = "address is required";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values)
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              labelText="First Name"
              type="text"
              placeholder="Enter your first name"
              nameValue="firstName"
            />

            <InputField
              labelText="Last Name"
              type="text"
              placeholder="Enter your last name"
              nameValue="lastName"
            />

            <InputField
              labelText="Date of Birth"
              type="date"
              placeholder="Enter your date of birth"
              nameValue="dateOfBirth"
            />

            <InputField
              labelText="State"
              type="text"
              placeholder="Enter your state"
              nameValue="state"
            />

            <InputField
              labelText="City"
              type="text"
              placeholder="Enter your city"
              nameValue="city"
            />

            <InputField
              labelText="Company"
              type="text"
              placeholder="Enter your company you are working in"
              nameValue="company"
            />

            <InputField
              labelText="Occupation"
              type="text"
              placeholder="Enter your job designation"
              nameValue="occupation"
            />

            <InputField
              labelText="Email"
              type="email"
              placeholder="Enter your email"
              nameValue="email"
            />

            <InputField
              labelText="Mobile Number"
              type="number"
              placeholder="Enter your mobile number"
              nameValue="mobileNumber"
            />

            <InputField
              labelText="Address"
              type="text"
              placeholder="Address line 1"
              nameValue="addressLine1"
            />

            {/* address line 2 */}

            <Field
            type="text"
            name="addressLine2"
            placeholder="Address line 2"
            className="placeholder:italic placeholder:text-[11px] placeholder:text-[#878787] w-full pl-2 pb-1 pt-0.5 border border-[#B0B0B0] rounded-[6px] my-1" />

            <button  type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default EditFormCard;
