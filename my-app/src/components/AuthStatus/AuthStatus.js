import React from 'react';
import './AuthStatus.css';
import { Link } from 'react-router5';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index.es';
import { faUserAlt, faUserNinja } from '@fortawesome/free-solid-svg-icons';
import { useRoute } from 'react-router5';

const AuthStatus = ({activeUser}) => {

  const {router} = useRoute();

const name = activeUser.firstName ? activeUser.firstName : 'Guest';
const icon = activeUser.firstName ? faUserAlt : faUserNinja;
const iconColor = activeUser.firstName ? '#1ad64d' : '#ffffff';

  return (
    <div className="authStatus">
      <FontAwesomeIcon color={iconColor} icon={icon}/>
      <Link className="authStatusLink"
        router={router}
        routeName={'auth'}
      >
        <span className="authStatusTitle">{name}</span>
      </Link>
    </div>
  );
};

export default AuthStatus;
