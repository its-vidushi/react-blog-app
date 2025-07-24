import "./home.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Posts from "../../components/Posts/Posts";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts limit={6} />
        <Link to="/all-posts">
          <button className="more-button">More Posts &rarr;</button>
        </Link>
        <Sidebar />
      </div>
    </>
  );
}
