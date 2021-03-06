import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Admin = () => {
  const { register, handleSubmit } = useForm();
  const [imgUrl, setImgUrl] = useState();
  const [isImageUpdated, setIsImageUpdated] = useState(false);
  const onSubmit = (data) => {
    const formdata = {
      bookName: data.BookName,
      AuthorName: data.AuthorName,
      price: data.price,
      img: imgUrl,
    };

    fetch("https://tech-books-server.herokuapp.com/addBook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    });
    // console.log(formdata);
  };
  const handleImageUpload = (event) => {
    let imageData = new FormData();
    imageData.set("key", "43024b95e9e4b01c0671cc356eb200df");
    imageData.append("image", event.target.files[0]);

    axios.post("https://api.imgbb.com/1/upload", imageData).then((res) => {
      // console.log(res);
      setImgUrl(res.data.data.display_url);
      setIsImageUpdated(true);
    });
  };
  return (
    <>
      <div className="container">
        {!isImageUpdated ? (
          <h3 className="text-danger text-center mt-5 mb-5">
            wait for couple of seconds to upload image
          </h3>
        ) : (
          <h3 className="text-danger text-center mt-5 mb-5">Iamge uploded</h3>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>Book Name</label>
            <input
              className="form-control"
              name="BookName"
              type="text"
              ref={register}
            />
          </div>
          <div className="form-group">
            <label>Author Name</label>
            <input
              className="form-control"
              name="AuthorName"
              type="text"
              ref={register}
            />
          </div>
          <div className="form-group">
            <label> Add Price</label>
            <input
              className="form-control"
              type="number"
              name="price"
              ref={register}
            />
          </div>
          <div className="form-group">
            <label>Add a cover Photo</label>
            <input
              className="form-control border-0"
              onChange={handleImageUpload}
              name="image"
              type="file"
            />
          </div>
          {!isImageUpdated ? (
            <input
              className="btn btn-success"
              type="submit"
              value="Add To Database"
              disabled
            />
          ) : (
            <input
              className="btn btn-success"
              type="submit"
              value="Add To Database"
            />
          )}
        </form>
      </div>
    </>
  );
};

export default Admin;
