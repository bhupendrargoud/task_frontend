
import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Switch ,Redirect} from 'react-router-dom';
import Login from '../pages/Login';
import Profile from '../pages/Profile'
import EmployeeManagement from '../pages/EmployeeManagement'


const Navigation = () => {
  const [loggedInData, setLoggedInData] = useState(null);
  return (
    <Router>
    <div>
      <Switch>
        <Route path="/login">
          <Login onLogin={(data) => setLoggedInData(data)} />
        </Route>
        <Route path="/profile">
          {loggedInData ? (
            <Profile employeeId={loggedInData.employeeId} />
          ) : (
          
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/employeem" component={EmployeeManagement} />
       
      </Switch>
    </div>
  </Router>
  
  );
};

export default Navigation;
