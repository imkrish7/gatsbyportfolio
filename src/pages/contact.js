import React from 'react'
import { FaEnvelope, FaTwitter, FaGithub,FaLinkedin,FaPaperPlane  } from "react-icons/fa"
import Header from '../components/navbar'
import Head from '../components/head'

import '../styles/contact.sass'

export default () =>{
    return (
        <div>
            <Head title="Contact"/>
            <Header />
                <div className="main">
                        <div className="contact-text">
                            <div className="contactemail">
                                <h1>Conatact Me</h1>
                                <ul>
                                    <li> <FaEnvelope /> <em>singhkrishk07@gamil.com</em></li>
                                    <li> <FaTwitter /> < a href = "https://twitter.com/dr_rackham" target="_blank" rel="noopener noreferrer">@dr_rackham</a></li>
                                    <li><FaGithub /> <a href="https://github.com/imkrish7" target="_blank" rel="noopener noreferrer">imkrish7</a></li>
                                    <li> <FaLinkedin /> < a href = "https://www.linkedin.com/in/drrackham/" target="_blank" rel="noopener noreferrer">Krishna Kamal Singh </a></li>
                                    <li>< FaPaperPlane /> <a href="#">Resume</a></li>
                                </ul>
                            </div>
                        
                    </div>
            </div>
        </div>
    )
}