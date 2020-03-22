import React from 'react';
import { Link } from 'react-router5';
import { useRoute } from 'react-router5';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons/index';
import './Logo.css';

const Logo = (props) => {

  const {router} = useRoute();

  return (
    <div className="logo">
      <Link
        router={router}
        routeName={'books'}
      >
        <FontAwesomeIcon size="3x" icon={faBook}/>
      </Link>
    </div>
  );
};

export default Logo;