import React from 'react';
import './FormFieldLabel.css';

const FormFieldLabel = ({title, name}) => {

  return (
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
           htmlFor={name}>
      <span>{title}</span>
    </label>
  );
};

export default FormFieldLabel;
