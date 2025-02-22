import { useEffect, useState } from "react";
import { SignUpForm } from "../components/sign-up-form";
import { User } from "../models/User";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/Store";
import { registerUser } from "../reducers/UserSlice";
import { useNavigate } from "react-router-dom";

export default function Signup() {

    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate();

    const [registerUsername, setRegisterUsername] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')

    function handleRegister(){
        const user: User = {username: registerUsername, password : registerPassword}
        dispatch(registerUser(user));
        navigate('/login')
    }

    return (
        <>
            <main className="w-2/4 flex justify-center items-center min-h-screen mx-auto">
                <SignUpForm
                    setRegisterUsername={setRegisterUsername}
                    setRegisterPassword={setRegisterPassword}
                    handleRegister={handleRegister}
                />
            </main>
        </>
    )
}