import React from 'react';

import ReactDOM from 'react-dom';


import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import EmployeeManagement from './pages/EmployeeManagement';

const App = () => {
  return (
    <div>
      <h1>Employee Management System</h1>
   <Profile/>
    
    
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
export default App;