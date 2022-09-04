import React from "react";

import LinearProgress from '@mui/material/LinearProgress';
import AdobeXdPic from '../../../asset/Images/skills/xd.png';
import UIUXdesignerPic from '../../../asset/Images/skills/ux-ui.png';
import HtmlPic from '../../../asset/Images/skills/html.png';
import CssPic from '../../../asset/Images/skills/css.png';
import PhotoshopPic from '../../../asset/Images/skills/photoshop.png';
import MaterialUI from '../../../asset/Images/skills/material-ui.png';
import ReactPic from '../../../asset/Images/skills/react.png';
import SassPic from '../../../asset/Images/skills/sass.png';
import BootstrapPic from '../../../asset/Images/skills/bootstrap.png';
import WordpressPic from '../../../asset/Images/skills/wordpress.png';
import GitPic from '../../../asset/Images/skills/git.png';
import MobileApplicationPic from '../../../asset/Images/skills/mobile_application_design.png';
import ResponsivePic from '../../../asset/Images/skills/responsive.png';

import './skillsList.scss';

const skillsInfo = [
    { img: AdobeXdPic, skillsNames: 'AdobeXd', progressValue: 90 },
    { img: UIUXdesignerPic, skillsNames: 'UX & UI Designer', progressValue: 90 },
    { img: HtmlPic, skillsNames: 'HTML 5', progressValue: 90 },
    { img: CssPic, skillsNames: 'CSS 3', progressValue: 80 },
    { img: PhotoshopPic, skillsNames: 'Photoshop', progressValue: 70 },
    { img: MaterialUI, skillsNames: 'Material UI', progressValue: 80 },
    { img: ReactPic, skillsNames: 'React', progressValue: 75 },
    { img: SassPic, skillsNames: 'Sass', progressValue: 80 },
    { img: BootstrapPic, skillsNames: 'Bootstrap', progressValue: 90 },
    { img: WordpressPic, skillsNames: 'Wordpress', progressValue: 85 },
    { img: GitPic, skillsNames: 'Git', progressValue: 65 },
    { img: MobileApplicationPic, skillsNames: 'Mobile Application Design', progressValue: 85 },
    { img: ResponsivePic, skillsNames: 'Responsive Web Design', progressValue: 95 },

];

export default function SkillsList() {
    return (
        <div className="skills_experiences_body">
            {skillsInfo.map((skillsInfo) => (
                <div className="skills_experiences_item d_flex align_items gap_20">
                    <img src={skillsInfo.img} />
                    <div className="skills_experiences_info flex_grow1">
                        <h3>{skillsInfo.skillsNames}</h3>
                        <ProgressBar setValue={skillsInfo.progressValue} />
                    </div>
                </div>
            ))}
        </div>
    );
}
function LinearProgressWithLabel(props) {
    return (
        <div className="progress_body d_flex align_items flex_grow1">
            <div className="progress_bar_body flex_grow1 w_100">
                <LinearProgress className="progress_bar" variant="determinate" {...props} />
                <span className="count">
                    {`${Math.round(props.value,)}%`}
                </span>
            </div>
        </div>
    );
}

function ProgressBar(props) {
    const [progress, setProgress] = React.useState(10);
    const setValue = props.setValue;
    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
                return Math.min(oldProgress + 10, setValue);
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <LinearProgressWithLabel value={progress} />
    );
}



