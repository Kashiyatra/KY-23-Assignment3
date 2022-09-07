import React, { useState } from 'react'
import Navbar from './components/Navbar'
import  './App.css'
import Theme from './components/Theme'
import Skills from './components/Skills'
import Card from './components/Card'
import Contact from './components/Contact'
import { Footer } from './components/Footer'


function App() {
  const [mode,setMode]=useState('none')
  const toggleMode = ()=>{
    if(mode==='none'){
      setMode('block');
    
    }
    else{
      setMode('none');
    }
  }
  return (

    <>
    
    <Navbar mode={mode} />
    <Theme toggleMode={toggleMode}/>
    
    <Card />
    <Skills/>
    <Contact/>
    <Footer/>
  
    </>
  )
}

export default App