import React, { useState, useEffect } from 'react';
import '../style/EmployeeManagement.css';
import { useHistory } from 'react-router-dom';

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([]);

  const history = useHistory();
  const [newEmployee, setNewEmployee] = useState({
    firstName: '',
    lastName: '',
    position: '',
  });

  // Fetch data from the API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8088/api/employees/all');
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error('Error fetching data from API:', error);
      }
    };

    fetchData();
  }, []); 

  const handleLogout = () => {
    history.push('/');
    window.location.reload();
  };
  

  const handleRemoveEmployee = async (Id) => {
    
    try {
      // Make a DELETE request to the API to remove the employee
      const response = await fetch(`http://localhost:8080/api/employees/delete/${Id}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error(`Failed to remove employee: ${response.statusText}`);
      }
  
      // If the request is successful, update the state to remove the deleted employee
      setEmployees((prevEmployees) => prevEmployees.filter((employee) => employee.id !== Id));
  
    } catch (error) {
      console.error('Error removing employee:', error);
    }
  };
  const handleAddEmployee = async () => {
    try {
      // Generate employee email based on first name and last name
      const employeeEmail = `${newEmployee.firstName.toLowerCase()}.${newEmployee.lastName.toLowerCase()}@gavika.com`;
      const employeeId = `${newEmployee.firstName.charAt(0).toUpperCase()}${newEmployee.lastName.charAt(0).toUpperCase()}`;
      const name = `${newEmployee.firstName.toUpperCase()} ${newEmployee.lastName.toUpperCase()}`;

      const newEmployeeData = {
        employeeId: employeeId,
        name: name,
        position: newEmployee.position,
        email: employeeEmail,
      };
  
   
      const response = await fetch('http://localhost:8088/api/employees/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEmployeeData),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to save employee: ${response.statusText}`);
      }
  
   
      const savedEmployee = await response.json();
  
      setEmployees((prevEmployees) => [
        ...prevEmployees,
        {
          id: savedEmployee.employeeId, 
          name: savedEmployee.name,
          position: savedEmployee.position,
          email: savedEmployee.email,
        },
      ]);
  
      // Clear the form fields
      setNewEmployee({
        firstName: '',
        lastName: '',
        position: '',
      });
  
    } catch (error) {
      console.error('Error saving employee:', error);
    }
  };
  

  return (
    <div className="container">
      <h1>Employee Management Dashboard</h1>

      <div className="employee-list-container">
        <div className="employee-list">
          <h2>Employee List</h2>
          <table>
            <thead>
              <tr>
                <th>EmployeeID</th>
                <th>Full Name</th>
                <th>Position</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.employeeId}</td>
                  <td>{employee.name}</td>
                  <td>{employee.position}</td>
                  <td>{employee.email}</td>
                  <td>
                    
                      <button onClick={() => handleRemoveEmployee(employee.id)}>
                        Remove
                      </button>
                   
                </td>
                </tr>
              ))}
            </tbody>
          </table>
          
        </div>

        <div className="add-employee">
        <button type="button" onClick={handleLogout}>
              Logout
            </button>
          <h2>Add Employee</h2>
          <form>
            <label htmlFor="employeeFirstName">First Name:</label>
            <input
              type="text"
              id="employeeFirstName"
              name="employeeFirstName"
              value={newEmployee.firstName}
              onChange={(e) => setNewEmployee({ ...newEmployee, firstName: e.target.value })}
              required
            />

            <label htmlFor="employeeLastName">Last Name:</label>
            <input
              type="text"
              id="employeeLastName"
              name="employeeLastName"
              value={newEmployee.lastName}
              onChange={(e) => setNewEmployee({ ...newEmployee, lastName: e.target.value })}
              required
            />

            <label htmlFor="employeePosition">Position:</label>
            <input
              type="text"
              id="employeePosition"
              name="employeePosition"
              value={newEmployee.position}
              onChange={(e) => setNewEmployee({ ...newEmployee, position: e.target.value })}
              required
            />

            <button type="button" onClick={handleAddEmployee}>
              Add Employee
            </button>
          </form>
       
        </div>
        
      </div>
    </div>
  );
};

export default EmployeeManagement;
