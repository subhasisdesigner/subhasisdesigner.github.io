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
import JsPic from '../../../asset/Images/skills/js.png';
import ResponsivePic from '../../../asset/Images/skills/responsive.png';

import './skillsList.scss';

const skillsInfo = [
    { img: AdobeXdPic, skillsNames: 'AdobeXd', progressValue: 90, Years: 2 },
    { img: UIUXdesignerPic, skillsNames: 'UX & UI Designer', progressValue: 90, Years: 2 },
    { img: HtmlPic, skillsNames: 'HTML 5', progressValue: 90, Years: 5 },
    { img: CssPic, skillsNames: 'CSS 3', progressValue: 80, Years: 5 },
    { img: PhotoshopPic, skillsNames: 'Photoshop', progressValue: 70, Years: 5 },
    { img: MaterialUI, skillsNames: 'Material UI', progressValue: 80, Years: 2 },
    { img: ReactPic, skillsNames: 'React', progressValue: 75, Years: 2 },
    { img: SassPic, skillsNames: 'Sass', progressValue: 80, Years: 1 },
    { img: BootstrapPic, skillsNames: 'Bootstrap', progressValue: 90, Years: 5 },
    { img: WordpressPic, skillsNames: 'Wordpress', progressValue: 85, Years: 2 },
    { img: JsPic, skillsNames: 'javascript', progressValue: 55, Years: 1 },
    { img: GitPic, skillsNames: 'Git', progressValue: 65, Years: 52 },
    { img: MobileApplicationPic, skillsNames: 'Mobile Application Design', progressValue: 85, Years: 2 },
    { img: ResponsivePic, skillsNames: 'Responsive Web Design', progressValue: 95, Years: 5 },

];

export default function SkillsList(props) {
    const setCount = skillsInfo.slice(0, props.setCount);
    // console.log("countssssss"(setCount))

    return (
        <div className="skills_experiences_body">
            {setCount.map((skillsInfo) => (
                <div className="skills_experiences_item d_flex align_items gap_20">
                    <img src={skillsInfo.img} alt={skillsInfo.skillsNames} />
                    <div className="skills_experiences_info flex_grow1">
                        <h3>{skillsInfo.skillsNames}</h3>
                        <ProgressBar setValue={skillsInfo.progressValue} />
                        <h5>{skillsInfo.Years} Years Work Experience</h5>
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



