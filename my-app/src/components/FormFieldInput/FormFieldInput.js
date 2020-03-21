import React from 'react';
import FormFieldLabel from '../FormFieldLabel/FormFieldLabel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import './FormFieldInput.css';

const FormFieldInput = (props) => {

  const {
    id,
    title,
    type,
    name,
    value,
    autoComplete,
    placeholder,
    icon,
    required = false,
    handleAction,
    onChange,
    onBlur,
    errors
  } = props;

  const img = !icon
    ? <span
      className="icon"
      onClick={handleAction}
    >
      <FontAwesomeIcon color={'#4A5568'} icon={faEyeSlash}/>

          </span>
    : null;


  return (
    <div className="formFieldInput">
      <FormFieldLabel
        name={name}
        title={title}
      />
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        placeholder={placeholder}
        id={name}
        type={type}
        name={name}
        value={value}
        required={required}
        autoComplete={autoComplete}
        onChange={onChange}
        onBlur={onBlur}
      />
      {img}
      <p className="text-red-600 text-xs italic">{errors}</p>
    </div>
  );
};

export default FormFieldInput;