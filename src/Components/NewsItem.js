import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrL, newsURL, author, date, source } =
      this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={
              !imageUrL
                ? "https://static.toiimg.com/thumb/msid-101684371,width-1070,height-580,imgsize-33266,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
                : imageUrL
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}
              <span
                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                style={{ left: "90" }}
              >
                {source}
                <span class="visually-hidden">unread messages</span>
              </span>
            </h5>
            <p className="card-text">{description}</p>
            <a
              href={newsURL}
              target="_blank"
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
