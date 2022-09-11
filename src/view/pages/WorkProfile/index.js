import React, { useEffect, useState, useContext } from "react";
import { LoadingContext } from "react-router-loading";
import Grid from '@mui/material/Grid';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import loadData from "../../../Config/LoadingBar"
import "./workProfile.scss"

import ProjectProfile from "../../component/projectProfile";

import profilePic from "../../../asset/Images/subhasis_santra.jpg"
import myProjectPic from "../../../asset/Images/myProject.png";

import xd from "../../../asset/Images/skills/xd.png";


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
                <BreadcrumbsInfo />
                <h2>Subhasis Web Designer</h2>
                <div className="d_flex_gap">
                  <a href="#" className="d_flex_gap"><i class="ri-links-line"></i>subhasisdesigner.github.io</a>
                  <div className="designby d_flex_gap">
                    <div className="designer_pic">
                      <img src={profilePic} />
                    </div>
                    <div className="designer_info">
                      <p>Design by</p>
                      <h5>Subhasis Santra</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="design_date">
                <div className="designer_info">
                  <p>Work Date</p>
                  <h3>21 May, 2022</h3>
                </div>
              </div>
            </div>
            <div className="project_pic_body">
              <img src={myProjectPic} />
            </div>
            <div className="design_info_body">
              <div className="description">
                <div>
                  <h3>Description :</h3>
                  <p>This is my portfolio work, open source, React material ui based theme perfect for quickly creating dashboards and web applications. It's modern design style with subtle shadows and a card-based layout could be described as flat material, and is inspired by</p>
                </div>
                {/* <div className="mt_40">
                  <h3>Features :</h3>
                  <div className="features_info">
                    <ListItem alignItems="flex-start">
                      <i class="ri-checkbox-circle-fill"></i>
                      <h5>— I'll be in your neighborhood doing errands this…</h5>
                    </ListItem>
                    <ListItem alignItems="flex-start">
                      <i class="ri-checkbox-circle-fill"></i>
                      <h5>— I'll be in your neighborhood doing errands this…</h5>
                    </ListItem>
                    <ListItem alignItems="flex-start">
                      <i class="ri-checkbox-circle-fill"></i>
                      <h5>— I'll be in your neighborhood doing errands this…</h5>
                    </ListItem>
                    <ListItem alignItems="flex-start">
                      <i class="ri-checkbox-circle-fill"></i>
                      <h5>— I'll be in your neighborhood doing errands this…</h5>
                    </ListItem>
                  </div>
                </div> */}
              </div>
              <div className="use_body">
                <h3>Use On :</h3>
                <ListItem alignItems="center">
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={xd} />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Adobe XD (for Layout)"
                  />
                </ListItem>
                {/* <ListItem alignItems="center">
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Brunch this weekend?"
                  />
                </ListItem>
                <ListItem alignItems="center">
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Brunch this weekend?"
                  />
                </ListItem> */}
              </div>
            </div>
          </div>
        </Grid>
      </Grid >
    </div>
  );
}


function BreadcrumbsInfo() {
  const breadcrumbs = [
    <Typography key="1" color="inherit">
      Work Profile
    </Typography>,
    <Typography key="3" color="primary">
      01. My project
    </Typography>,
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}


