import {Outlet} from "react-router-dom";
import Sidebar from "./Sidebar.tsx";
import Header from "./Header.tsx";

export default function MainLayout() {
    return (
        <main className="main-content-holder">
            <aside className="custom-sidebar custom-layout">
                <Sidebar/>
            </aside>
            <div className="main-content px-1.5">
                <Header/>
                <Outlet/>
            </div>
        </main>
)
}