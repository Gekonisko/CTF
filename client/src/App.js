import React from "react";
import {Routes, Route, Link} from "react-router-dom"
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import WelcomePage from "./WelcomePage";


function App() {
  return(
      <>
        <nav>
          <ul>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/login'}>Login</Link>
            </li>
          </ul>
        </nav>
        <Routes>
            <Route path={"/"} element={<HomePage/>}/>
            <Route path={"/login"} element={<LoginPage/>}/>
            <Route path={'/welcome'} element={<WelcomePage/>}/>
          <Route/>
        </Routes>
      </>
  )
}

export default App;
