import React from 'react';
import '../styles/header.scss';

import{Link} from 'react-router-dom'

export default class Header extends React.Component{
    render(){
        return(<>
            <div className="containerHeader">
                <div className="title">
                    <p className="Hey">Hey</p>
                    <p className="work">Work</p>
                </div>
                <div className="inputContainer">
                    <input type="text" className="search input search-input" placeholder = "search by name"/>
                </div>               
                <Link to="/login" className= "text">SignIn</Link>
                <p className= "text">SignUp</p>               
            </div>
            </>
        )
    }
}