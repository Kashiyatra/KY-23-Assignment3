import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import styled, { keyframes } from "styled-components";
import {Roll,Rotate} from 'react-reveal';



import './App.css';

import { useStateContext } from './contexts/ContextProvider';


import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Benefits,Contacts,Duties,Kashiyatra,WhyCA ,KashiNight} from './pages';

 const App = () => {

    const {activeMenu,themeSettings,setThemeSettings,currentMode,currentColor} = useStateContext();
// const activeMenu=true;


  return ( <div className={currentMode === 'Dark' ? 'dark' : ''}>
  <BrowserRouter>
  <div className="flex relative dark:bg-main-dark-bg">
    <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
    <TooltipComponent
      content="Settings"
      position="Top"
    >
      <button
       type="button"
      style={{ background:currentColor, borderRadius: '50%' }}
      onClick={()=>setThemeSettings(true)}
      className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray">
        <FiSettings />
      </button>

    </TooltipComponent>
  </div>
  {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            
<div>
{themeSettings && <ThemeSettings />}
            <Routes>
                {/* dashboard  */}
                <Route path="/" element={currentMode === 'Light' ? (
            <div >
              <Kashiyatra />
            </div>
          ) : (
            <div >
              <KashiNight />
            </div>
          )} />

                <Route path="/Kashiyatra" element={currentMode === 'Light' ? (
            <div >
              <Kashiyatra />
            </div>
          ) : (
            <div >
              <KashiNight />
            </div>
          )} />



                <Route path="/whyCA" element={<WhyCA/>} />
           <Route path="/duties" element={<Duties/>} />
             <Route path="/benefits" element={<> <Rotate top left><Benefits  img="https://cdn.imgbin.com/25/20/19/imgbin-akademick-certifik-t-computer-icons-diploma-public-key-certificate-others-SsB4BuZKLHSYanZYAGcTSGG5E.jpg"
        title="Certification"
        description="Certificate of appreciation undersigned by Kashiyatra IIT(BHU) Varanasi to all CA's."
        
       

        
        /></Rotate>
        <Rotate bottom right><Benefits  img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRImV1oNwMSqw25kTePAgsxoVmLa8TzFUsLYw&usqp=CAU"
        title="Prizes"
        description="Exciting prizes and goodies for top 5 campus ambassadors." /></Rotate>
        
        </>
        } />
         
               <Route path="/contacts" element={<Contacts /> } />

            </Routes>
</div>
</div>
  </div> 
  </BrowserRouter>
  </div>
  )
}

export default App;

