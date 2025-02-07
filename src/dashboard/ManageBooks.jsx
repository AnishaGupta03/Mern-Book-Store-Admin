import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    // Fetching all books from the backend API
    fetch("http://localhost:5000/all-books")
      .then(res => res.json())
      .then(data => setAllBooks(data));
  }, []);

  // Function to handle delete
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/book/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(data => {
        alert("Book is deleted successfully!");
        // Optionally refresh the book list after deletion
        setAllBooks(allBooks.filter(book => book._id !== id));
      });
  };

  return (
    <div className="px-4 my-12 w-full">
      <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">Manage Your Books</h2>

      {/* Table Container */}
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full w-full table-auto bg-white">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="px-6 py-3 text-left text-sm font-semibold">No.</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Book Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Author Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Category</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Price</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {allBooks.map((book, index) => (
              <tr
                key={book._id}
                className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-100`}
              >
                <td className="px-6 py-4 text-sm text-gray-700">{index + 1}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{book.bookTitle}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{book.authorName}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{book.category}</td>
                <td className="px-6 py-4 text-sm text-gray-700">$10.00</td>
                <td className="px-6 py-4 text-sm">
                  <Link
                    className="text-blue-600 hover:underline mr-5"
                    to={`/admin/dashboard/edit-books/${book._id}`}
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(book._id)}
                    className="bg-red-600 px-4 py-2 font-semibold text-white rounded-sm hover:bg-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBooks;




