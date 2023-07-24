import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsURL, author, date, source } =
      this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
        <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              {title}
              <span
                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                style={{  }}
              >
                {source}
                <span class="visually-hidden">unread messages</span>
              </span>
            </h5>
            <p className="card-text">{description}</p>
            <a
              href={newsURL}
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
  }
}

export default NewsItem;
