import React from 'react'
import Header from '../components/navbar'
import Head from '../components/head'
import Tim from '../images/tim.svg'
import '../styles/about.sass'

const About = () =>{
    return (
        < div > 
        < Head title = "About" / >
              < Header / >
        <div className="about">
          
        <div className="about-content">
            <div className="image"> 
                <Tim />    
                    
            </div>
            <div className="info-text">
                Hello, My Name is Krishna Kamal.I had done Computer Science Engineering from NIT Nagaland.I love to play Counter Strike Go.If I am not playing at that time I am watching game of pro players on youtube or twitch.
            </div>
        </div>
        </div>
        </div>
    )
}

export default About