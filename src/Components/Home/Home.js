import React, { useEffect, useState } from "react";
import HomeCards from "../HomeCards/HomeCards";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
const Home = () => {
  const [books, setBooks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch("https://tech-books-server.herokuapp.com/AllBooks")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setIsLoaded(true);
      });
  }, []);

  const loaderStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%",
  };
  return (
    <>
      {isLoaded ? (
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
      ) : (
        <Loader
          style={loaderStyle}
          type="TailSpin"
          color="#3a0ca3"
          timeout={0}
          height={50}
          width={50}
        />
      )}
    </>
  );
};

export default Home;
