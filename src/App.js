import React from 'react';

import ReactDOM from 'react-dom';


import Dashboard from './pages/Dashboard';

import Profile from './pages/Profile';
import EmployeeManagement from './pages/test';

const App = () => {
  return (
    <div>
      <h1>Employee Management System</h1>
   <EmployeeManagement/>
    
    
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
export default App;