import React from 'react';
import ProfilePics from "../../../asset/Images/Profile.png";

export default function ProfilePic() {
    return (
        <div className="profile_pic">
            <img src={ProfilePics} />
        </div>
    );
}