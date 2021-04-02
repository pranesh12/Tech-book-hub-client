import React, { useEffect, useState } from "react";
import HomeCards from "../HomeCards/HomeCards";

const Home = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("https://tech-books-server.herokuapp.com/AllBooks")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);
  return (
    <>
      <div className="container">
        <div className="cards container-sm mt-5 p-3 allCard">
          <div className="row justify-content-center">
            <div className="">
              <div className="rounded card-deck">
                {books.map((book) => (
                  <HomeCards key={book._id} books={book}></HomeCards>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
