import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import SideBar from "./components/sidebar";
import Content from "./components/content";
import RightBar from "./components/rightbar";

function App() {
    const [sidebarIsOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

    return (
        <div className="App">
            <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
            <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
            <RightBar />
        </div>
    );
}

export default App;
