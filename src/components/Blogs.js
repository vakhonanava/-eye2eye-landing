import React from "react";
import { Link } from "react-router-dom";
import blogs from "../data/blogs";

export default function Blogs() {
  return (
    <section id="blogs" className="blogs">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">
            Latest <span className="accent">Blog</span> Posts
          </h2>

         
          <a href="#blogs" className="view-all">
            VIEW ALL
          </a>
        </div>

        <div className="blog-grid">
          {blogs.map((p) => (
            <article key={p.slug} className="blog-card">
              <Link
                to={`/blog/${p.slug}`}
                className="blog-cover-link"
                aria-label={p.title}
              >
                <img className="blog-cover" src={p.cover} alt={p.title} />
              </Link>

              <header className="blog-header">
                <h3 className="blog-title">{p.title}</h3>
                <span className="blog-meta">{p.read}</span>
              </header>

              <p className="blog-excerpt">{p.excerpt}</p>

              <div className="blog-actions">
                <Link to={`/blog/${p.slug}`} className="blog-readmore">
                  Read article →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <p className="blog-disclaimer">Education only — not medical advice.</p>
      </div>
    </section>
  );
}
