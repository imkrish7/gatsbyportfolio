import React from "react"
import Head from '../components/head.js'
import Header from "../components/navbar.js"
import Boy from '../images/front.svg'


import '../styles/index.sass'

const IndexPage = () => {
  
    return (
        <div>
            <Head title="Home"/>
            <Header />
            
        <div className="home">
            
            <div className="hero">
                <h1>Hi... I'm</h1> 
                <h1>Krishna Kamal Singh Patel</h1>
                <h2>Full Stack Web Developer</h2>
            </div>
            < div className = "hero-image">
                <Boy />
            </div>
        </div>
        </div>
    )
}

export default IndexPage
