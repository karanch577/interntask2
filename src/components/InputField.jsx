import { Field, ErrorMessage } from 'formik'
import React from 'react'

function InputField({ labelText, type, placeholder, nameValue }) {
  return (
    <div>
          <label htmlFor={nameValue} className="text-[13px] block">
            {labelText}
          </label>
          <Field
            type={type}
            placeholder={placeholder}
            name={nameValue}
            id={nameValue}
            className="placeholder:italic placeholder:text-[11px] placeholder:text-[#878787] w-full pl-2 pb-1 pt-0.5 border border-[#B0B0B0] rounded-[6px] my-1"
          />
          <ErrorMessage name={nameValue} className="text-[10px] text-red-500" component="div" />
        </div>
  )
}

export default InputField