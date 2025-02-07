import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const SingleBook = () => {
  const { _id, bookTitle, imageUrl, authorName, category, bookDescription, bookPDFURL } = useLoaderData();
  const [relatedBooks, setRelatedBooks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/related-books/${_id}`)
      .then((res) => res.json())
      .then((data) => setRelatedBooks(data))
      .catch((error) => console.error("Error fetching related books:", error));
  }, [_id]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = bookPDFURL;
    link.download = `${bookTitle}.pdf`;
    link.click();
  };

  const handleAddToWishlist = () => {
    fetch("http://localhost:5000/add-to-wishlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ bookId: _id }),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Book added to wishlist!");
      })
      .catch((error) => console.error("Error adding to wishlist:", error));
  };

  return (
    <div className="mt-28 lg:px-24 flex justify-center">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <img
          src={imageUrl}
          alt={bookTitle}
          className="h-96 w-full object-cover rounded-t-lg transform hover:scale-105 transition-transform duration-300"
        />
        <h2 className="text-3xl font-bold mt-4">{bookTitle}</h2>
        <p className="text-gray-600 mt-2">By {authorName}</p>
        <p className="text-gray-500 mt-1">Category: {category}</p>
        <p className="text-gray-700 mt-4">{bookDescription}</p>
        <div className="mt-6 flex gap-4">
          <button onClick={handleDownload} className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            Download
          </button>
        </div>
        </div>
      </div>

  );
};

export default SingleBook;
