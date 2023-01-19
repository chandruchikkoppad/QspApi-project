import React from 'react'
// import Navbar from './components/navbar/Navbar';
import './Global.css'
import Navbar2 from './components/navbar2/Navbar2';
import Welcome from './components/welcomeBanner3/Welcome';
import Section4 from './components/section4/Section4';
import CardSec1 from './components/cardS1/CardSec1';
const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Navbar2 />
      <Welcome />
      <Section4 />
      <CardSec1/>
    </div>
  )
}

export default App
