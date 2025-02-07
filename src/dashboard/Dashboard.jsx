import React from 'react';

const BookInventoryDashboard = () => {
  // Sample Data for Demo
  const recentBooks = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      category: "Fiction",
      stock: 10,
      addedOn: "Dec 25, 2024",
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      category: "Self-Help",
      stock: 15,
      addedOn: "Dec 20, 2024",
    },
    {
      id: 3,
      title: "Educated",
      author: "Tara Westover",
      category: "Memoir",
      stock: 5,
      addedOn: "Dec 18, 2024",
    },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Dashboard Title */}
      <h1 className="text-4xl font-bold mb-8">Demo Book Inventory Dashboard</h1>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Books</h3>
          <p className="text-4xl font-bold text-blue-600">320</p>
          <p className="text-sm text-gray-500">Books in inventory</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Categories</h3>
          <p className="text-4xl font-bold text-blue-600">15</p>
          <p className="text-sm text-gray-500">Different book categories</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Out of Stock</h3>
          <p className="text-4xl font-bold text-red-600">8</p>
          <p className="text-sm text-gray-500">Books needing restock</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">New Arrivals</h3>
          <p className="text-4xl font-bold text-green-600">12</p>
          <p className="text-sm text-gray-500">Books added this month</p>
        </div>
      </div>

      {/* Recent Books Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-12">
        <h3 className="text-xl font-semibold text-gray-700 mb-6">Recent Additions</h3>
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border border-gray-200 p-3 text-left text-gray-600">Title</th>
              <th className="border border-gray-200 p-3 text-left text-gray-600">Author</th>
              <th className="border border-gray-200 p-3 text-left text-gray-600">Category</th>
              <th className="border border-gray-200 p-3 text-left text-gray-600">Stock</th>
              <th className="border border-gray-200 p-3 text-left text-gray-600">Added On</th>
            </tr>
          </thead>
          <tbody>
            {recentBooks.map((book) => (
              <tr key={book.id} className="hover:bg-gray-100">
                <td className="border border-gray-200 p-3">{book.title}</td>
                <td className="border border-gray-200 p-3">{book.author}</td>
                <td className="border border-gray-200 p-3">{book.category}</td>
                <td className="border border-gray-200 p-3">{book.stock}</td>
                <td className="border border-gray-200 p-3">{book.addedOn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Action Buttons Section */}
      <div className="flex gap-4">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
          Add New Book
        </button>
        <button className="px-6 py-3 bg-red-600 text-white rounded-lg shadow hover:bg-red-700">
          View Out of Stock
        </button>
        <button className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700">
          Generate Inventory Report
        </button>
      </div>
    </div>
  );
};

export default BookInventoryDashboard;
