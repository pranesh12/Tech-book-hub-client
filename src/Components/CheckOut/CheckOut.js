import React, { useContext } from "react";
import { BookContext } from "../../App";
import moment from "moment";
const CheckOut = () => {
  const { book } = useContext(BookContext);
  const { login } = useContext(BookContext);

  const handleCheckout = () => {
    const date = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    const orders = {
      email: login.email,
      bookName: book.bookName,
      date: date,
      price: book.price,
      quantity: book.quantity,
    };
    // setCheckOut(orders);
    fetch(`http://localhost:5000/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orders),
    });
  };
  return (
    <>
      <div className="container">
        <h1>Check Out</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Description</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{book.bookName}</td>
              <td>{book.quantity}</td>
              <td> ${book.price}</td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td>Total : ${book.price}</td>
            </tr>
          </tbody>
        </table>
        <button
          className="float-right btn btn-primary"
          onClick={handleCheckout}
        >
          CheckOut
        </button>
      </div>
    </>
  );
};

export default CheckOut;
