import React from 'react';

import '../styles/loginpage.scss';

export default class LoginPage extends React.Component{

    render(){

        return(<>
            <div className="container">
                <div className="loginContainer">
                    <div className="title">
                        <p className="Hey">Hey</p>
                        <p className="Work">Work</p>
                    </div>
                    <form className="loginForm">
                        <div className="formGroup">
                            <input type="text" placeholder="username"/>
                        </div>
                        <div className="formGroup">
                            <input type="text" placeholder="password"/>
                        </div>
                        <div className="formGroup">
                            <button type="submit">SignIn</button>
                        </div>
                    </form>
                </div>
            </div>
        </>)
    }
}