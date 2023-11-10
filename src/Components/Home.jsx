import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
   
    <div className='home'>
      <h1>Employee App</h1>
      <br /><br />
      <button className="button-50" role="button"><Link to={'/dash'} style={{color:'white', textDecoration:'none'}}>Welcome</Link> </button>
    </div>
  
    
    
  )
}

export default Home
