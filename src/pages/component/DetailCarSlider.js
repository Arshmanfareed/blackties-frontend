import React, { useRef, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function DetailCarSlider() {
  const mainSliderRef = useRef(null);

  const items = [
    { id: 'item1', img: './assets/images/slider/image 67.png' },
    { id: 'item2', img: './assets/images/slider/image346.png' },
    { id: 'item3', img: './assets/images/slider/image 66.png' },
    { id: 'item4', img: './assets/images/slider/image 68.png' },
    { id: 'item5', img: './assets/images/slider/image 67.png' },
  ];

  useEffect(() => {
    // Add 'slide-active' class to the first thumbnail initially
    const firstThumbnail = document.querySelector('.detailCar-slide-controller ul li');
    if (firstThumbnail) {
      firstThumbnail.classList.add('slide-active');
    }
  }, []);

//   const handleThumbnailClick = (index) => {
//     // Add a delay to ensure the OwlCarousel is fully initialized
//     setTimeout(() => {
//       if (mainSliderRef.current) {
//         mainSliderRef.current.to(index); // Make sure 'to' function is used properly with the correct index
//       }

//       // Update active class on thumbnails
//       const thumbnails = document.querySelectorAll('.detailCar-slide-controller ul li');
//       thumbnails.forEach((thumbnail) => thumbnail.classList.remove('slide-active'));
//       thumbnails[index].classList.add('slide-active');
//     }, 100); // 100ms delay to ensure initialization
//   };

  const handleTranslate = (event) => {
    if (event && event.item) {
      const currentIndex = event.item.index - event.relatedTarget.clones().length / 2;
      const realIndex = (currentIndex + items.length) % items.length;

      // Update active class on thumbnails
      const allThumbnails = document.querySelectorAll('.detailCar-slide-controller ul li');
      allThumbnails.forEach((thumbnail) => thumbnail.classList.remove('slide-active'));
      if (allThumbnails[realIndex]) {
        allThumbnails[realIndex].classList.add('slide-active');
      }
    }
  };

  return (
    <div className="row">
      {/* Main Slider */}
      <div className="col-lg-9 col-md-9">
        <OwlCarousel
          className="detailCar-slider owl-carousel owl-theme"
          ref={mainSliderRef}
          loop
          margin={10}
          nav
          autoplay
          autoplayTimeout={5000}
          autoplayHoverPause
          responsive={{
            0: {
              items: 1,
            },
            600: {
              items: 1,
            },
            1000: {
              items: 1,
            },
          }}
          onInitialized={() => console.log('Carousel initialized')}
          onTranslate={handleTranslate}
        >
          {items.map((item) => (
            <div key={item.id} className="item">
              <img src={item.img} alt={item.id} />
            </div>
          ))}
        </OwlCarousel>
      </div>

      {/* Thumbnail Controller */}
      <div className="col-lg-3 col-md-3">
        <div className="detailCar-slide-controller">
          <ul>
            {items.map((item, index) => (
              <li
                key={item.id}
                id={item.id}
                // onClick={() => handleThumbnailClick(index)}
                className={index === 0 ? 'slide-active' : ''}
              >
                <img src={item.img} alt={item.id} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DetailCarSlider;
