import React from "react";
import { CgEditFade, CgFilters } from "react-icons/cg";
import { FaAdjust } from "react-icons/fa";
import { ImVolumeMedium } from "react-icons/im";
import {
    MdClosedCaption,
    MdOutlineAutoFixHigh,
    MdOutlineColorLens,
    MdOutlineSpeed,
} from "react-icons/md";
import { TbTransitionLeft } from "react-icons/tb";
import "./index.css";

const RightBar = ({}) => (
    <div className="right-bar">
        <div role="button" className="right-bar-item">
            <div className="d-flex justify-content-center">
                <MdClosedCaption fontSize={22} className="right-bar-icon" />
            </div>
            <p className="text-center right-bar-item-title">Captions</p>
        </div>
        <div role="button" className="right-bar-item">
            <div className="d-flex justify-content-center">
                <ImVolumeMedium fontSize={20} className="right-bar-icon" />
            </div>
            <p className="text-center right-bar-item-title">Audio</p>
        </div>
        <div role="button" className="right-bar-item">
            <div className="d-flex justify-content-center">
                <CgEditFade fontSize={20} className="right-bar-icon" />
            </div>
            <p className="text-center right-bar-item-title">Fade</p>
        </div>
        <div role="button" className="right-bar-item">
            <div className="d-flex justify-content-center">
                <CgFilters fontSize={20} className="right-bar-icon" />
            </div>
            <p className="text-center right-bar-item-title">Filters</p>
        </div>
        <div role="button" className="right-bar-item">
            <div className="d-flex justify-content-center">
                <MdOutlineAutoFixHigh fontSize={20} className="right-bar-icon" />
            </div>
            <p className="text-center right-bar-item-title">Effects</p>
        </div>
        <div role="button" className="right-bar-item">
            <div className="d-flex justify-content-center">
                <FaAdjust fontSize={20} className="right-bar-icon" />
            </div>
            <p className="text-center right-bar-item-title">Adjust colors</p>
        </div>
        <div role="button" className="right-bar-item">
            <div className="d-flex justify-content-center">
                <MdOutlineSpeed fontSize={20} className="right-bar-icon" />
            </div>
            <p className="text-center right-bar-item-title">Speed</p>
        </div>
        <div role="button" className="right-bar-item">
            <div className="d-flex justify-content-center">
                <TbTransitionLeft fontSize={20} className="right-bar-icon" />
            </div>
            <p className="text-center right-bar-item-title">Transition</p>
        </div>
        <div role="button" className="right-bar-item">
            <div className="d-flex justify-content-center">
                <MdOutlineColorLens fontSize={20} className="right-bar-icon" />
            </div>
            <p className="text-center right-bar-item-title">Color</p>
        </div>
    </div>
);

export default RightBar;
