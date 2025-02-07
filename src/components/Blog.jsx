import React from 'react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Importance of Reading Fiction',
      excerpt: 'Fiction allows us to escape into different worlds, and it plays a huge role in shaping our perspectives. Here\'s why fiction is essential...',
      date: 'December 20, 2024',
      image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1732223678i/219833252.jpg',
    },
    {
      id: 2,
      title: 'Top 10 Bestselling Books of 2024',
      excerpt: 'Discover the books that have taken the world by storm in 2024. From thrillers to self-help, these are the top sellers...',
      date: 'December 18, 2024',
      image: 'https://th.bing.com/th/id/OIP.6LWqkwsSxCirUqu0HXg-SwHaFJ?w=279&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    },
    {
      id: 3,
      title: 'How to Choose Your Next Book',
      excerpt: 'Choosing the right book can be a daunting task. We break down some tips on how to choose your next great read...',
      date: 'December 15, 2024',
      image: 'http://ts3.mm.bing.net/th?id=OIP.-UwNMkVM9Js3fM2n0QO30AHaK2&pid=15.1',
    },
  ];

  return (
    <section className="blog-page py-16 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Our Blog</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-post bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <p className="text-sm text-gray-500 mb-6">{post.date}</p>
                <Link to={`/blog/${post.id}`} className="text-blue-500 hover:text-blue-700">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
