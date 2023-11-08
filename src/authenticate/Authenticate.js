import React, { useState } from 'react';
import "./Authenticate.css";
import Login from "./Login";
import Signup from "./Signup";

const Authenticate = () => {

    const [active, setActive] = useState("login");

    const handleChange = () => {
        setActive(active === "login" ? "signup" : "login");
    };

    return (
        <div className='authenticate'>
            <div className="auth_left">
                <img
                    src="https://i.imgur.com/P3Vm1Kq.png"
                    alt="Instagram Screenshots"
                />
            </div>

            <div className="auth_right">
                {active === "login" ? <Login /> : <Signup />}

                <div className="auth_more">
                    <span>
                        {active === "login" ? (
                            <>
                                Don't have an account?{""}
                                <button onClick={handleChange}>Sign Up</button>
                            </>
                        ) : (
                            <>
                                Have an account? <button onClick={handleChange}>Log In</button>
                            </>
                        )}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Authenticate;