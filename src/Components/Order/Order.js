import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../../App";

const Order = () => {
  const { login, setLoin } = useContext(BookContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${login.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrders(data);
      });
  }, [login]);

  return (
    <>
      <div className="container">
        <h2 className="mx-auto">Order Component</h2>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Email</th>
              <th scope="col">Book Name</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          {orders.map((info) => (
            <tbody>
              <tr>
                <td>{info.email}</td>
                <td>{info.bookName}</td>
                <td> ${info.price}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

export default Order;
