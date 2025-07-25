import { useState } from "react";
import "./write.css";

export default function Write() {
  const[file, setFile] = useState(null);

  return (
    <div className="write">
      <form className="write-form">
        {file && (
          <img
            className="write-img"
            src={URL.createObjectURL(file)}
            alt="Preview"
          />
        )}

        <div className="write-form-container">
          <label htmlFor="file-input">
            <i className="write-icon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="file-input"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="write-input"
            autoFocus={true}
          />
        </div>
        <div className="write-form-container">
          <textarea
            placeholder="What's on my mind..."
            type="text"
            className="write-input write-text"
          ></textarea>
        </div>
        <button className="write-submit">Publish</button>
      </form>
    </div>
  );
}
