
import { BrowserRouter as Router, Route, Switch ,withRouter } from 'react-router-dom';
import Login from '../pages/Login';
import Profile from '../pages/Profile'
import EmployeeManagement from '../pages/EmployeeManagement'




const Navigation = () => {

  return (
    <Router>
      <Switch>
        
        
        <Route path="/profile/:employeeId" exact component={Profile} />
        <Route path="/employeemanagement" component={withRouter(EmployeeManagement)} />
        <Route path="/" component={Login}/>
      </Switch>
  </Router>
  
  );
};

export default Navigation;
