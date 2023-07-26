import React from "react";
const NewsItem = (props) => {
  let { title, description, imageUrl, url, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={
            !imageUrl
              ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            {title}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {source}
              <span className="visually-hidden">unread messages</span>
            </span>
          </h5>
          <p className="card-text">{description}</p>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-primary"
          >
            Read more
          </a>
          <p className="card-text">
            By {!author ? "unknown" : author} published on{" "}
            {new Date(date).toGMTString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
