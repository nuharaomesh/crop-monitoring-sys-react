import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./components/MainLayout.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Activity from "./pages/Activity.tsx";
import Field from "./pages/Field/Field.tsx";
import Crop from "./pages/Crop/Crop.tsx";
import Staff from "./pages/Staff.tsx";
import Reports from "./pages/Reports.tsx";
import Insights from "./pages/Insights.tsx";
import Settings from "./pages/Settings.tsx";
import CultivateForm from "./components/Cultivate/CultivateForm.tsx";
import StaffForm from "./components/Staff/StaffForm.tsx";
import AddCrop from "./pages/Crop/AddCrop.tsx";
import UpdateCrop from "./pages/Crop/UpdateCrop.tsx";
import AddField from "./pages/Field/AddField.tsx";
import UpdateField from "./pages/Field/UpdateField.tsx";

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
                        { path: '/field/addField', element: <AddField/> },
                        { path: '/field/updateField', element: <UpdateField/> }
                    ]
                },
                { path: '/crop', element: <Crop/>, children: [
                        { path: '/crop/addCrop', element: <AddCrop/> },
                        { path: '/crop/updateCrop/:id', element: <UpdateCrop/> }
                    ]
                },
                { path: '/staff', element: <Staff/>, children: [
                        { path: '/staff/addStaff', element: <StaffForm/> },
                        { path: '/staff/updateStaff/:id', element: <StaffForm/> }
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