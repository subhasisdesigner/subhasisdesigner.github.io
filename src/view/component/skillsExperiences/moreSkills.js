import React from "react";
import CardActionArea from '@mui/material/CardActionArea';

import PhotoshopPic from '../../../asset/Images/skills/photoshop.png';
import MaterialPic from '../../../asset/Images/skills/material-ui.png';
import ReactPic from '../../../asset/Images/skills/react.png';
import BootstrapPic from '../../../asset/Images/skills/bootstrap.png';
import JsPic from '../../../asset/Images/skills/js.png';
import WordpressPic from '../../../asset/Images/skills/wordpress.png';
import SassPic from '../../../asset/Images/skills/sass.png';

const moreSkills = [
    { skillsPic: PhotoshopPic, title: 'Photoshop' },
    { skillsPic: MaterialPic, title: 'Material UI' },
    { skillsPic: ReactPic, title: 'React js' },
    { skillsPic: SassPic, title: 'Sass' },
    { skillsPic: BootstrapPic, title: 'Bootstrap' },
    { skillsPic: WordpressPic, title: 'WordPress' },
    { skillsPic: JsPic, title: 'javascript' },

]

export default function MoreSkills() {
    return (
        <div className="more_skills_body d_flex align_items gap_20">
            <div className="more_skills">
                {moreSkills.map((moreSkills) => (
                    <div className="skills_item">
                        <img src={moreSkills.skillsPic} title={moreSkills.title} />
                    </div>
                ))}
                <div className="skills_item">
                    <CardActionArea className="more_skills_btn">
                        <h3>2+</h3>
                        <p>More</p>
                    </CardActionArea>
                </div>
            </div>
        </div>
    );
}




