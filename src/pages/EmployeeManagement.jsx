
// EmployeeManagement

import React, { useState } from 'react';
import '../style/EmployeeManagement.css'
const EmployeeManagement = () => {
  // Mock data for employee list
  const [employees, setEmployees] = useState([
    { id: 'JD-1', fullName: 'John Doe', position: 'Software Engineer', email: 'john.doe@example.com' },
    { id: 'JS-2', fullName: 'Jane Smith', position: 'Product Manager', email: 'jane.smith@example.com' },
    // Add more employees as needed
  ]);

  const [newEmployee, setNewEmployee] = useState({
    firstName: '',
    lastName: '',
    position: '',
  });

  const handleRemoveEmployee = (employeeId) => {
    // Remove the employee with the given ID from the list
    const updatedEmployees = employees.filter((employee) => employee.id !== employeeId);
    setEmployees(updatedEmployees);
  };

  const handleAddEmployee = () => {
    // Generate employee ID and email based on first name, last name, and count
    const count = employees.length + 1;
    const employeeId = `${newEmployee.firstName.charAt(0).toUpperCase()}${newEmployee.lastName.charAt(0).toUpperCase()}-${count}`;
    const employeeEmail = `${newEmployee.firstName.toLowerCase()}.${newEmployee.lastName.toLowerCase()}@example.com`;

    // Add the new employee to the list
    setEmployees((prevEmployees) => [
      ...prevEmployees,
      {
        id: employeeId,
        fullName: `${newEmployee.firstName} ${newEmployee.lastName}`,
        position: newEmployee.position,
        email: employeeEmail,
      },
    ]);

    // Clear the form fields
    setNewEmployee({
      firstName: '',
      lastName: '',
      position: '',
    });
  };

  return (
    <div className="container">
      <h1>Employee Management Dash bord</h1>

      <div className="employee-list-container">
        <div className="employee-list">
          <h2>Employee List</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Full Name</th>
                <th>Position</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.fullName}</td>
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
