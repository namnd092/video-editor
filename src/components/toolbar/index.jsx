import React, { useMemo, useState } from "react";

import "./index.css";
import SideBar from "../sidebar";

const BarItem = ({ onClick, icon, title, active }) => (
    <div
        role="button"
        className={`tool-bar-item ${active ? "active" : ""}`}
        onClick={onClick}
    >
        <div className="d-flex justify-content-center">{icon}</div>
        <p className="text-center tool-bar-item-title">{title}</p>
    </div>
);

const ToolBar = ({ side, toolBarItemArr }) => {
    const [activeSide, setActiveSide] = useState("");

    const onClickBarItem = (key) => {
        setActiveSide(key === activeSide ? "" : key);
    };

    const activeContent = useMemo(
        () => toolBarItemArr.find((item) => item.key === activeSide)?.content || <></>,
        [activeSide, toolBarItemArr]
    );

    return (
        <>
            <div
                className="tool-bar"
                style={
                    side === "right"
                        ? { right: 0, borderLeft: "1px solid #7d7f8e" }
                        : { left: 0, borderRight: "1px solid #7d7f8e" }
                }
            >
                {toolBarItemArr.map(({ key, icon, title }) => (
                    <BarItem
                        key={key}
                        icon={icon}
                        title={title}
                        onClick={() => onClickBarItem(key)}
                        active={key === activeSide}
                    />
                ))}
            </div>

            {side === "left" && (
                <SideBar
                    onClose={() => setActiveSide("")}
                    isOpen={activeSide !== ""}
                    content={activeContent}
                />
            )}
        </>
    );
};

export default ToolBar;
