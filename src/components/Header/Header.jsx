import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header-titles">
        <span className="header-title-large">Hello World, Again</span>
        <span className="header-title-small">&lt;Blog /&gt;</span>
      </div>
      <img
        className="header-image"
        src="/public/images/karim-ben-van-mKk2nnZ1EQk-unsplash.jpg"
      />
    </div>
  );
}
