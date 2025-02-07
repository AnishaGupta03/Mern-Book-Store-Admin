import React, { useEffect, useState } from "react";
import BookCards from "../components/BookCards";

const BestSellerBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch books");
        }
        return res.json();
      })
      .then((data) => setBooks(data.slice(0,8)))
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, []);

  return <BookCards books={books} headline="Best Seller Books" />;
};

export default BestSellerBooks;
