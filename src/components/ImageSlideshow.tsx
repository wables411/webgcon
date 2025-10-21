import React, { useState, useEffect } from 'react';
import './ImageSlideshow.css';

interface ImageSlideshowProps {
  images: string[];
  interval?: number;
  autoPlay?: boolean;
}

const ImageSlideshow: React.FC<ImageSlideshowProps> = ({ 
  images, 
  interval = 5000, 
  autoPlay = true 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);

  // Shuffle images on component mount
  useEffect(() => {
    const shuffled = [...images].sort(() => Math.random() - 0.5);
    setShuffledImages(shuffled);
  }, [images]);

  useEffect(() => {
    if (!autoPlay || shuffledImages.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === shuffledImages.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [shuffledImages.length, interval, autoPlay]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? shuffledImages.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === shuffledImages.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="slideshow-container">
      <div className="slideshow-wrapper">
        {shuffledImages.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          >
            <img
              src={image}
              alt={`Construction project ${index + 1}`}
              className="slide-image"
              onError={(e) => {
                console.error(`Failed to load image: ${image}`);
                e.currentTarget.src = '/webgwork/con1.png'; // Fallback to first image
              }}
            />
            <div className="slide-logo-overlay">
              <img 
                src="/webglogo.png" 
                alt="Web G Construction Logo" 
                className="slide-logo"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button className="slideshow-nav prev" onClick={goToPrevious}>
        <span>‹</span>
      </button>
      <button className="slideshow-nav next" onClick={goToNext}>
        <span>›</span>
      </button>

      {/* Dots Indicator */}
      <div className="slideshow-dots">
        {shuffledImages.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlideshow;
