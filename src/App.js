import React from 'react';

import ReactDOM from 'react-dom';
import Dashboard from './pages/Dashboard'; 
import Login from './pages/Login'; 
import {Route,Routes} from 'react-router-dom';
import TRoute from './Route/TRoute';
const App = () => {
  return (
    <div>
      <h1>Your App Title</h1>
      <Dashboard />
     <Login/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
export default App;