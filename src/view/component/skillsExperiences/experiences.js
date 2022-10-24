import React from "react";
import SenrysaLogo from '../../../asset/Images/senrysa_logo.webp';
import TechwealLogo from '../../../asset/Images/techwelfare_logo.webp';
import "./experiences.scss"

const company_info = [
    { logo: SenrysaLogo, company: "Senrysa Technologies (P) Ltd", rol: 'Web Designer', Address: "Godrej Waterside, 6th Floor, Tower 1, Sector V, Bidhannagar, Kolkata, West Bengal 700091", addresslink: "https://www.google.com/maps/dir//senrysa+technologies/@22.5735517,88.3671866,12z/data=!3m1!4b1!4m9!4m8!1m1!4e2!1m5!1m1!1s0x3a0275af0d28b75f:0x94b02bcf69ccc4b1!2m2!1d88.437227!2d22.5735669", webLink: "http://www.senrysa.com", statys: "Prestnt", years: "Oct 2020 - 1 yr 11 mos" },

    { logo: TechwealLogo, company: "Techwelfare", rol: 'Web Designer', Address: "4/4, Jogendra Basak Rd, Nainan Para, Baranagar, Kolkata, West Bengal 700036", addresslink: "https://www.google.com/maps/dir//techwelfare/@22.6362374,88.3043168,12z/data=!3m1!4b1!4m9!4m8!1m1!4e2!1m5!1m1!1s0x3a0277b7e98a33c3:0xa319394fb5015e7b!2m2!1d88.3743594!2d22.636264", webLink: "https://www.techwelfare.com", statys: "1 year 11 months", years: "Dec 2018 - Oct 2020" }

]

const languages_info = [
    { languages: "Bengali", statys: "Full professional proficiency.", },
    { languages: "Hindi", statys: "Limited working proficiency.", },
    { languages: "English", statys: "Limited working proficiency.", }
]

export default function Experiences() {
    return (
        <>
            <div className="experiences_body">
                {company_info.map((company_info) => (
                    <div className="experiences_item prestnt d_flex align_items gap_20">
                        <div className="experiences_item_pic">
                            <img src={company_info.logo} alt={company_info.company} />
                        </div>
                        <div className="experiences_info d_flex flex_grow1">
                            <div className="flex_grow1">
                                <div className="company_info d_flex align_items gap_20">
                                    <h3>{company_info.company}</h3>
                                    <h5 className="web_designer d_flex align_items"><i className="ri-checkbox-blank-circle-fill"></i> {company_info.rol}</h5>
                                </div>
                                <div className="d_flex align_items gap_10 mt_10">
                                    <i className="ri-road-map-fill"></i>
                                    <p>Address: {company_info.Address} <a href={company_info.addresslink} target="_blank"><i className="ri-share-forward-box-fill"></i></a></p>
                                </div>
                                <div className="mt_10">
                                    <a href={company_info.webLink} target="_blank" className="d_flex align_items gap_10"><i className="ri-links-fill"></i>{company_info.webLink}</a>
                                </div>
                            </div>
                            <div className="experiences_years">
                                <h4>{company_info.statys}</h4>
                                <h5 className="web_designer">{company_info.years}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="languagrs_body">
                <h2 className="work_profile_text">Languages</h2>
                <div className="languagrs_item_body">
                    {languages_info.map((languages_info) => (
                        <div className="languagrs_item">
                            <h4 className="d_flex align_items gap_10"><i className="ri-checkbox-blank-circle-fill"></i> {languages_info.languages}</h4>
                            <p>{languages_info.statys}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

