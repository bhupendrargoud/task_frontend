import React from "react";
import Navigation from "../components/Navigation";
import DashboardPage from "../pages/Dashboard";
import Login from "../pages/Login"
import {Route,Routes} from 'react-router-dom';

const TRoute=()=>{
    return(
        <div>
            <div>
                <Navigation/>
            </div>
            <Routes>
                <Route path='/' element={<DashboardPage/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
            </Routes>
        </div>
    )
}
export default TRoute;