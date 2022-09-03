import React from "react";
import AdobeXd from "./adobeXD";
import UIUXdesigner from "./UI&UXdesigner";
import Html from "./html";
import Css from "./css";

import './skillsList.scss';


export default function SkillsList() {
    return (
        <div className="skills_experiences_body">
            <AdobeXd />
            <UIUXdesigner />
            <Html />
            <Css />
        </div>
    );
}


