import React from "react";
import { IoClose } from "react-icons/io5";
const Popup = ({ showpop, bookitem, onClose }) => {
  if (!showpop) {
    return null;
  }
  let thumbnail =
    bookitem.volumeInfo.imageLinks &&
    bookitem.volumeInfo.imageLinks.smallThumbnail;

  return (
    <div className="overlay">
      <div className="overlay--inner">
        <button className="close" onClick={onClose}>
          <IoClose />
        </button>
        <div className="inner--box">
          <img src={thumbnail} alt="" />
          <div className="info">
            <h1>{bookitem.volumeInfo.title}</h1>
            <h3>{bookitem.volumeInfo.authors}</h3>
            <h4>
              {bookitem.volumeInfo.publisher}
              <span>{bookitem.volumeInfo.publishedDate}</span>{" "}
            </h4>
            <a href={bookitem.volumeInfo.previewLink}>
              <button>more</button>
            </a>
          </div>
        </div>
        <h4 className="desc">{bookitem.volumeInfo.description}</h4>
      </div>
    </div>
  );
};

export default Popup;
