import { useEffect, useState } from "react";
import {LoginForm} from "../components/login-form.tsx";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { User } from "../models/User.ts";
import { loginUser } from "../reducers/UserSlice.ts";
import { AppDispatch } from "../store/Store.ts";

export default function Login() {

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    
    const [username, setLoginUsername] = useState('');
    const [password, setLoginPassword] = useState('');

    function handleLogin() {
        const user : User = {username : username, password: password}
        dispatch(loginUser(user))
    }

    useEffect(() => {
        if(isAuthenticated){
            navigate('/'); 
        }
    }, [isAuthenticated, navigate]);

    return (
        <main className="w-2/4 flex justify-center items-center min-h-screen mx-auto">
            <LoginForm 
                setLoginUsername={setLoginUsername}
                setLoginPassword={setLoginPassword}
                handleLogin={handleLogin}
            />
        </main>
    )
}