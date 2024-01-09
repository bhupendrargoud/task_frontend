// Import necessary modules from react-router-dom
import { BrowserRouter as Router, Route, Link, Switch, Routes } from 'react-router-dom';

// Import your
import Login from './Login';
import EmployeeManagement from './EmployeeManagement';
import ProfileSettings from './Profile';
import SystemSettings from './SystemSettings';

// Dashboard component
const Dashboard = () => {
  return (
    <Router>
      <div>
        <h1>Employee Management System Dashboard</h1>

        {/* Navigation Links */}
        <nav>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/employee-management">Employee Management</Link>
            </li>
            <li>
              <Link to="/profile-settings">Profile Settings</Link>
            </li>
            <li>
              <Link to="/system-settings">System Settings</Link>
            </li>
            <li>
              <Link to="/login">Logout</Link>
            </li>
          </ul>
        </nav>

        {/* Define Routes */}
        <Routes>
       
          <Route path="/employee-management" component={EmployeeManagement} />
          <Route path="/profile-settings" component={ProfileSettings} />
          <Route path="/system-settings" component={SystemSettings} />
          <Route path="/login" component={Login} />
          </Routes>
      </div>
    </Router>
  );
}

export default Dashboard;
