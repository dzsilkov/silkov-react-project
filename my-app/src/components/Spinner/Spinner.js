import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index.es';
import { faSpinner } from '@fortawesome/free-solid-svg-icons/index';
import './Spinner.css';


const Spinner = ({active}) => {


  return (
    active ?
    <div className="shadow-overlay">
      <div className="spinner">
        <FontAwesomeIcon size="6x" icon={faSpinner} pulse/>
      </div>
    </div>
    : null
  );
};

export default Spinner;
