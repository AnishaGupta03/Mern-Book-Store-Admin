import React, {useState,useEffect} from 'react'
import BookCards from "../components/BookCards";


const OtherBooks = ()=>{

const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch books");
        }
        return res.json();
      })
      .then((data) => setBooks(data.slice(3,9)))
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, []);

  return <BookCards books={books} headline="Other Books" />;
};

export default OtherBooks