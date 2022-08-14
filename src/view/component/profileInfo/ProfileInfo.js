import React from 'react';
import './ProfileInfo.scss';
import SocialMedia from './SocialMedia';

export default function ProfileInfo() {
    return (
        <div className="sub_content_body">
            <div className="content_profile">
                <p>UX & UI Designer</p>
                <h2>Subhasis Santra</h2>
                <h4>With in <strong>3 years</strong> experience as a Web Designer Present at <br></br><strong><a href="http://www.senrysa.com" title="Senrysa Technologies (P) Ltd" target="_blanck">Senrysa Technologies (P) Ltd.</a></strong></h4>
            </div>
            <div className='profile_social_media'>
                <h4>Social Media :</h4>
                <SocialMedia />
            </div>
        </div>
    );
}