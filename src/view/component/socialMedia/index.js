import React from 'react';
import './socialMedia.scss'
import IconButton from '@mui/material/IconButton';

const socialMediaInfo = [
    { Icon: <i className="ri-facebook-fill"></i>, name: 'facebook', title: 'Santrawebsolution Official Page', href: "https://www.facebook.com/santrawebsolution", },
    { Icon: <i className="ri-whatsapp-fill"></i>, name: 'whatsapp', title: 'Subhasis Santra WhatsApp', href: "https://wa.me/+918001473178/?text=I'm%20interested%20in%20your%20service", },
    { Icon: <i className="ri-skype-fill"></i>, name: 'skype', title: 'Subhasis Santra on skype', href: "https://join.skype.com/invite/KaxdquyQAdBw", },
    { Icon: <i className="ri-mail-send-fill"></i>, name: 'mail', title: 'santrasubhasis15@gmail.com', href: "mailto:santrasubhasis15@gmail.com", },
    { Icon: <i className="ri-linkedin-fill"></i>, name: 'linkedin', title: 'Subhasis Santra on linkedin', href: "https://www.linkedin.com/in/subhasis-santra-501a221b4/", },
    { Icon: <i className="ri-phone-fill"></i>, name: 'phone', title: 'Call now', href: "tel:+91-8001473178", },
]

export default function SocialMedia() {
    return (
        <div className="social_media">
            {socialMediaInfo.map((socialMediaInfo) => (
                <IconButton className={socialMediaInfo.name} aria-label={socialMediaInfo.name} href={socialMediaInfo.href} title={socialMediaInfo.title} target="_blanck">
                    {socialMediaInfo.Icon}
                </IconButton>
            ))}
        </div>
    );
}