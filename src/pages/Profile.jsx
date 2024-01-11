import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../style/Profile.css';

const Profile = ({ employee, paymentHistory, onUpdateDetails }) => {
  const [updatedAddress, setUpdatedAddress] = useState('');
  const location = useLocation();

  // Extract userId from URL parameter when the component mounts
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const userId = searchParams.get('userId');
    console.log('User ID from URL:', userId);
  }, [location.search]);

  const handleUpdateDetails = () => {
    // You can implement the logic to update details here
    // For example, you might open a modal or navigate to a form for updating details
    onUpdateDetails(employee.id, updatedAddress);
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

        {/* Display user ID from URL parameter */}
        <p><strong>User ID:</strong> {location.search && new URLSearchParams(location.search).get('userId')}</p>

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
};

const calculateTotal = (payments) => {
  return payments.reduce((total, payment) => total + payment.amount, 0);
};

export default Profile;
