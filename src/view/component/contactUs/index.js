import React from "react";
import ViewMoreButton from "../materialUI/Button/viewMoreButton"

import './contact.scss';

const ContactInfo = [
    { icon: <i className="ri-map-pin-fill"></i>, className: "contact_address", addressTitle: "Address", link: "#", linkText: "Vill-Rukesh pur, P.O-Baneswar pur, P.S-Balagarh, Dist-Hooghly, Pin-712515", },
    { icon: <i className="ri-phone-fill"></i>, className: "contact_number", addressTitle: "Contact number", link: "tel:+91-8001473178", linkText: "+91-8001473178", },
    { icon: <i className="ri-whatsapp-fill"></i>, className: "contact_whatsapp", addressTitle: "WhatsApp", link: "https://wa.me/+918001473178/?text=I%27m%20interested%20in%20your%20service", linkText: "+91-8001473178", },
    { icon: <i className="ri-mail-send-fill"></i>, className: "contact_email", addressTitle: "E-mail", link: "mailto:santrasubhasis15@gmail.com", linkText: "santrasubhasis15@gmail.com", },
    { icon: <i className="ri-skype-fill"></i>, className: "contact_skype", addressTitle: "Skype", link: "https://join.skype.com/invite/KaxdquyQAdBw", linkText: "Subhasis Santra", },
    { icon: <i className="ri-linkedin-box-fill"></i>, className: "contact_linkedin", addressTitle: "Linkedin", link: "https://www.linkedin.com/in/subhasis-santra-501a221b4/", linkText: "Subhasis Santra", },
]

export default function ContactUs(props) {
    const setInfo = ContactInfo.slice(0, props.setCount)
    return (
        <div className="contact_body">
            {setInfo.map((ContactInfo) => (
                <div className={`contact_info_body d_flex align_items gap_20 ${ContactInfo.className}`}>
                    <div className="contact_icon">
                        {ContactInfo.icon}
                    </div>
                    <div className="contact_info flex_grow1">
                        <h4>{ContactInfo.addressTitle}:</h4>
                        <p>{ContactInfo.linkText}</p>
                    </div>
                </div>
            ))
            }
            <ViewMoreButton />
        </div >
    );
}


