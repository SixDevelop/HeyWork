import React from 'react'
import Header from './header'

import '../styles/homepage.scss'

export default class Homepage extends React.Component{

    render(){
        return(<>
            <div className = "containerHome">
                <div className="header">
                    <Header/>
                </div>
                
                <p>it is homepage, bitch!</p>               
            </div>
            </>
        )
    }
}



