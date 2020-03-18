import React from 'react';
import './Footer.css';
import SocialList from '../SocialList/SocialList';
import { faInstagram, faTwitter, faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Footer = (props) => {

  const socialItems = [
    {
      name: 'facebook',
      link: 'https://www.facebook.com/',
      icon: faFacebookF,
      color: '#157DC3'
    },
    {
      name: 'twitter',
      link: 'https://twitter.com/',
      icon: faTwitter,
      color: '#64A8F2'

    },
    {
      name: 'instagram',
      link: 'https://www.instagram.com/',
      icon: faInstagram,
      color: '#A03698'
    },
    {
      name: 'YouTube',
      link: 'https://www.youtube.com/',
      icon: faYoutube,
      color: '#ff6347'
    },
  ];


  return (
    <footer>
      <div className="footerLayout">
        <SocialList socialItems={socialItems}/>
      </div>
    </footer>
  );
};

export default Footer;
