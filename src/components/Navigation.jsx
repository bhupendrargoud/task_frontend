
import { BrowserRouter as Router, Route, Switch ,withRouter } from 'react-router-dom';
import Login from '../pages/Login';
import Profile from '../pages/Profile'
import EmployeeManagement from '../pages/EmployeeManagement'
import Dashboard from '../pages/Dashboard';


const Navigation = () => {

  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login}/>
        
        <Route path="/profile/:employeeId" exact component={Profile} />
        <Route path="/employeemanagement" component={withRouter(EmployeeManagement)} />
        <Route path="/" component={Dashboard}/>
      </Switch>
  </Router>
  
  );
};

export default Navigation;
