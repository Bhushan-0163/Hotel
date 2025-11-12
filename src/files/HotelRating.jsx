import React, { useState } from 'react';
import './HotelRating.css';

const HotelRating = () => {
  const [likeCount, setLikeCount] = useState(120);
  const [dislikeCount, setDislikeCount] = useState(20);

  const handleLike = () => setLikeCount(likeCount + 1);
  const handleDislike = () => setDislikeCount(dislikeCount + 1);

  return (
    <div className="rating-container">
      <h2>Hotel Rating</h2>
      <div className="rating-stars">
        <span className="star filled">★</span>
        <span className="star filled">★</span>
        <span className="star filled">★</span>
        <span className="star half">☆</span>
        <span className="star">☆</span>
        <p className="rating-score">4.5 / 5.0</p>
      </div>
      <div className="feedback-buttons">
        <button className="like-btn" onClick={handleLike}>
          👍 Like <span className="like-count">{likeCount}</span>
        </button>
        <button className="dislike-btn" onClick={handleDislike}>
          👎 Dislike <span className="dislike-count">{dislikeCount}</span>
        </button>
      </div>
    </div>
  );
};

export default HotelRating;
