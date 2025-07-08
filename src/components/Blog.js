import { useState } from "react";
import data from "../assets/blog.json";

const Blog = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="blog">
      <div className="blog-title">
        <hr />
        <h2>블로그 게시글</h2>
        <hr />
      </div>
      <ul className="slider-wrap">
        {data.map((item,idx) => {
          return (
            <li
              key={item.id}
              className={index === idx ? "active" : ""}
            >
              <img src={item.image} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          );
        })}
      </ul>
      <ul className="indicator-wrap">
        {data.map((_, idx) => {
          return (
            <li
              key={idx}
              className={index === idx ? "active" : ""}
              onClick={() => {
                setIndex(idx);
              }}
            ></li>
          );
        })}
      </ul>
    </div>
  );
};

export default Blog;
