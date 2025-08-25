// src/components/Blog.jsx
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import blogs from "../data/blogs";

export default function Blog() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const postIndex = blogs.findIndex((b) => b.slug === slug);
  const post = blogs[postIndex];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!post) {
    return <main className="blog-container">Article not found.</main>;
  }

  const prevPost = blogs[postIndex - 1];
  const nextPost = blogs[postIndex + 1];

  return (
    <article className="blog-detail">
      {/* Header with X button */}
      <figure className="blog-hero" role="group" aria-label={post.title}>
        <img src={post.cover} alt={post.title} />
        <button
          className="close-btn"
          onClick={() => {
            navigate("/"); // go to homepage
            setTimeout(() => {
              const blogsSection = document.getElementById("blogs");
              if (blogsSection) {
                blogsSection.scrollIntoView({ behavior: "smooth" });
              }
            }, 100); // wait for homepage render
          }}
          aria-label="Close blog"
        >
          ✕
        </button>
      </figure>



      {/* Title */}
      <header className="blog-header">
        <div className="blog-heading">
          <h1 className="blog-title">{post.title}</h1>
          <p className="blog-meta">{post.read}</p>
        </div>
      </header>

      {/* Content */}
      <div className="blog-container">
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>

      {/* Navigation Buttons */}
      <div className="blog-nav">
        {prevPost && (
          <button
            className="nav-btn"
            onClick={() => navigate(`/blog/${prevPost.slug}`)}
          >
            ← Previous
          </button>
        )}
        {nextPost && (
          <button
            className="nav-btn"
            onClick={() => navigate(`/blog/${nextPost.slug}`)}
          >
            Next →
          </button>
        )}
      </div>
    </article>
  );
}
