import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Image from '../components/multiple'
import Header from '../components/navbar'
import Head from '../components/head'

import '../styles/project.sass'
import Modal from '../components/modal'


export const query = graphql`
    query {
         allProjectJson {
              edges {
                   node {
                        title
                        imageLink
                        type
                        description
                        projectLink
                   }
              }
         }
    }
    `

export default (props) =>{
     const [ visible,setVisible ] = useState(false)
     const [ index,setIndex ] = useState(0)
     // console.log(props.data.allProjectJson.edges)
 return (
     <div>
          <Head title="Project"/>
         < Header />
          <Modal show= { visible }  set = { setVisible } project= { props.data.allProjectJson.edges[index]} />
         <div className="projects">
             <ul className="projectlist">
               {
               props.data.allProjectJson.edges.map((element,i)=>{
                    
                    return ( <li onClick = { e => { 
                         setVisible(true) 
                         setIndex(i)
                         } } >
                      <Image title={ element.node.imageLink} />
                 <div className="details" >
                             <h1>{ element.node.title}</h1>
                        </div>
                        
                    </li> )
                    
               })}
             </ul>
         </div>
         
     </div>
 )
}