import React  from "react";

export default  function NewsItem(props) {

    let { title, description, imageUrl, newsUrl, author, publishedAt, source } =
      props;
    return (
      <div className="my-3">
        <div className="card">
          <span
            className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
            style={{ left: "50%", zindex: "1" }}
          >
            {source}
          </span>
          <img
            src={
              !imageUrl
                ? "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/10/03/999148-first-images-mercury-bepicolombo.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(publishedAt).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}
