import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./components/MainLayout.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Activity from "./pages/Activity.tsx";
import Field from "./pages/Field.tsx";
import Crop from "./pages/Crop.tsx";
import Staff from "./pages/Staff.tsx";
import Reports from "./pages/Reports.tsx";
import Insights from "./pages/Insights.tsx";
import Settings from "./pages/Settings.tsx";
import CultivateForm from "./components/Cultivate/CultivateForm.tsx";
import FieldForm from "./components/Field/FieldForm.tsx";
import CropForm from "./components/Crop/CropForm.tsx";
import StaffForm from "./components/Staff/StaffForm.tsx";

function App() {

    const routes = createBrowserRouter([
        {
            path: '',
            element: <MainLayout/>,
            children: [
                { path: '/', element: <Dashboard/> },
                { path: '/activity', element: <Activity/>, children: [
                        { path: '/activity/addCultivate', element: <CultivateForm/> }
                    ]
                },
                { path: '/field', element: <Field/>, children: [
                        { path: '/field/addField', element: <FieldForm/> },
                        { path: '/field/updateField', element: <FieldForm/> }
                    ]
                },
                { path: '/crop', element: <Crop/>, children: [
                        { path: '/crop/addCrop', element: <CropForm/> },
                        { path: '/crop/updateCrop', element: <CropForm/> }
                    ]
                },
                { path: '/staff', element: <Staff/>, children: [
                        { path: '/staff/addStaff', element: <StaffForm/> },
                        { path: '/staff/updateStaff', element: <StaffForm/> }
                    ]
                },
                { path: '/Reports', element: <Reports/> },
                { path: '/insights', element: <Insights/> },
                { path: '/settings', element: <Settings/> },
            ]
        }
    ])

    return (
        <>
            <RouterProvider router={routes} />
        </>
    )
}

export default App