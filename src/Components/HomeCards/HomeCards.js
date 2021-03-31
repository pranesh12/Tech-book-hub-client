import React from "react";
import "./HomeCards.css";

const HomeCards = (props) => {
  const { bookName, AuthorName, price, img } = props.books;
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
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCards;
