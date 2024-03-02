import { useState, useEffect } from "react";
import img1 from "./sliderImages/slider-1.png";
import img2 from "./sliderImages/slider-2.png";
import img3 from "./sliderImages/slider-3.png";
import img4 from "./sliderImages/slider-4.png";
import img5 from "./sliderImages/slider-5.png";
import img6 from "./sliderImages/slider-6.png";

const constructName = (imagePath) => {
  return imagePath.slice(imagePath.lastIndexOf("/") + 1, -4);
};

const images = [
  {
    index: 1,
    src: img1,
    name: constructName(img1),
  },
  {
    index: 2,
    src: img2,
    name: constructName(img2),
  },
  {
    index: 3,
    src: img3,
    name: constructName(img3),
  },
  {
    index: 4,
    src: img4,
    name: constructName(img4),
  },
  {
    index: 5,
    src: img5,
    name: constructName(img5),
  },
  {
    index: 6,
    src: img6,
    name: constructName(img6),
  },
];

const numberImages = images.length;

function App() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [auto, setAuto] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (activeIndex === numberImages || !auto) return;
      nextSlideHandler();
    }, 4000);
    return () => clearInterval(timer);
  }, [activeIndex, auto]);

  const startAutoHandler = () => {
    setAuto(false);
  };

  const stopAutoHandler = () => {
    setAuto(false);
  };

  const nextSlideHandler = () => {
    setActiveIndex((prevIndex) => prevIndex + 1);
  };

  const prevSlideHandler = () => {
    setActiveIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <div className="slider-container">
      <div
        className="slider"
        onMouseEnter={stopAutoHandler}
        onMouseLeave={startAutoHandler}
      >
        {images.map((img) => {
          return (
            <img
              key={img.index}
              src={img.src}
              alt={img.name}
              className={activeIndex === img.index ? "active" : undefined}
              data-next={img.index}
            />
          );
        })}
      </div>

      <div className="controls">
        {activeIndex !== 1 && (
          <button className="prev" onClick={prevSlideHandler}>
            Prev
          </button>
        )}
        {activeIndex !== numberImages && (
          <button className="next" onClick={nextSlideHandler}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
