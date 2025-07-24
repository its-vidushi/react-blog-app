import { useEffect, useState } from "react";
import Post from "../../components/Post/Post";
import "./allposts.css";

export default function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    fetch("/posts.json")
      .then((response) => response.json())
      .then((data) => setPosts(data.posts));
  }, []);

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const start = (currentPage - 1) * postsPerPage;
  const visiblePosts = posts.slice(start, start + postsPerPage);

  return (
    <div className="all-posts">
      <div className="posts">
        {visiblePosts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            tags={post.tags}
          />
        ))}
      </div>    

       <div className="pagination">
         {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={currentPage === i + 1 ? "active" : ""}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
