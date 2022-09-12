import React, { useEffect, useState, useContext } from "react";
import { LoadingContext } from "react-router-loading";
import Grid from '@mui/material/Grid';

import loadData from "../../../Config/LoadingBar"
import ProfilePics from "../../../asset/Images/Profile.png";
import ProfileInfo from "../../component/profileInfo";

import './education.scss'
export default function Education() {
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
    <div className="content_body bg_banner">
      <Grid container spacing={{ xs: 3, md: 5 }}>
        <Grid item xs={12} sm={12} md={12} lg={7} className="responsive_width_100">
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
                <h2 className="work_profile_text">Education</h2>
                <div className="education_track">
                  <div className="d_flex gap_20 track_item">
                    <h3 className="track_years">2012</h3>
                    <div className="track_status">
                      <span className="dot"></span>
                      <span className="line"></span>
                    </div>
                    <div className="track_info">
                      <h3>Bachelor Arts <span>(B.A General)</span></h3>
                      <p>The University Of Burdwan (B.U)</p>
                    </div>
                  </div>
                  <div className="d_flex gap_20 track_item">
                    <h3 className="track_years">2009</h3>
                    <div className="track_status">
                      <span className="dot"></span>
                      <span className="line"></span>
                    </div>
                    <div className="track_info">
                      <h3>Higher Secondary Education <span>(H.S)</span></h3>
                      <p>West Bengal Council of Higher Secondary Education (W.B.C.H.S.E) West Bengal, Hooghly</p>
                    </div>
                  </div>
                  <div className="d_flex gap_20 track_item">
                    <h3 className="track_years">2007</h3>
                    <div className="track_status">
                      <span className="dot"></span>
                      <span className="line"></span>
                    </div>
                    <div className="track_info">
                      <h3>Secondary Education <span>(Madhyamik)</span></h3>
                      <p>West Bengal Board of Secondary Education (W.B.B.S.E) West Bengal, Hooghly</p>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>


        <Grid item xs={12} sm={12} md={12} lg={5} className="responsive_width_100">
          <div className="work_profile_body">
            <h2 className="work_profile_text">Professional Qualifications</h2>
            <div className="education_track">
              <div className="d_flex gap_20 track_item">
                <div>
                  <h3 className="track_years">2011</h3>
                  <h4>2012</h4>
                </div>
                <div className="track_status">
                  <span className="dot"></span>
                  <span className="line"></span>
                </div>
                <div className="track_info">
                  <h3>Production & Manufacturing</h3>
                  <p>Basic Training Centre (Chemical) Hooghly (Government Of West Bengal)
                    West Bengal, Hooghly</p>
                </div>
              </div>
              <div className="d_flex gap_20 track_item">
                <h3 className="track_years">2013</h3>
                <div className="track_status">
                  <span className="dot"></span>
                  <span className="line"></span>
                </div>
                <div className="track_info">
                  <h3>Hospitality</h3>
                  <p>Bosco Academy for Skills and Employment
                    West Bengal, Hooghly</p>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid >
    </div>
  );
}

