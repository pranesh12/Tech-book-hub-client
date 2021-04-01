import React, { useContext, useState } from "react";
import "./HomeCards.css";
import { Link } from "react-router-dom";
import { BookContext } from "../../App.js";

const HomeCards = (props) => {
  const { _id, bookName, AuthorName, price, img } = props.books;
  const { setBook } = useContext(BookContext);

  const handleBook = () => {
    const addBook = {
      id: _id,
      bookName: bookName,
      AuthorName: AuthorName,
      price: price,
      quantity: 1,
    };
    setBook(addBook);
  };
  return (
    <div>
      <div className="mt-3  mx-auto">
        <div
          className="card pt-4  pl-1 pr-1 shadow border-0"
          style={{ width: "12rem" }}
        >
          <img src={img} className="card-img-top" alt={bookName} />
          <div className="card-body">
            <div className="card-text ">
              <p className="line">{bookName}</p>
              <small className="line">{AuthorName}</small>
            </div>
          </div>
          <div className="card-body d-flex justify-content-between  align-items-baseline">
            <div>
              <p className="font-weight-bold text-primary">${price}</p>
            </div>
            <div>
              <Link to="/checkout">
                <button onClick={handleBook} className="btn btn-primary">
                  Order Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCards;
