import React from "react";
import { NavLink } from "react-router-dom";
import "../leftPanel/leftPanel.scss"
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

import MyPic from "../../../asset/Images/subhasis_santra.jpg";
import SocialMedia from "../socialMedia"

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: -2,
      left: -2,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '2px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.6)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

export default function LeftPanel(props) {
  return (
    <>

      <div className="left_panel d_flex">
        <div className="menu_sidebar">
          <div className="my_pic">
            <Stack direction="row" spacing={2}>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
              >
                <Avatar src={MyPic} alt="Subhasis santra" />
              </StyledBadge>
            </Stack>
          </div>
          <div className="left_panel_social_media">
            <SocialMedia />
          </div>
        </div>
        <div className="menu">
          <div className="profile">
            <p>UX & UI Designer</p>
            <h1>Subhasis Santra</h1>
          </div>
          <div className="menu_item">
            <NavLink exact className="introduction" activeClassName="active_menu" to="/update"><i className="ri-mic-fill"></i>Introduction <i className="ri-arrow-right-line active_arrow"></i></NavLink>
            <NavLink exact className="skills" activeClassName="active_menu" to="/update/skills-experiences"><i className="ri-user-settings-fill"></i>Skills & Experiences<i className="ri-arrow-right-line active_arrow"></i></NavLink>
            <NavLink exact className="work" activeClassName="active_menu" to="/update/work-profile"><i className="fas fa-tools"></i>Work Profile<i class="ri-arrow-right-line active_arrow"></i></NavLink>
            <NavLink exact className="education" activeClassName="active_menu" to="/update/education"><i className="fas fa-user-graduate"></i>Education<i className="ri-arrow-right-line active_arrow"></i></NavLink>
            {/* <NavLink exact className="professional" activeClassName="active_menu" to="/update/qualifications"><i className="fas fa-user-graduate"></i>Qualifications<i className="ri-arrow-right-line active_arrow"></i></NavLink> */}
            <NavLink exact className="contact" activeClassName="active_menu" to="/update/contact"><i className="ri-contacts-fill"></i>Contact<i className="ri-arrow-right-line active_arrow"></i></NavLink>
          </div>
          <div className="copy_right">
            <i className="ri-quill-pen-fill"></i><span>Design by <strong>Subhasis Santra</strong></span>
          </div>
        </div>
      </div>
    </>
  );
}
