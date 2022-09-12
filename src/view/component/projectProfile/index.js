import React from "react";
import myProjectPic from "../../../asset/Images/myProject.png";
import ndhgoPic from "../../../asset/Images/NDHGO-Logo.png";

import ZerokalvinPic from "../../../asset/Images/techwelfare-project/banner/zerokalvin.png";
import TheluxhomePic from "../../../asset/Images/techwelfare-project/banner/theluxhome.png";
import MindcropPic from "../../../asset/Images/techwelfare-project/banner/mindcrop.png";
import OnlineaghoriPic from "../../../asset/Images/techwelfare-project/banner/onlineaghori.png";
import FreelancersonPic from "../../../asset/Images/techwelfare-project/banner/freelancerson.png";
import ForexPic from "../../../asset/Images/techwelfare-project/banner/forex.png";
import SperoPic from "../../../asset/Images/techwelfare-project/banner/spero.png";
import MyblindPic from "../../../asset/Images/techwelfare-project/banner/myblind.png";
import MatrimonyPic from "../../../asset/Images/techwelfare-project/banner/matrimony.png";
import JobPortalPic from "../../../asset/Images/techwelfare-project/banner/jobPortal.png";
import InteriorDecorPic from "../../../asset/Images/techwelfare-project/banner/interiorDecor.png";
import eventUpPic from "../../../asset/Images/techwelfare-project/banner/eventUp.png";
import dotnetPic from "../../../asset/Images/techwelfare-project/banner/dotnet.png";
import currencyPic from "../../../asset/Images/techwelfare-project/banner/currency.png";
import bhoktibhikshuPic from "../../../asset/Images/techwelfare-project/banner/bhoktibhikshu.png";
import AstrologyPic from "../../../asset/Images/techwelfare-project/banner/Astrology.png";
import myProfilePic from "../../../asset/Images/techwelfare-project/banner/myProfile.png";
import nulaviPic from "../../../asset/Images/techwelfare-project/banner/nulavi.png";
import pointjarPic from "../../../asset/Images/techwelfare-project/banner/pointjar.png";
import speroPic from "../../../asset/Images/techwelfare-project/banner/spero.png";
import svastamPic from "../../../asset/Images/techwelfare-project/banner/svastam.png";
import tourtravelPic from "../../../asset/Images/techwelfare-project/banner/tourtravel.png";

import CardActionArea from '@mui/material/CardActionArea';
import "./projectProfile.scss"

const WorkProfile = [
    {
        companyName: "01. My project", projectImg: myProjectPic, projectName: "Subhasis Web Designer", useLibrary: "React, HTML,SASS,SCSS, Adobe XD"
    },
    {
        companyName: "02. Senrysa Technologies (P) Ltd", projectImg: ndhgoPic, projectName: "NDHGO Seller Panel", useLibrary: "React, HTML,CSS, Adobe XD"
    }
]
const techwelfareProjrct = [
    {
        projectImg: ZerokalvinPic, projectName: "Zerokelvin Education", useLibrary: "Adobe Photoshop,HTML,css,Java Scrept, Codeigniter Framework"
    },
    {
        projectImg: TheluxhomePic, projectName: "TheLuxHome", useLibrary: "Adobe Photoshop,HTML,css,Java Scrept, Codeigniter Framework"
    },
    {
        projectImg: MindcropPic, projectName: "Mindcrop", useLibrary: "Adobe Photoshop,HTML,css,Java Scrept, Codeigniter Framework"
    },
    {
        projectImg: OnlineaghoriPic, projectName: "Onlineaghori", useLibrary: "Adobe Photoshop,HTML,css,Java Scrept, WordPress Customization"
    },
    {
        projectImg: FreelancersonPic, projectName: "Freelancerson", useLibrary: "Adobe Photoshop,HTML,css,Java Scrept,Codeigniter Framework"
    },
    {
        projectImg: ForexPic, projectName: "Forex", useLibrary: "Adobe Photoshop,HTML,css,Java Scrept, WordPress Customization"
    },
    {
        projectImg: SperoPic, projectName: "Spero", useLibrary: "Adobe Photoshop,HTML,css,Java Scrept, WordPress Customization"
    },
    {
        projectImg: MyblindPic, projectName: "Myblind", useLibrary: "Adobe Photoshop,HTML,css,Java Scrept, WordPress Customization"
    },
    {
        projectImg: MatrimonyPic, projectName: "Matrimony", useLibrary: "Adobe Photoshop,HTML,css,Java Scrept, Bootstrap"
    },
    {
        projectImg: JobPortalPic, projectName: "jobPortal", useLibrary: "Adobe Photoshop,HTML,css,Java Scrept, Bootstrap"
    },
    {
        projectImg: InteriorDecorPic, projectName: "Interior Decor", useLibrary: "Adobe Photoshop,HTML,css,Java Scrept, Bootstrap"
    },
    {
        projectImg: eventUpPic, projectName: "Event Up", useLibrary: "Adobe Photoshop,HTML,css,Java Scrept, Bootstrap"
    },
    {
        projectImg: dotnetPic, projectName: "dotNet", useLibrary: "Adobe Photoshop,HTML,css,Java Scrept, Bootstrap"
    },
    {
        projectImg: currencyPic, projectName: "Currency", useLibrary: "Adobe Photoshop,HTML,css,Java Scrept, Bootstrap"
    },
    {
        projectImg: bhoktibhikshuPic, projectName: "Bhoktibhikshu", useLibrary: "Adobe Photoshop,HTML,css,Java Scrept, Bootstrap"
    },
    {
        projectImg: AstrologyPic, projectName: "Astrology", useLibrary: "Adobe Photoshop,HTML,css,Java Scrept, Bootstrap"
    },
    {
        projectImg: myProfilePic, projectName: "My Profile", useLibrary: "Adobe Photoshop,HTML,css,Java Scrept, Bootstrap"
    },
    {
        projectImg: nulaviPic, projectName: "Nulavi", useLibrary: "Adobe Photoshop,HTML,css,Java Scrept, Bootstrap"
    },
    {
        projectImg: pointjarPic, projectName: "Pointjar", useLibrary: "Adobe Photoshop,HTML,css,Java Scrept, Bootstrap"
    },
    {
        projectImg: speroPic, projectName: "Spero", useLibrary: "Adobe Photoshop,HTML,css,Java Scrept, Bootstrap"
    },
    {
        projectImg: svastamPic, projectName: "Svastam", useLibrary: "Adobe Photoshop,HTML,css,Java Scrept, Bootstrap"
    },
    {
        projectImg: tourtravelPic, projectName: "Tourtravel", useLibrary: "Adobe Photoshop,HTML,css,Java Scrept, Bootstrap"
    },
]
export default function ProjectProfile(props) {
    const setClass = props.setHide;
    return (
        <>
            {
                WorkProfile.map((WorkProfile) => (
                    <div className="project_profile_body">
                        <div className="work_profile">
                            <h4>{WorkProfile.companyName}</h4>
                            <CardActionArea className="project_body">
                                <div className="project_pic">
                                    <img src={WorkProfile.projectImg} />
                                </div>
                                <div className="project_info">
                                    <h3>{WorkProfile.projectName}</h3>
                                    <p>{WorkProfile.useLibrary}</p>
                                    <div className="view_link">
                                        <span><i class="ri-links-line"></i>Link</span>
                                        <span>View details<i class="ri-arrow-right-line"></i></span>
                                    </div>
                                </div>
                            </CardActionArea>
                        </div>
                    </div>
                ))
            }
            {setClass ? null :
                <div className="techwelfare_project_body">
                    <TechwelfareProjrct />
                </div>
            }
        </>
    );
}

function TechwelfareProjrct() {
    return (
        <>
            <div className="work_profile">
                <h4>03. Techwelfare</h4>
            </div>
            <div className="for_mobile">
                {
                    techwelfareProjrct.map((techwelfareProjrct) => (
                        <div className="work_profile">
                            <CardActionArea className="project_body">
                                <div className="project_pic">
                                    <img src={techwelfareProjrct.projectImg} />
                                </div>
                                <div className="project_info">
                                    <h3>{techwelfareProjrct.projectName}</h3>
                                    <p>{techwelfareProjrct.useLibrary}</p>
                                    <div className="view_link">
                                        <span><i class="ri-links-line"></i>Link</span>
                                        <span>View details<i class="ri-arrow-right-line"></i></span>
                                    </div>
                                </div>
                            </CardActionArea>
                        </div>
                    ))
                }
            </div>
        </>
    );
}


