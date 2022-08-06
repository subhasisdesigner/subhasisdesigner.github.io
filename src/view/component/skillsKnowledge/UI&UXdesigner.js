import React from "react";
import LinearProgress from '@mui/material/LinearProgress';
import UIUXdesignerPic from '../../../asset/Images/skills/ux-ui.png';


export default function UIUXdesigner() {
    return (
        <div className="skills_knowledge_item d_flex align_items gap_20">
            <img src={UIUXdesignerPic} />
            <div className="skills_knowledge_info flex_grow1">
                <h3>UX & UI Designer</h3>
                <ProgressBar />
            </div>
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


function ProgressBar() {
    const [progress, setProgress] = React.useState(10);
    const setValue = 90;
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



