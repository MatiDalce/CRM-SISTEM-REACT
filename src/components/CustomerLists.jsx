// src/components/CustomerList.jsx
import React from 'react';
import customersData from '../data/db.json'; // Import customer data

const CustomerList = () => {
  return (
    <div className="customer-list-container">
      <h1>Customer List</h1>
      <ul className="customer-list">
        {customersData.map(customer => (
          <li key={customer.id} className="customer-item">
            <strong>{customer.name}</strong> - {customer.email} - {customer.phone} - {customer.company} - {customer.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;
