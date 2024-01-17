import React, { useState, useEffect } from 'react';
import '../style/Profile.css';
import { useParams } from 'react-router-dom';


const Profile = () => {
  const [employee, setEmployee] = useState({});
  const [paymentHistory, setPaymentHistory] = useState([]);
  const { employeeId } = useParams();
  

  useEffect(() => {
    const fetchEmployeeData = async () => {
     
      try {
       
        const response = await fetch(`http://localhost:8080/api/employees/search/eid/${employeeId}`);
        const data = await response.json();
        setEmployee(data);
        
      } catch (error) {
        console.error('Error fetching employee data:', error);
      
      }
    };

    const fetchPaymentHistory = async () => {
      try {
   
        const data = [
          { date: '2022-01-01', description: 'Salary', amount: 5000.00 },
          { date: '2022-02-01', description: 'Bonus', amount: 1000.00 },
          { date: '2022-03-01', description: 'Salary', amount: 5200.00 },
        ];
        setPaymentHistory(data);
      } catch (error) {
        console.error('Error fetching payment history:', error);
     
      }
    };

    fetchEmployeeData();
    fetchPaymentHistory();
  }, [employeeId]);

  return (
    <div className="employee-details-container">
      <div className="employee-info">
        <h1>Employee Information</h1>
        <p><strong>Name:</strong> {employee.name}</p>
        <p><strong>Employee ID:</strong> {employee.employeeId}</p>
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
                <td>Rs {payment.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="total">Total Payment: Rs{calculateTotal(paymentHistory).toFixed(2)}</p>
      </div>
    </div>
  );
};

const calculateTotal = (payments) => {
  return payments.reduce((total, payment) => total + payment.amount, 0);
};

export default Profile;
