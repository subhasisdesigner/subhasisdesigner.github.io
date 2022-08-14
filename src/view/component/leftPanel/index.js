import React from "react";
import { NavLink } from "react-router-dom";
import "../leftPanel/leftPanel.scss"
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

import MyPic from "../../../asset/Images/subhasis_santra.jpg"

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
          <div className="social_media">
            <IconButton className="facebook" aria-label="facebook" href="https://www.facebook.com/santrawebsolution" title="Santrawebsolution Official Page" target="_blanck">
              <i className="ri-facebook-fill"></i>
            </IconButton>
            <IconButton className="whatsapp" aria-label="whatsapp" href="https://wa.me/+918001473178/?text=I'm%20interested%20in%20your%20service" title="Subhasis Santra WhatsApp" target="_blanck">
              <i className="ri-whatsapp-fill"></i>
            </IconButton>
            <IconButton className="skype" aria-label="skype" href="https://join.skype.com/invite/KaxdquyQAdBw" title="Subhasis Santra on skype" target="_blanck">
              <i className="ri-skype-fill"></i>
            </IconButton>
            <IconButton className="mail" aria-label="mail" href="mailto:santrasubhasis15@gmail.com" title="santrasubhasis15@gmail.com" target="_blanck">
              <i className="ri-mail-send-fill"></i>
            </IconButton>
            <IconButton className="linkedin" aria-label="linkedin" href="https://www.linkedin.com/in/subhasis-santra-501a221b4/" title="Subhasis Santra on linkedin" target="_blanck">
              <i className="ri-linkedin-fill"></i>
            </IconButton>
            <IconButton className="phone" aria-label="phone" href="tel:+91-8001473178" title="Call now" target="_blanck">
              <i className="ri-phone-fill"></i>
            </IconButton>
          </div>
        </div>
        <div className="menu">
          <div className="profile">
            <p>UX & UI Designer</p>
            <h1>Subhasis Santra</h1>
          </div>
          <div className="menu_item">
            <NavLink exact className="introduction" activeClassName="active_menu" to="/update"><i className="ri-mic-fill"></i>Introduction <i class="ri-arrow-right-line active_arrow"></i></NavLink>
            <NavLink exact className="skills" activeClassName="active_menu" to="/update/skills-knowledge"><i className="ri-user-settings-fill"></i>Skills & Knowledge<i class="ri-arrow-right-line active_arrow"></i></NavLink>
            <NavLink exact className="work" activeClassName="active_menu" to="/update/work-profile"><i className="fas fa-tools"></i>Work Profile<i class="ri-arrow-right-line active_arrow"></i></NavLink>
            <NavLink exact className="education" activeClassName="active_menu" to="/update/education"><i className="fas fa-book-reader"></i>Education<i class="ri-arrow-right-line active_arrow"></i></NavLink>
            <NavLink exact className="professional" activeClassName="active_menu" to="/update/qualifications"><i className="fas fa-user-graduate"></i>Qualifications<i class="ri-arrow-right-line active_arrow"></i></NavLink>
            <NavLink exact className="contact" activeClassName="active_menu" to="/update/contact"><i className="fas fa-id-card-alt"></i>Contact<i class="ri-arrow-right-line active_arrow"></i></NavLink>
          </div>
          <div className="copy_right">
            <i className="ri-quill-pen-fill"></i><span>Design by <strong>Subhasis Santra</strong></span>
          </div>
        </div>
      </div>
    </>
  );
}
