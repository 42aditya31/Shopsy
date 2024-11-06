// src/components/Blogs/Blogs.jsx
import React from 'react';

const Blogs = () => {
  return (
    <section className="p-8 bg-black text-white">
      <h2 className="text-3xl font-bold mb-4">Our Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Blog posts go here */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Blog Title</h3>
          <p>Blog excerpt...</p>
          <button className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition-colors">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
