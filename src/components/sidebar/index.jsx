import classNames from "classnames";
import React from "react";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import { Button } from "reactstrap";
// import { Link } from "react-router-dom";

const SideBar = ({ isOpen, toggle }) => (
    <div className={classNames("sidebar", { "is-open": isOpen })} onDra>
        <div className="sidebar-header">
            <h6>Import your media</h6>
            <p>Videos, audios, images, GIFs</p>
        </div>
        <div className="side-menu">
            <Button color="primary" size="sm" onClick={() => {}}>
                Import media
            </Button>
        </div>

        <div role="button" className="collapse-arrow" onClick={toggle}>
            {isOpen ? <MdArrowLeft fontSize={30} /> : <MdArrowRight fontSize={30} />}
        </div>
    </div>
);

export default SideBar;
