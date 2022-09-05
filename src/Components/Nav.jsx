import React from 'react'
import '../index.css'
import '../tabres.css'
import '../responsive.css'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Redirect,
} from 'react-router-dom'
import Home from './Home'
// import About from './About'
// import Service from './Service'
// import Team from './Team'
// import Project from './Project'
import Signup from './Signup'
import Duties from './Duties'
import Contact from './Contact'

const Nav = () => {
  return (
    <>
      <Router>
        <nav>
          <div id="Container">
            <div id="NavContentWrapper">
              <h2 id="NavTitle">Kashiyatra 2022</h2>
              <ul id="NavLinks">
                <li>
                  <NavLink exact activeClassName="active" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink exact activeClassName="active" to="/duties">
                    Duties
                  </NavLink>
                </li>
                <li>
                  <NavLink exact activeClassName="active" to="/contact">
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink exact activeClassName="active" to="/signup">
                  SignUp
                  </NavLink>
                </li>
              </ul>
              <div id="Burger">
                <i className="fas fa-bars"></i>
                <ul id="NavLinksMobile">
                  <li>
                    <NavLink exact activeClassName="active" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li>
                  <NavLink exact activeClassName="active" to="/duties">
                    Duties
                  </NavLink>
                </li>
                <li>
                  <NavLink exact activeClassName="active" to="/contact">
                    Contact
                  </NavLink>
                </li>
                  <li>
                    <NavLink exact activeClassName="active" to="/signup">
                      SignUp
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/duties" component={Duties} />
          <Route exact path="/contact" component={Contact} />
          {/* <Route exact path="/service" component={Service} />
          <Route exact path="/project" component={Project} /> */}
          <Route exact path="/signup" component={Signup} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  )
}
export default Nav
