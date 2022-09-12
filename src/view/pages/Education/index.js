import React, { useEffect, useState, useContext } from "react";
import { LoadingContext } from "react-router-loading";
import Grid from '@mui/material/Grid';

import loadData from "../../../Config/LoadingBar"
import ProfilePics from "../../../asset/Images/Profile.png";
import ProfileInfo from "../../component/profileInfo";

import './education.scss';

const educationInfo = [
  { degree: "Bachelor Arts", shortName: "B.A General", university: "The University Of Burdwan (B.U)", year: "2012" },
  { degree: "Higher Secondary Education", shortName: "H.S", university: "West Bengal Council of Higher Secondary Education (W.B.C.H.S.E) West Bengal, Hooghly", year: "2009" },
  { degree: "Secondary Education", shortName: "Madhyamik", university: "West Bengal Board of Secondary Education (W.B.B.S.E) West Bengal, Hooghly", year: "2007" },
]

const professional = [
  { degree: "Production & Manufacturing", university: "Basic Training Centre (Chemical) Hooghly (Government Of West Bengal) West Bengal, Hooghly", year: "2007", year2: "2007" },
  { degree: "Hospitality", university: "Bosco Academy for Skills and Employment West Bengal, Hooghly", year: "2013", year2: "" },

]

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
                  {educationInfo.map((educationInfo) => (
                    <div className="d_flex gap_20 track_item">
                      <h3 className="track_years">{educationInfo.year}</h3>
                      <div className="track_status">
                        <span className="dot"></span>
                        <span className="line"></span>
                      </div>
                      <div className="track_info">
                        <h3>{educationInfo.degree} <span>({educationInfo.shortName})</span></h3>
                        <p>{educationInfo.university}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>


        <Grid item xs={12} sm={12} md={12} lg={5} className="responsive_width_100">
          <div className="work_profile_body">
            <h2 className="work_profile_text">Professional Qualifications</h2>
            <div className="education_track">
              {professional.map((professional) => (
                <div className="d_flex gap_20 track_item">
                  <div>
                    <h3 className="track_years">{professional.year}</h3>
                    <h4>{professional.year2}</h4>
                  </div>
                  <div className="track_status">
                    <span className="dot"></span>
                    <span className="line"></span>
                  </div>
                  <div className="track_info">
                    <h3>{professional.degree}</h3>
                    <p>{professional.university}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Grid>
      </Grid >
    </div>
  );
}

