import {Outlet} from "react-router-dom";
import Sidebar from "./Sidebar.tsx";
import Header from "./Header.tsx";

export default function MainLayout() {
    return (
        <main className="flex p-3">
            <aside className="w-20% h-96 border rounded-lg p-3">
                <Sidebar/>
            </aside>
            <div className="main-content px-1.5">
                <Header/>
                <Outlet/>
            </div>
        </main>
)
}