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
    errors,

    styles: {
      label, input, alert
    }

  } = props;

  const img = icon
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
        styles={label}
        name={name}
        title={title}
      />
      <input
        className={input}
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
      <p className={alert}>{errors}</p>
    </div>
  );
};

export default FormFieldInput;