import React from 'react';

function BlogDetails({ blogs }) {
  // Conditional Rendering: Ternary Operator
  return (
    <div className="column">
      <h1>Blog Details</h1>
      {blogs.length ? (
        blogs.map((blog) => (
          <div key={blog.id}>
            <h2>{blog.title}</h2>
            <strong>{blog.author}</strong>
            <p>{blog.content}</p>
          </div>
        ))
      ) : (
        <p>No blogs found.</p>
      )}
    </div>
  );
}

export default BlogDetails;
