import React from 'react';
import './ProfileInfo.scss';
import SocialMedia from '../socialMedia';

const profile = [
    { workTitle: "UX & UI Designer", profileName: "Subhasis Santra", currentCompanyName: "Senrysa Technologies (P) Ltd.", link: "http://www.senrysa.com", years: 3 }
]

export default function ProfileInfo() {
    return (
        <div className="sub_content_body">
            {profile.map((profile) => (
                <div className="content_profile">
                    <p>{profile.workTitle}</p>
                    <h1>{profile.profileName}</h1>
                    <h4>With in <strong>3 years</strong> experience as a Web Designer Present at <br></br><strong><a href={profile.link} title={profile.currentCompanyName} target="_blanck">{profile.currentCompanyName}</a></strong></h4>
                </div>
            ))}

            <div className='profile_social_media'>
                <h4>Social Media :</h4>
                <SocialMedia />
            </div>
        </div>
    );
}