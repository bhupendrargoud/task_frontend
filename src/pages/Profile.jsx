import React, { useState } from 'react';
import '../style/Profile.css';

const Profile = ({ employee, paymentHistory, onUpdateDetails }) => {
  const [updatedAddress, setUpdatedAddress] = useState('');

  const handleUpdateDetails = () => {
    // You can implement the logic to update details here
    // For example, you might open a modal or navigate to a form for updating details
    onUpdateDetails(updatedAddress);
  };

  return (
    <div className="employee-details-container">
      <div className="employee-info">
        <h1>Employee Information</h1>
        <p><strong>Name:</strong> {employee.fullName}</p>
        <p><strong>Employee ID:</strong> {employee.id}</p>
        <p><strong>Position:</strong> {employee.position}</p>
        <p><strong>Email:</strong> {employee.email}</p>
        <p><strong>Address:</strong> {employee.address}</p>
       
        <button onClick={handleUpdateDetails}>Update Details</button>
      </div>

      <div className="payment-history">
        <h2>Payment History</h2>
        <table>
          <thead>
            <tr>
              <th>Payment Date</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {paymentHistory.map((payment, index) => (
              <tr key={index}>
                <td>{payment.date}</td>
                <td>{payment.description}</td>
                <td>${payment.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="total">Total Payment: ${calculateTotal(paymentHistory).toFixed(2)}</p>
      </div>
    </div>
  );
}

const calculateTotal = (payments) => {
  return payments.reduce((total, payment) => total + payment.amount, 0);
}

const App = () => {
  const [employees, setEmployees] = useState([
    {
      id: 'JD-1',
      fullName: 'John Doe',
      position: 'Software Engineer',
      email: 'john.doe@example.com',
      address: '123 Main St, City, Country', // Added Address
    },
  ]);

  const handleUpdateDetails = (employeeId, updatedAddress) => {
    // You can implement the logic to update the employee details
    // For example, update the state or make an API call to update the data
    const updatedEmployees = employees.map(emp =>
      emp.id === employeeId ? { ...emp, address: updatedAddress } : emp
    );
    setEmployees(updatedEmployees);
  };

  return (
    <div>
      {employees.map(employee => (
        <Profile
          key={employee.id}
          employee={employee}
          paymentHistory={[
            { date: '2022-01-01', description: 'Salary', amount: 5000.00 },
            { date: '2022-02-01', description: 'Bonus', amount: 1000.00 },
            { date: '2022-03-01', description: 'Salary', amount: 5200.00 },
            // Add payment history data for the selected employee as needed
          ]}
          onUpdateDetails={(updatedAddress) => handleUpdateDetails(employee.id, updatedAddress)}
        />
      ))}
    </div>
  );
}

export default App;
