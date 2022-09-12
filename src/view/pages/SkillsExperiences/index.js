import React, { useEffect, useState, useContext } from "react";
import { LoadingContext } from "react-router-loading";
import Grid from '@mui/material/Grid';

import loadData from "../../../Config/LoadingBar"
import ProfileInfo from "../../component/profileInfo";
import ProfilePics from "../../../asset/Images/Profile.png";
import Experiences from "../../component/skillsExperiences/experiences";
import SkillsList from "../../component/skillsExperiences";

import './skillsExperiences.scss'


export default function SkillsExperiences() {
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
            <Grid item xs={12} sm={12} md={12} lg={5}>
              <div className="profile_pic">
                <img src={ProfilePics} />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={7}>
              <ProfileInfo />
            </Grid>

          </Grid>
          <Grid container spacing={{ xs: 3, md: 5, md: 10 }}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <div className="work_profile_body">
                <h2 className="work_profile_text">Experiences</h2>
                <Experiences />
              </div>
            </Grid>
          </Grid>
        </Grid>


        <Grid item xs={12} sm={12} md={12} lg={4} className="responsive_width_100">
          <div className="work_profile_body">
            <h2 className="work_profile_text">Skills</h2>
            <SkillsList />
          </div>
        </Grid>
      </Grid >
    </div>
  );
}

