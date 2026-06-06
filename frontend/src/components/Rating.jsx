import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { useState } from 'react';

// const containerStyle = {

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  flexDirection: 'row',
};

const starContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.25rem',
  flexDirection: 'row',
};

function Rating({ value, text, className, size = 20, color = '#f8e825', MaxRating = 5 }) {
  const [tempRating, setTempRating] = useState(value);

  const handleStarClick = (starValue) => {
    setTempRating(starValue);
  };

  const handleStarHover = (isHovered, starValue) => {
    setTempRating(isHovered ? starValue : value);
  };




  return (
    <div style={containerStyle} className={className}>
      <div style={starContainerStyle}>
        {Array.from({ length: MaxRating }).map((_, index) => {
          const starValue = index + 1;
          return (
            <Star key={index}
              onClick={() => handleStarClick(starValue)}
              filled={starValue <= tempRating}
              onhover={(isHovered) => handleStarHover(isHovered, starValue)}
              color={color}
              size={size}
            />
          );
        })}
      </div>
      <span className="rating-text">{text && text}</span>
    </div>
  );
}


function Star({ onClick, filled, onhover, color, size }) {
  return (
    <span onClick={onClick} onMouseEnter={onhover} onMouseLeave={onhover} style={{ cursor: 'pointer' }}>
      {filled ? <FaStar color={color} size={size} /> : <FaRegStar color={color} size={size} />}
    </span>
  );
}

export default Rating;
