// src/components/Blog.jsx
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import blogs from "../data/blogs";

export default function Blog() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const post = blogs.find((b) => b.slug === slug);

  // შესვლისას გადააქვს გვერდის დასაწყისში
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!post) {
    return <main className="blog-container">Article not found.</main>;
  }

  return (
    <article className="blog-detail">
      {/* ქავერი — მხოლოდ სურათი */}
      <figure className="blog-hero" role="group" aria-label={post.title}>
        <img src={post.cover} alt={post.title} />
      </figure>

      {/* სათაური ცენტრში + Back მარცხნივ */}
      <header className="blog-header">


        <div className="blog-heading">
          <h1 className="blog-title">{post.title}</h1>
          <p className="blog-meta">{post.read}</p>
        </div>
      </header>

      {/* შიგთავსი */}
      <div className="blog-container">
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
}
