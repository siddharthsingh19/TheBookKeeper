import React, { useState } from "react";
import Popup from "./Popup";

const Book = ({ data }) => {
    const [showpop, setShowpop] = useState(false);
    const [bookitem, setBookitem] = useState();
    return (
        <>
            {data.map((item) => {
                let thumbnail =
                    item.volumeInfo.imageLinks &&
                    item.volumeInfo.imageLinks.smallThumbnail;

                let amount =
                    item.saleInfo.listPrice && item.saleInfo.listPrice.amount;

                if (thumbnail != undefined && amount != undefined) {
                    return (
                        <div key={item.id}>
                            <div
                                className="book"
                                onClick={() => {
                                    setShowpop(true), setBookitem(item);
                                }}
                            >
                                <img
                                    src={thumbnail}
                                    className="bookcover"
                                    alt="book cover"
                                />
                                <div className="details">
                                    <p className="title">
                                        {item.volumeInfo.title.length > 40
                                            ? item.volumeInfo.title.slice(
                                                  0,
                                                  40
                                              ) + "..."
                                            : item.volumeInfo.title}
                                    </p>
                                    <p className="amount">&#8377;{amount}</p>
                                </div>
                            </div>
                            <Popup
                                showpop={showpop}
                                bookitem={bookitem}
                                key={item.id+2}
                                onClose={() => setShowpop(false)}
                            />
                        </div>
                    );
                }
            })}
        </>
    );
};

export default Book;
