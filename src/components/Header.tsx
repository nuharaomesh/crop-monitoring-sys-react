import {useEffect, useState} from "react";

export default function Header() {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            setTime(new Date())
        }, 1000)
    }, []);

    return (
        <>
            <header className="main-header custom-layout">
                <div className="main-header-left"></div>
                <div className="main-header-center">
                    <p className="clock-style">{time.toLocaleTimeString()}</p>
                </div>
                <div className="main-header-right">
                    <div className="notificatio-holder">

                    </div>
                    <div className="profile-holder">

                    </div>
                </div>
            </header>
        </>
    )
}