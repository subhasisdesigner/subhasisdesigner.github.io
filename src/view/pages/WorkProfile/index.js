import React, { useEffect, useState, useContext } from "react";
import { LoadingContext } from "react-router-loading";
import Grid from '@mui/material/Grid';

import loadData from "../../../Config/LoadingBar"
import "./workProfile.scss"

import ProjectProfile from "../../component/projectProfile";


export default function WorkProfile() {
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
        <Grid item xs={12} sm={12} md={12} lg={4} className="responsive_width_100">
          <div className="work_profile_body">
            <h2 className="work_profile_text">Work Profile</h2>
            <div className="work_details_body">
              <ProjectProfile />
            </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={8} className="responsive_width_100">
          <div className="details_view_body">
            <div className="project_details_header">
              <div className="project_header_info">
                <h2>Subhasis Web Designer</h2>
              </div>
              <div></div>
            </div>
          </div>
        </Grid>
      </Grid >
    </div>
  );
}

