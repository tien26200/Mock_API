import React, { useState, useEffect } from "react";
//useSate cho phép sử dụng state trong functional components
//useEffect dùng để quản lý vòng đời của 1 component
export default function ListProduct() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const url = "https://62208c49afd560ea69951314.mockapi.io/api/reactJS";
    //Đây là đường dẫn tới móc API
    fetch(url) //Tìm về đường dẫn này
      .then((resp) => resp.json())
      .then((resp) => setPosts(resp));
  }, []);

  return (
    <div>
      {posts.map((reactJS) => (
        <div className="card" style={{ width: "18rem", display: "inline-block" }} key={reactJS.id}>
          <img url={reactJS.linkImage}></img>
          <p>{reactJS.id}</p>
          <div className="card-body">
            <p className="card-text">{reactJS.name} </p>
            <p className="card-text">{reactJS.price} </p>
          </div>
          <div className="card-desc">
            <p className="card-text"> {reactJS.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
