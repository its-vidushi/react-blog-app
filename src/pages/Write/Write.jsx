import './write.css';

export default function Write() {
    return (
        <div className="write">
            <img className='write-img'
                src="/public/images/kristaps-ungurs-x7GWaDn1k9k-unsplash.jpg"
            />
            <form className="write-form">
                <div className="write-form-container">
                    <label htmlFor="file-input">
                        <i className="write-icon fas fa-plus"></i>
                    </label>
                    <input type="file" id="file-input"  style={{ display: "none" }} />
                    <input type="text" placeholder="Title" className="write-input" autoFocus={true} />
                </div>
                <div className="write-form-container">
                    <textarea placeholder="What's on my mind..." type="text" className="write-input write-text"></textarea>
                </div>
                <button className="write-submit">Publish</button>
            </form>
            
        </div>
    )
}