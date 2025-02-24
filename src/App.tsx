import './index.css'
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import MainLayout from "./components/MainLayout.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Activity from "./pages/Activity.tsx";
import Field from "./pages/Field/Field.tsx";
import Crop from "./pages/Crop/Crop.tsx";
import Staff from "./pages/Staff/Staff.tsx";
import Insights from "./pages/Insights.tsx";
import CultivateForm from "./components/Cultivate/CultivateForm.tsx";
import AddCrop from "./pages/Crop/AddCrop.tsx";
import UpdateCrop from "./pages/Crop/UpdateCrop.tsx";
import AddField from "./pages/Field/AddField.tsx";
import UpdateField from "./pages/Field/UpdateField.tsx";
import AddStaff from "./pages/Staff/AddStaff.tsx";
import UpdateStaff from "./pages/Staff/UpdateStaff.tsx";
import AddVehicle from "./pages/Vehicle/AddVehicle.tsx";
import UpdateVehicle from "./pages/Vehicle/UpdateVehicle.tsx";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";
import { useSelector } from 'react-redux';

function App() {
    const isAuthenticated = useSelector(state => state.user.isAuthenticated)

    const routes = createBrowserRouter([
        {
            path: '',
            element: isAuthenticated ? <MainLayout/> : <Navigate to={'/login'}/> ,
            children: [
                { path: '', element: <Dashboard/> },
                { path: '/activity', element: <Activity/>, children: [
                        { path: '/activity/addCultivate/:id', element: <CultivateForm/> }
                    ]
                },
                { path: '/field', element: <Field/>, children: [
                        { path: '/field/addField', element: <AddField/> },
                        { path: '/field/updateField/:id', element: <UpdateField/> }
                    ]
                },
                { path: '/crop', element: <Crop/>, children: [
                        { path: '/crop/addCrop', element: <AddCrop/> },
                        { path: '/crop/updateCrop/:id', element: <UpdateCrop/> }
                    ]
                },
                { path: '/staff', element: <Staff/>, children: [
                        { path: '/staff/addStaff', element: <AddStaff/> },
                        { path: '/staff/updateStaff/:id', element: <UpdateStaff/> },
                        { path: '/staff/addVehicle', element: <AddVehicle/>},
                        { path: '/staff/updateVehicle/:id', element: <UpdateVehicle/>},
                    ]
                },
                { path: '/insights', element: <Insights/> },
            ]
        },
        { path: "/login", element: <Login/>},
        { path: "/signup", element: <Signup/>},
    ])

    return <RouterProvider router={routes} />

}

export default App