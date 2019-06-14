import React from 'react'
import '../styles/modal.sass'

import Image from '../components/multiple'
export default (props) =>{
    const handler = (e) =>{
    
      props.set(false)
    } 
 
    return (
        
            <div className="modal"  id="modal" style= {{display: props.show ? "flex" : "none"}}>
                <div className="modal-content">
                    <span className="close-button" onClick= { handler } >&times;</span>
                    <div>
                        <h1>Title </h1>
                        <h2>{ props.project.node.title}</h2>
                    </div>
                    <div>
                        <Image title={ props.project.node.imageLink }/>
                    </div>
                     <div>
                        <h1>Type</h1>
                        <h2>{props.project.node.type}</h2>
                    </div>
                    <div>
                        <h1>Description</h1>
                        <p>{ props.project.node.description}</p>
                    </div>
                    <div>
                        <h1>Link</h1>
                        <h2><a href={ props.project.node.projectLink} targe="_blank" rel="noopener noreferer">Give a Look</a></h2>
                    </div>
                </div>
            </div>
        
    )
}