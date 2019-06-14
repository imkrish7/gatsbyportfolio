import React from 'react'

import Header from '../components/navbar'
import Head from '../components/head'
import HTML from '../images/html.svg'
import API from '../images/api.svg'
import JS from '../images/js.svg'
import ICONR from '../images/iconR.svg'
import NODE from '../images/node.svg'
import EXPRESS from '../images/express.svg'
import CSS from '../images/css.svg'
import SASS from '../images/sass.svg'
import '../styles/skills.sass'

export default  () =>{
    
    return (
        <div>
            < Head title = "Skills" / >            
        <Header />
        <div className="container">
            <ul>
                <li><HTML /></li>
                <li><JS /></li>
                <li><ICONR /></li>
                <li> <API /> </li>
                <li><NODE /></li>
                <li><CSS /></li>
                <li><SASS /></li>
                <li><EXPRESS /></li> 
            </ul>
        </div>
        </div>
    )
}