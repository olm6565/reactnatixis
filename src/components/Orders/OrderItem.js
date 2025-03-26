import React from 'react';

const OrderItem = ({ order }) => {
  return (
    <div>
      <h3>Order ID: {order.id}</h3>
      <p>Date: {order.date}</p>
      <p>Status: {order.status}</p>
      <p>Total: ${order.total}</p>
    </div>
  );
};

export default OrderItem;
