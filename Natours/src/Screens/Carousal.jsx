import React, { useEffect, useState } from "react";
import "./CssFiles/Carousal.css";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    // Desert rock formation + sky
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1274&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1719943510748-4b4354fbcf56?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const newIndex = prev < images.length - 1 ? prev + 1 : 0;
        return newIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleLeftArrow = () => {

    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const handleRightArrow = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="carousel">
        <div className="carousel-text">
          <h1>Explore the World</h1>
          <p>Book unique tours and experiences with local experts.</p>
        </div>
        <div className="box">
          <div className="arrow left" onClick={handleLeftArrow}>
            &#10094;
          </div>
          {images.map((item, index) => {
            return (
              <div key={index}>
                <img
                  src={item}
                  className={`slide ${
                    currentIndex === index ? "active show" : "hide"
                  } `}
                  alt={`slide-${index}`}
                />
              </div>
            );
          })}
          <div className="arrow right" onClick={handleRightArrow}>
            &#10095;
          </div>
          <div className="dot_container">
            {images.map((_, index) => (
              <div
                key={index}
                className={`dot_circle ${
                  index === currentIndex ? "active" : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      {/* <div style={{ color: "red" }}>Welcome to Home page</div> */}
    </>
  );
}

export default Home;
