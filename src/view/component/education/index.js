import React from "react";
import './education.scss';
import ViewMoreButton from "../materialUI/Button/viewMoreButton";

const educationInfo = [
    { degree: "Bachelor Arts (B. A General)", university: "The University Of Burdwan (B.U)", year: 2012, },
    {
        degree: "Higher Secondary Education (H.S Madhyamik)", university: "West Bengal Council of Higher Secondary Education (W.B.C.H.S.E)West Bengal, Hooghly", year: 2009,
    },
    {
        degree: "Secondary Education (Madhyamik)", university: "West Bengal Board of Secondary Education (W.B.B.S.E)West Bengal, Hooghly", year: 2007,
    },
]
export default function Education() {
    return (
        <div className="education">
            {educationInfo.map((educationInfo) => (
                <div className="education_nfo">
                    <div className="nfo_item">
                        <h5>{educationInfo.degree}</h5>
                        <p>{educationInfo.university}</p>
                    </div>
                    <h5>Passing year | {educationInfo.year}</h5>
                </div>
            ))}
            <ViewMoreButton />
        </div>
    );
}


