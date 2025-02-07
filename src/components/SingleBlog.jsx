import React from 'react';
import { Link, useParams } from 'react-router-dom';

const SingleBlogPost = () => {
  const { id } = useParams();  // Get the post ID from the URL params

  // Sample data (this would normally come from your API based on the `id`)
  const blogPosts = [
    {
      id: 1,
      title: 'The Importance of Reading Fiction',
      content: `
        <p>Fiction allows us to escape into different worlds, and it plays a huge role in shaping our perspectives...</p>
        <p>It broadens our understanding of humanity, helps develop empathy, and enhances our cognitive abilities...</p>
      `,
      date: 'December 20, 2024',
      image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1720200991l/213243955._SY475_.jpg',
    },
    {
      id: 2,
      title: 'Top 10 Bestselling Books of 2024',
      content: `
        <p>Discover the books that have taken the world by storm in 2024...</p>
      `,
      date: 'December 18, 2024',
      image: 'https://th.bing.com/th/id/OIP.6LWqkwsSxCirUqu0HXg-SwHaFJ?w=279&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    },
    {
      id: 3,
      title: 'How to Choose Your Next Book',
      content: `
        <p>Choosing the right book can be a daunting task. We break down some tips on how to choose your next great read...</p>
      `,
      date: 'December 15, 2024',
      image: 'http://ts3.mm.bing.net/th?id=OIP.-UwNMkVM9Js3fM2n0QO30AHaK2&pid=15.1',
    },
  ];

  // Find the post with the matching id
  const blogPost = blogPosts.find(post => post.id.toString() === id);

  if (!blogPost) {
    return <div>Blog post not found!</div>; // If the post is not found, display a message
  }

  return (
    <section className="single-blog-post py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">{blogPost.title}</h2>
          <p className="text-sm text-gray-500 mt-2">{blogPost.date}</p>
        </div>
        <div className="mb-8">
          <img src={blogPost.image} alt={blogPost.title} className="w-96 h-80 object-cover rounded-lg mb-6 flex justify-center" />
          <div className="content" dangerouslySetInnerHTML={{ __html: blogPost.content }}></div>
        </div>
        <Link to="/blog" className="text-blue-500 hover:text-blue-700">
          Back to Blog
        </Link>
      </div>
    </section>
  );
};

export default SingleBlogPost;
