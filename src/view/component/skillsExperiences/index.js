import React from "react";
import AdobeXd from "./adobeXD";
import UIUXdesigner from "./UI&UXdesigner";
import Html from "./html";
import Css from "./css";
import MoreSkills from "./moreSkills";

import './skillsExperiences.scss';


export default function SkillsExperiences() {
    return (
        <div className="skills_experiences_body">
            <AdobeXd />
            <UIUXdesigner />
            <Html />
            <Css />
            <MoreSkills />
        </div>
    );
}


