import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";

// import Topbar from "../topbar";

const Content = ({ sidebarIsOpen, toggleSidebar }) => (
    <Container fluid className={classNames("content", { "is-open": sidebarIsOpen })}>
        <div draggable>abcd</div>
    </Container>
);

export default Content;
