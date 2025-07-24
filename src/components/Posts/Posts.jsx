import { useEffect, useState } from "react";
import "./posts.css";
import Post from "../Post/Post";

export default function Posts({ limit }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/posts.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedPosts = limit ? data.posts.slice(0, limit) : data.posts;
        setPosts(selectedPosts);
      });
  }, [limit]);

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
          tags={post.tags}
        />
      ))}
    </div>
  );
}