import React, { useEffect, useState, useContext } from "react";
import { LoadingContext } from "react-router-loading";
import Grid from '@mui/material/Grid';
import "./Introduction.scss"
import loadData from "../../Config/LoadingBar"
import ProfilePic from "../component/profileInfo/ProfilePic";
import ProfileInfo from "../component/profileInfo";
import TechwelfareProjects from "../component/workProfile/techwelfare";
import Education from "../component/education";
import SkillsList from "../component/skillsExperiences";
import ContactUs from "../component/contactUs";
import MoreSkills from "../component/skillsExperiences/moreSkills";

import myProjectPic from "../../asset/Images/myProject.png"
import ndhgoPic from "../../asset/Images/NDHGO-Logo.png"
import { CardActionArea } from '@mui/material';

const WorkProfile = [
  {
    companyName: "01. My project", projectImg: myProjectPic, projectName: "Subhasiswebdesigner", useLibarry: "React, HTML,SASS,SCSS, Adobe XD"
  },
  {
    companyName: "02. Senrysa Technologies (P) Ltd", projectImg: ndhgoPic, projectName: "NDHGO Seller Panel", useLibarry: "React, HTML,CSS, Adobe XD"
  }
]


export default function LandingPage() {
  const [state, setState] = useState();
  const loadingContext = useContext(LoadingContext);
  const loading = async () => {
    //loading some data
    const data = await loadData();
    setState(data);

    //call method to indicate that loading is done
    loadingContext.done();
  };

  useEffect(() => {
    loading();
  }, []);
  return (
    <div className="content_body">
      <Grid container spacing={{ xs: 3, md: 5 }}>
        <Grid item xs={12} sm={12} md={12} lg={8} className="responsive_width_100">
          <Grid container className="align_items">
            <Grid item xs={12} sm={12} md={12} lg={4}>
              <ProfileInfo />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={8}>
              <ProfilePic />
            </Grid>
          </Grid>
          <Grid container spacing={{ xs: 3, md: 5, md: 10 }}>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <div className="work_profile_body">
                <h2 className="work_profile_text">Skills & Experiences</h2>
                <SkillsList setCount={4} />
                <MoreSkills />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <div className="work_profile_body">
                <h2 className="work_profile_text">Contact Us</h2>
                <ContactUs setCount={5} />
              </div>
            </Grid>
          </Grid>
        </Grid>


        <Grid item xs={12} sm={12} md={12} lg={4} className="responsive_width_100">
          <div className="work_profile_body">
            <h2 className="work_profile_text">Work Profile</h2>
            {WorkProfile.map((WorkProfile) => (
              <div className="work_profile">
                <h4>{WorkProfile.companyName}</h4>
                <CardActionArea className="project_body">
                  <div className="project_pic">
                    <img src={WorkProfile.projectImg} />
                  </div>
                  <div className="project_info">
                    <h3>{WorkProfile.projectName}</h3>
                    <p>{WorkProfile.useLibarry}</p>
                    <span>View details</span>
                  </div>
                </CardActionArea>
              </div>
            ))}
            <TechwelfareProjects />
          </div>
          <div className="work_profile_body mt_40">
            <h2 className="work_profile_text">Education</h2>
            <Education />
          </div>
        </Grid>
      </Grid >
    </div >
  );
}

