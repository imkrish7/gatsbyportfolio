import React from "react"
import Header from '../components/navbar'
import Head from '../components/head'
import '../styles/404.sass'

const NotFoundPage = () => (
  <div>
    <Head title={"404" }/>
    <Header />
    <div className="home-404">
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
    
  </div>
)

export default NotFoundPage
