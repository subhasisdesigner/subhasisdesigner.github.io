import React from 'react';
import './SocialMedia.scss'
import IconButton from '@mui/material/IconButton';

export default function SocialMedia() {
    return (
        <div className="social_media">
            <IconButton className="facebook" aria-label="facebook" href="https://www.facebook.com/santrawebsolution" title="Santrawebsolution Official Page" target="_blanck">
                <i className="ri-facebook-fill"></i>
            </IconButton>
            <IconButton className="whatsapp" aria-label="whatsapp" href="https://wa.me/+918001473178/?text=I'm%20interested%20in%20your%20service" title="Subhasis Santra WhatsApp" target="_blanck">
                <i className="ri-whatsapp-fill"></i>
            </IconButton>
            <IconButton className="skype" aria-label="skype" href="https://join.skype.com/invite/KaxdquyQAdBw" title="Subhasis Santra on skype" target="_blanck">
                <i className="ri-skype-fill"></i>
            </IconButton>
            <IconButton className="mail" aria-label="mail" href="mailto:santrasubhasis15@gmail.com" title="santrasubhasis15@gmail.com" target="_blanck">
                <i className="ri-mail-send-fill"></i>
            </IconButton>
            <IconButton className="linkedin" aria-label="linkedin" href="https://www.linkedin.com/in/subhasis-santra-501a221b4/" title="Subhasis Santra on linkedin" target="_blanck">
                <i className="ri-linkedin-fill"></i>
            </IconButton>
            <IconButton className="phone" aria-label="phone" href="tel:+91-8001473178" title="Call now" target="_blanck">
                <i className="ri-phone-fill"></i>
            </IconButton>
        </div>
    );
}