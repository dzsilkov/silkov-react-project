import React from 'react';
import './FormFieldLabel.css';

const FormFieldLabel = ({title, name, styles}) => {

  return (
    <label className={styles}
           htmlFor={name}>
      <span>{title}</span>
    </label>
  );
};

export default FormFieldLabel;
