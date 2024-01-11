import React from 'react';

import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Profile from './pages/test'
import EmployeeManagement from './pages/EmployeeManagement'


const App = () => {
  return (
    <Router>
    <div>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/profile/:userId" component={Profile} />
        <Route path="/employeem" component={EmployeeManagement} />
      </Switch>
    </div>
  </Router>

  );
};

ReactDOM.render(<App />, document.getElementById('root'));
export default App;