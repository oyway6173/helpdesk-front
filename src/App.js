import { ColorModeContext, useMode, tokens } from "./theme";
import { Box, colors, CssBaseline, ThemeProvider } from "@mui/material";
// import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { useState, useEffect } from 'react'
import Home from "./scenes/home"
import SignIn from "./scenes/signin";
import Logout from "./scenes/logout";
import MockData from "./data/mockData";
import Topbar from "./scenes/global/Topbar";
import PublicTopbar from "./scenes/global/PublicTopbar";
import Sidebar from "./scenes/global/Sidebar";
import BottomBar from "./scenes/global/BottomBar";
import Dashboard from "./scenes/dashboard";
import Tickets from "./scenes/tickets";
import FAQ from "./scenes/faq";
import Rating from "./scenes/rating";
import Users from "./scenes/users";
import Profile from "./scenes/profile/index";
import Roles from "./scenes/roles";
import Departments from "./scenes/deps";
// import Labels from "./scenes/status";
import AddUser from "./scenes/adduser";
import Status from "./scenes/status";
import Priorities from "./scenes/priorities";
import Geography from "./scenes/geography";
// import StickyFooter from "./scenes/global/StickyFooter";



import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";


//services 
import { getCurrentUser } from "./services/authService";
import { isTokenExpired } from "./services/expiryService";


function App() {
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);
  const [currPath, setCurrPath] = useState(window.location.pathname)
  useEffect(() => {
    setCurrPath(window.location.pathname)
  }, []);

  
  const [user, setUser] = useState("");

    useEffect(() => {
        setUser(getCurrentUser());
    }, []);

  const isExpired = isTokenExpired();

  if (isExpired) {
    console.log('Token has expired');
    localStorage.clear();
  } else {
    console.log('Token is still valid');
  }

  return (
    // <Routes>
    //   <Route>
    //     <Route path="/" element={<Dashboard />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/user" element={<User />} />
    //     <Route path="/worker" element={<Worker />} />
    //     <Route path="*" element={<div>Page not found!</div>} />
    //   </Route>
    // </Routes>
    
    <ColorModeContext.Provider value={colorMode}>
    
    
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {user && <><Box sx={{background: `${colors.primary[400]}`}} position={"relative"}><Sidebar /></Box></>}
          <main className="content">
            {/* <Topbar /> */}
            {!user && <><PublicTopbar /></>}
            {user && <><Topbar /></>}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<SignIn />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/adduser" element={<AddUser />} />
              <Route path="/tickets" element={<Tickets />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/rating" element={<Rating />} /> 
              <Route path="/users" element={<Users />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/roles" element={<Roles />} />
              <Route path="/deps" element={<Departments />} />
              {/* <Route path="/labels" element={<Labels />} /> */}
              <Route path="/status" element={<Status />} />
              <Route path="/priorities" element={<Priorities />} />
              <Route path="/geo" element={<Geography />} />

            </Routes>
            {currPath !== '/login' && <><BottomBar /></>}
            {/* <StickyFooter /> */}
          </main>
          {/* <BottomBar /> */}
        </div>
      </ThemeProvider>
    {/* </BrowserRouter> */}
    </ColorModeContext.Provider>
  );
}

export default App;