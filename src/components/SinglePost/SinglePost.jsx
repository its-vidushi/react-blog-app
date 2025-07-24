import "./singlePost.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch('/posts.json')
    .then(response => response.json())
    .then(data => {
        const foundPost = data.posts.find(p => p.id === Number(id));
        setPost(foundPost);
      })
      .catch(err => console.error('Error loading post:', err));
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="single-post">
      <div className="single-post-container">
        <img
          src="/images/aaron-burden-U53tH5NJG7o-unsplash.jpg"
          alt="Post Banner"
        />
        <h1 className="single-post-title">
          {post.title}
        </h1>
        <div className="single-post-about">
          <span className="single-post-author">
            Author: John Doe
          </span>
          <span className="single-post-read-time">5 min read</span>
        </div>
        <div className="single-post-categories">
          {post.tags.map(tag => (
            <span className="single-post-category" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <p className="single-post-content">
          {post.body}
        </p>
      </div>
    </div>
  );
}
