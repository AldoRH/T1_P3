import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/NavBar';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import { NavLink, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Terms from "./screens/TermsAndConditions";
import UsersScreen from './screens/UsersScreen';
import User from './screens/UserScreen';
import LoginScreen from './screens/LoginScreen';
import ViewUserScreen from './screens/ViewUserScreen';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>

    <Router>
      <ResponsiveAppBar/>
      <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/login' element={<LoginScreen/>} />
            <Route path="/users" element={<UsersScreen/>}/>
            <Route path="/about/:id" element={<About/>}/>
            <Route path="/terms-and-conditions" element={<Terms/>}/>
            <Route path="/users/:id" element={<User/>}/>
            <Route path="/view/:id" element={<ViewUserScreen/>}/>

        </Routes>
    </Router>

    {/* <NavBar/> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
