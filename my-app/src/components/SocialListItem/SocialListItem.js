import React from 'react';
import SocialLink from '../SocialLink/SocialLink';
import './SocialListItem.css'

const SocialListItem = ({item}) => {
  return (
    <li className="socialListItem">
      <SocialLink item={item}/>
    </li>
  );
};

export default SocialListItem;
