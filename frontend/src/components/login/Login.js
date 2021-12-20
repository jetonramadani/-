/* eslint-disable */
import React from 'react'
import "./Login.css";
import photoImage from '../../assets/MacedoniaMap.png'
const Login = () => {
    return (
        <div >
            {<img src={photoImage} className='imgBackground' />}
            <div class="login-box">
                <h2>Login</h2>
                <form>
                    <div class="user-box">
                        <input type="text" name="" required="" />
                        <label>Корисничко име</label>
                    </div>
                    <div class="user-box">
                        <input type="password" name="" required="" />
                        <label>Лозинка</label>
                    </div>
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Најави се
                    </a>
                </form>
            </div>
        </div>
    )
}

export default Login
