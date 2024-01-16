import React, { useState, useEffect } from 'react';
import '../style/Profile.css';

const Profile = ({ employeeId }) => {
  const [employee, setEmployee] = useState({});
  const [paymentHistory, setPaymentHistory] = useState([]);

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        // Assuming an API endpoint for fetching employee data by ID
        const response = await fetch(`http://localhost:8080/api/employees/search/eid/${employeeId}`);
        const data = await response.json();
        setEmployee(data);
      } catch (error) {
        console.error('Error fetching employee data:', error);
        // You might set an error state for user feedback
      }
    };

    const fetchPaymentHistory = async () => {
      try {
        // You can include logic to fetch payment history based on employeeId if needed
        // For now, using dummy data
        const data = [
          { date: '2022-01-01', description: 'Salary', amount: 5000.00 },
          { date: '2022-02-01', description: 'Bonus', amount: 1000.00 },
          { date: '2022-03-01', description: 'Salary', amount: 5200.00 },
        ];
        setPaymentHistory(data);
      } catch (error) {
        console.error('Error fetching payment history:', error);
        // You might set an error state for user feedback
      }
    };

    fetchEmployeeData();
    fetchPaymentHistory();
  }, [employeeId]);

  return (
    <div className="employee-details-container">
      <div className="employee-info">
        <h1>Employee Information</h1>
        <p><strong>Name:</strong> {employee.fullName}</p>
        <p><strong>Employee ID:</strong> {employee.id}</p>
        <p><strong>Position:</strong> {employee.position}</p>
        <p><strong>Email:</strong> {employee.email}</p>
        <p><strong>Address:</strong> {employee.address}</p>
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
};

const calculateTotal = (payments) => {
  return payments.reduce((total, payment) => total + payment.amount, 0);
};

export default Profile;
