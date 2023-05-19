import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import SideBar from "./components/sidebar";
import Content from "./components/content";
import ToolBar from "./components/toolbar";

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

const leftBarItemArr = [
    {
        key: "Captions",
        icon: <MdClosedCaption fontSize={22} className="tool-bar-icon" />,
        title: "Captions",
        content: <>Captions</>,
    },
    {
        key: "Audio",
        icon: <ImVolumeMedium fontSize={22} className="tool-bar-icon" />,
        title: "Audio",
        content: <>Audio</>,
    },
    {
        key: "Fade",
        icon: <CgEditFade fontSize={22} className="tool-bar-icon" />,
        title: "Fade",
        content: <>Fade</>,
    },
    {
        key: "Filters",
        icon: <CgFilters fontSize={22} className="tool-bar-icon" />,
        title: "Filters",
        content: <>Filters</>,
    },
    {
        key: "Effects",
        icon: <MdOutlineAutoFixHigh fontSize={22} className="tool-bar-icon" />,
        title: "Effects",
        content: <>Effects</>,
    },
    {
        key: "Adjust colors",
        icon: <FaAdjust fontSize={22} className="tool-bar-icon" />,
        title: "Adjust colors",
        content: <>Adjust colors</>,
    },
    {
        key: "Speed",
        icon: <MdOutlineSpeed fontSize={22} className="tool-bar-icon" />,
        title: "Speed",
        content: <>Speed</>,
    },
    {
        key: "Transition",
        icon: <TbTransitionLeft fontSize={22} className="tool-bar-icon" />,
        title: "Transition",
        content: <>Transition</>,
    },
    {
        key: "Color",
        icon: <MdOutlineColorLens fontSize={22} className="tool-bar-icon" />,
        title: "Color",
        content: <>Color</>,
    },
];

function App() {
    return (
        <div className="App">
            <ToolBar side="left" toolBarItemArr={leftBarItemArr} />
            <Content />
            <ToolBar side="right" toolBarItemArr={leftBarItemArr} />
        </div>
    );
}

export default App;
