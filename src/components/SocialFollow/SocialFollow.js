import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SocialFollow.css'

import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
   
  } from "@fortawesome/free-brands-svg-icons";

import {faGlobeAsia} from "@fortawesome/free-solid-svg-icons"

const SocialFollow = (props) => {
    const { strWebsite, strFacebook, strTwitter, strInstagram, strYoutube} = props.teamDetails[0] || {};
    return (
        <footer className='d-flex justify-content-center footer-container mt-5'>
            <a target="blank" href={"//"+strWebsite}><FontAwesomeIcon icon={faGlobeAsia} size="2x" /></a>
            <a target="blank" href={"//"+strFacebook}><FontAwesomeIcon icon={faFacebook} size="2x" style={{color:"#3B5998", marginLeft:'20px'}} /></a>
            <a target="blank" href={"//"+strTwitter}><FontAwesomeIcon icon={faTwitter} size="2x" style={{color:"#1DA1F2", marginLeft:'20px'}} /></a>
            <a target="blank" href={"//"+strInstagram}><FontAwesomeIcon icon={faInstagram} size="2x" style={{color:"#bc2a8d" , marginLeft:'20px'}} /></a>
            <a target="blank" href={"//"+strYoutube}><FontAwesomeIcon icon={faYoutube} size="2x" style={{color:"red", marginLeft:'20px'}} /></a>
            

        </footer>
    );
};

export default SocialFollow;