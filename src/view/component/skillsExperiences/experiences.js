import React from "react";
import SenrysaLogo from '../../../asset/Images/senrysa_logo.png';
import TechwealLogo from '../../../asset/Images/techwelfare_logo.png';
import "./experiences.scss"


export default function Experiences() {
    return (
        <>
            <div className="experiences_body">
                <div className="experiences_item prestnt d_flex align_items gap_20">
                    <div className="experiences_item_pic">
                        <img src={SenrysaLogo} />
                    </div>
                    <div className="experiences_info d_flex flex_grow1">
                        <div className="flex_grow1">
                            <div className="company_info d_flex align_items gap_20">
                                <h3>Senrysa Technologies (P) Ltd</h3>
                                <h5 className="web_designer d_flex align_items"><i className="ri-checkbox-blank-circle-fill"></i> Web Designer</h5>
                            </div>
                            <div className="d_flex align_items gap_10 mt_10">
                                <i className="ri-road-map-fill"></i>
                                <p>Address: Godrej Waterside, 6th Floor, Tower 1, Sector V, Bidhannagar, Kolkata, West Bengal 700091 <a href="https://www.google.com/maps/dir//senrysa+technologies/@22.5735517,88.3671866,12z/data=!3m1!4b1!4m9!4m8!1m1!4e2!1m5!1m1!1s0x3a0275af0d28b75f:0x94b02bcf69ccc4b1!2m2!1d88.437227!2d22.5735669" target="_blank"><i className="ri-share-forward-box-fill"></i></a></p>
                            </div>
                            <div className="mt_10">
                                <a href="http://www.senrysa.com" target="_blank" className="d_flex align_items gap_10"><i className="ri-links-fill"></i>http://www.senrysa.com</a>
                            </div>
                        </div>
                        <div className="experiences_years">
                            <h4>Prestnt</h4>
                            <h5 className="web_designer">Oct 2020 - 1 yr 11 mos</h5>
                        </div>
                    </div>
                </div>
                <div className="experiences_item d_flex align_items gap_20">
                    <div className="experiences_item_pic">
                        <img src={TechwealLogo} />
                    </div>
                    <div className="experiences_info d_flex flex_grow1">
                        <div className="flex_grow1">
                            <div className="company_info d_flex align_items gap_20">
                                <h3>Techwelfare</h3>
                                <h5 className="web_designer d_flex align_items"><i className="ri-checkbox-blank-circle-fill"></i> Web Designer</h5>
                            </div>
                            <div className="d_flex align_items gap_10 mt_10">
                                <i className="ri-road-map-fill"></i>
                                <p>Address: 4/4, Jogendra Basak Rd, Nainan Para, Baranagar, Kolkata, West Bengal 700036 <a href="https://www.google.com/maps/dir//techwelfare/@22.6362374,88.3043168,12z/data=!3m1!4b1!4m9!4m8!1m1!4e2!1m5!1m1!1s0x3a0277b7e98a33c3:0xa319394fb5015e7b!2m2!1d88.3743594!2d22.636264" target="_blank"><i className="ri-share-forward-box-fill"></i></a></p>
                            </div>
                            <div className="mt_10">
                                <a href="https://www.techwelfare.com/" target="_blank" className="d_flex align_items gap_10"><i className="ri-links-fill"></i>https://www.techwelfare.com</a>
                            </div>
                        </div>
                        <div className="experiences_years">
                            <h4>1 year 11 months</h4>
                            <h5 className="web_designer">Dec 2018 - Oct 2020</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="languagrs_body">
                <h2 className="work_profile_text">Languagrs</h2>
                <div className="languagrs_item_body">
                    <div className="languagrs_item">
                        <h4 className="d_flex align_items gap_10"><i className="ri-checkbox-blank-circle-fill"></i> Bengali</h4>
                        <p>Full professional proficiency.</p>
                    </div>
                    <div className="languagrs_item">
                        <h4 className="d_flex align_items gap_10"><i className="ri-checkbox-blank-circle-fill"></i> Hindi</h4>
                        <p>Limited working proficiency.</p>
                    </div>
                    <div className="languagrs_item">
                        <h4 className="d_flex align_items gap_10"><i className="ri-checkbox-blank-circle-fill"></i> English</h4>
                        <p>Limited working proficiency.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

