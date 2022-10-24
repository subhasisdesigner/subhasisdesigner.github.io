import React from 'react';
import ProfilePics from "../../../asset/Images/Profile.webp";

export default function ProfilePic() {
    return (
        <div className="profile_pic">
            <img src={ProfilePics} alt="Subhasis Santra Profile Pic" />
        </div>
    );
}