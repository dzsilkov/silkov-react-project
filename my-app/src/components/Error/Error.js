import React from 'react';
import { connect } from 'react-redux';
import { getError } from '../../redux/selectors/selectors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index.es';
import { faInfo } from '@fortawesome/free-solid-svg-icons/index';
import './Error.css';
import { hideError } from '../../redux/actions/error';


const Error = ({error, hideError}) => {
  return (
    error ?
      <div className="shadowAlert"
           onClick={() => hideError()}
      >
        <div className="errorAlert">
          <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
               role="alert">
            <div className="flex">
              <div className="py-1">
                <FontAwesomeIcon size="2x" color="#38B2AC" icon={faInfo}/>
              </div>
              <div>
                <p className="font-bold">INFO: </p>
                <p className="text-red-600 text-xl">{error}</p>
                <p className="text-sm">click somewhere to close</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      : null
  );
};


const mapStateToProps = state => {
  const error = getError(state);
  return {error};

};

export default connect(
  mapStateToProps,
  {
    hideError
  }
)(Error);

