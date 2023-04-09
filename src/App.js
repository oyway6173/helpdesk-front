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
import UserSidebar from './scenes/global/userSidebar'
import WorkerSidebar from './scenes/global/workerSidebar'
import BottomBar from "./scenes/global/BottomBar";
import Dashboard from "./scenes/dashboard";
import Tickets from "./scenes/tickets";
import FAQ from "./scenes/faq";
import Rating from "./scenes/rating";
import Users from "./scenes/users";
import Profile from "./scenes/profile/index";
import Roles from "./scenes/roles";
import Departments from "./scenes/deps";
import Labels from "./scenes/status";
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
import { getRoleFromToken } from "./services/getRoleService";
import { Label } from "@material-ui/icons";


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
  const userRole = getRoleFromToken();

    if (isExpired) {
      console.log('Token has expired');
      localStorage.clear();
    } else {
      console.log('Token is still valid');
    }

    {/* <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/adduser" element={<AddUser />} />
              <Route path="/tickets" element={<Tickets />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/rating" element={<Rating />} /> 
              <Route path="/users" element={<Users />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/roles" element={<Roles />} />
              <Route path="/deps" element={<Departments />} /> */}
              {/* <Route path="/labels" element={<Labels />} /> */}
              {/* <Route path="/status" element={<Status />} />
              <Route path="/priorities" element={<Priorities />} />
              <Route path="/geo" element={<Geography />} /> */}


    const roles = {
      admin: {
        permissions: ['view_faq', 'view_dash', 'add_user', 'view_tickets', 'view_rating', 'view_users', 'view_profile', 'view_roles', 'view_deps', 'view_labels', 'view_status', 'view_priorities', 'view_geo'],
        routes: [
          <Route key="view_faq" path="/faq" element={<FAQ />} />,
          <Route key="view_dash" path="/dashboard" element={<Dashboard />} />,
          <Route key="add_user" path="/adduser" element={<AddUser />} />,
          <Route key="view_tickets" path="/tickets" element={<Tickets />} />,
          <Route key="view_rating" path="/rating" element={<Rating />} />,
          <Route key="view_users" path="/users" element={<Users />} />,
          <Route key="view_profile" path="/profile" element={<Profile />} />,
          <Route key="view_roles" path="/roles" element={<Roles />} />,
          <Route key="view_deps" path="/deps" element={<Departments />} />,
          <Route key="view_labels" path="/labels" element={<Labels />} />,
          <Route key="view_status" path="/status" element={<Status />} />,
          <Route key="view_priorities" path="/priorities" element={<Priorities />} />,
          <Route key="view_geo" path="/geo" element={<Geography />} />,

        ]
      },
      user: {
        permissions: ['view_faq', 'view_rating', 'view_tickets', 'view_profile', 'view_geo'],
        routes: [
          <Route key="view_faq" path="/faq" element={<FAQ />} />,
          <Route key="view_rating" path="/rating" element={<Rating />} />,
          <Route key="view_tickets" path="/tickets" element={<Tickets />} />,
          <Route key="view_profile" path="/profile" element={<Profile />} />,
          <Route key="view_geo" path="/geo" element={<Geography />} />,
        ]
      },
      worker: {
        permissions: ['view_faq', 'view_rating', 'view_tickets', 'view_profile', 'view_geo', 'view_dash'],
        routes: [
          <Route key="view_faq" path="/faq" element={<FAQ />} />,
          <Route key="view_rating" path="/rating" element={<Rating />} />,
          <Route key="view_tickets" path="/tickets" element={<Tickets />} />,
          <Route key="view_profile" path="/profile" element={<Profile />} />,
          <Route key="view_geo" path="/geo" element={<Geography />} />,
          <Route key="view_dash" path="/dashboard" element={<Dashboard />} />,
        ]
      }
    }
  

  const userRoutes = roles[userRole]?.routes;

  return (
    
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {user && userRole == 'admin' && <><Box sx={{background: `${colors.primary[400]}`}} position={"relative"}><Sidebar /></Box></>}
          {user && userRole == 'user' && <><Box sx={{background: `${colors.primary[400]}`}} position={"relative"}><UserSidebar /></Box></>}
          {user && userRole == 'worker' && <><Box sx={{background: `${colors.primary[400]}`}} position={"relative"}><WorkerSidebar /></Box></>}
          <main className="content">
            {/* <Topbar /> */}
            {!user && <><PublicTopbar /></>}
            {user && <><Topbar /></>}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<SignIn />} />
              <Route path="/logout" element={<Logout />} />
              {userRoutes}
              <Route path="*" element={<div>Page not found!</div>} />
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