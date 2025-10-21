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
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="slide-overlay">
              <div className="slide-content">
                <h2 className="slide-title">WEB G CONSTRUCTION</h2>
                <p className="slide-description">
                  of <a 
                    href="https://webgstrategies.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="slide-link"
                  >
                    Web G Strategies
                  </a>
                </p>
              </div>
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
