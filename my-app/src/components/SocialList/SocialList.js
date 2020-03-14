import React from 'react';
import SocialListItem from '../SocialListItem/SocialListItem';
import './SocialList.css'

const SocialList = ({socialItems}) => {

  const socialList = socialItems.map(item => {
    return (
      <SocialListItem
        key={item.name}
        item={item}/>
    )
  });

  return (
    <ul className="socialList">
      {socialList}
    </ul>
  );
};


export default SocialList;
