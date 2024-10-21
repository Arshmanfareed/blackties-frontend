import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'owl.carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';

const DetailCarSlider = () => {
  const mainSliderRef = useRef(null); // Create a ref for the main slider

  useEffect(() => {
    window.$ = $; // Ensure jQuery is in global scope

    const $mainSlider = $(mainSliderRef.current); // Use the ref to get the slider element
    const $thumbnailSlider = $('.detailCar-slide-controller ul li');

    // Initialize Owl Carousel after a short delay
    setTimeout(() => {
      $mainSlider.owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
          0: { items: 1 },
          600: { items: 1 },
          1000: { items: 1 },
        },
        onChanged: function (event) {
          const currentIndex = event.item.index;
          const items = event.target.querySelectorAll('.owl-item');
          const activeItem = items[currentIndex];
          if (activeItem) {
            $('.detailCar-slide-controller ul li').removeClass('slide-active');
            $('#' + $(activeItem).find('div').data('item')).addClass('slide-active');
          }
        },
      });
    }, 100); // Delay in milliseconds

    // Thumbnail click event
    $thumbnailSlider.on('click', function () {
      const index = $(this).index();
      $mainSlider.trigger('to.owl.carousel', [index]);
    });

    // Cleanup on unmount
    return () => {
      $mainSlider.trigger('destroy.owl.carousel');
      $thumbnailSlider.off('click'); // Clean up event listeners
    };
  }, []);

  return (
    <div className="row">
      <div className="col-lg-12 col-md-12">
        <div className="detailCar-slider owl-carousel owl-theme" ref={mainSliderRef}>
          <div data-item="item1" className="item">
            <img src="./assets/images/slider/image67.png" alt="" />
          </div>
          <div data-item="item2" className="item">
            <img src="./assets/images/slider/image346.png" alt="" />
          </div>
          <div data-item="item3" className="item">
            <img src="./assets/images/slider/image66.png" alt="" />
          </div>
          <div data-item="item4" className="item">
            <img src="./assets/images/slider/image68.png" alt="" />
          </div>
          <div data-item="item5" className="item">
            <img src="./assets/images/slider/image67.png" alt="" />
          </div>
        </div>
      </div>
      <div className="col-lg-12 col-md-12">
        <div className="detailCar-slide-controller">
          <ul>
            <li id="item1" className="slide-active">
              <img src="./assets/images/slider/image67.png" alt="" />
            </li>
            <li id="item2">
              <img src="./assets/images/slider/image65.png" alt="" />
            </li>
            <li id="item3">
              <img src="./assets/images/slider/image66.png" alt="" />
            </li>
            <li id="item4">
              <img src="./assets/images/slider/image68.png" alt="" />
            </li>
            <li id="item5">
              <img src="./assets/images/slider/image67.png" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailCarSlider;
