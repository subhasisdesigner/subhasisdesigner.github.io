import React from "react";
import './techwelfare.scss';
import MatrimonyPic from "../../../../asset/Images/techwelfare-project/matrimony.png";
import JobportalPic from "../../../../asset/Images/techwelfare-project/jobportal.png";
import MindcorpPic from "../../../../asset/Images/techwelfare-project/mindcorp.png";
import ZerokelvinPic from "../../../../asset/Images/techwelfare-project/zerokelvin.png";
import CurrencyPic from "../../../../asset/Images/techwelfare-project/currency.png";
import TourTravelyPic from "../../../../asset/Images/techwelfare-project/tourTravel.png";
import CardActionArea from '@mui/material/CardActionArea';

const techwelfareProfile = [
    { projectImg: MatrimonyPic, projectName: "Matrimony" },
    { projectImg: JobportalPic, projectName: "Jobportal" },
    { projectImg: MindcorpPic, projectName: "Mindcorp" },
    { projectImg: ZerokelvinPic, projectName: "Zerokelvin" },
    { projectImg: CurrencyPic, projectName: "Currency" },
    { projectImg: TourTravelyPic, projectName: "TourTravely" }
]
export default function myProject() {
    return (
        <div className="work_profile">
            <h4>03. Techwelfare </h4>
            <div className="techwelfare_project">
                {techwelfareProfile.map((techwelfareProfile) => (
                    <div className="project_item">
                        <img src={techwelfareProfile.projectImg} title={techwelfareProfile.projectName} />
                    </div>
                ))}
                <div className="project_item">
                    <CardActionArea className="more_project">
                        <h3>16+</h3>
                        <p>More projects</p>
                    </CardActionArea>
                </div>
            </div>
        </div>
    );
}


