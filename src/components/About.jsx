import React from 'react';

const AboutSection = () => {
  return (
    <section className="about-section py-16 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">About Our Bookstore</h2>
        <p className="text-lg mb-8 text-gray-600">
          Welcome to <strong>Book Haven</strong>, your one-stop shop for all kinds of books. Whether you're looking for the latest bestsellers, timeless classics, or niche genres, we have something for every reader. Our mission is to provide book lovers with an easy, convenient, and exciting way to discover and buy books.
        </p>
        <div className="flex justify-center gap-8">
          <div className="about-box">
            <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-500">We aim to foster a love for reading and encourage lifelong learning by offering a vast collection of books that cater to different interests and age groups.</p>
          </div>
          <div className="about-box">
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-500">To make books easily accessible and affordable for everyone. We strive to create a community of readers who can share recommendations and explore new worlds through literature.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
