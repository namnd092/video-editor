import React from "react";
import { AiFillAudio } from "react-icons/ai";

const RightBar = ({}) => (
    <div className="right-bar">
        <div role="button" style={{ marginBottom: "30px" }}>
            <div className="d-flex justify-content-center">
                <AiFillAudio fontSize={20} style={{}} />
            </div>
            <p className="text-center">audio</p>
        </div>
        <div role="button" style={{ marginBottom: "30px" }}>
            <div className="d-flex justify-content-center">
                <AiFillAudio fontSize={20} style={{}} />
            </div>
            <p className="text-center">audio</p>
        </div>
        <div role="button" style={{ marginBottom: "30px" }}>
            <div className="d-flex justify-content-center">
                <AiFillAudio fontSize={20} style={{}} />
            </div>
            <p className="text-center">audio</p>
        </div>
    </div>
);

export default RightBar;
