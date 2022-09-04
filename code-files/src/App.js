import { Route,Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import { DarkTheme } from "./components/Themes";
import GlobalStyle from "./globalStyles";

import Main from './components/Main';
import AboutPage from './components/AboutPage';
import DutiesPage from './components/DutiesPage';
import ContactPage from './components/ContactPage';
import BenefitsPage from './components/BenefitsPage';
import Login from './components/Login.js';

function App() {
  return <>

 <GlobalStyle/>


 <ThemeProvider theme={lightTheme}>
  <Switch>
    <Route exact path="/" component={Main}/>
    <Route exact path="/Why CA" component={AboutPage}/>
    <Route exact path="/duties" component={DutiesPage}/>
    <Route exact path="/contact" component={ContactPage}/>
    <Route exact path="/benefits" component={BenefitsPage}/>
    <Route exact path="/login" component={Login}/>
  </Switch>

 </ThemeProvider>
   
   
   
   </> 
}

export default App

