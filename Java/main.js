


/* ========== HOMEPAGE ========== */
document.addEventListener('DOMContentLoaded', () => {

  // GALLERY SCROLLING 
  const galleryScroll = document.querySelector('.gallery-scroll');
  const leftArrow = document.querySelector('.gallery-arrow.left');
  const rightArrow = document.querySelector('.gallery-arrow.right');


// when clicking left/right arrows, scroll a bit to left and right
  if (leftArrow) {
    leftArrow.addEventListener('click', () => {
      galleryScroll.scrollBy({ left: -300, behavior: 'smooth' });
    });
  }

  if (rightArrow) {
    rightArrow.addEventListener('click', () => {
      galleryScroll.scrollBy({ left: 300, behavior: 'smooth' });
  
  });
 }
    

  // TESTIMONIALS CHANGING
  // testimonials data(text & images)
  const testimonials = [
    {
      text: "“The quality is unmatched. Our new dining table has become the heart of our home.”",
      image: "images/testimonial1.jpg"
    },
    {
      text: "“The natural timber is stunning, and you can feel how solid and well-made the pieces are.”",
      image: "images/testimonial2.jpg"
    }
  ];

  // start at the first testimonial
  let current = 0;

  // Get the elements we want to update
  const quote = document.querySelector('.testimonial-quote h5');
  const image = document.querySelector('.testimonial-image img');

  const testleftArrow = document.querySelector('.testimonial-arrow.left');
  const testrightArrow = document.querySelector('.testimonial-arrow.right');

  // Function to show a testimonial
  function showTestimonial(index) {
    quote.textContent = testimonials[index].text;
    image.src = testimonials[index].image;
  }

  if (testleftArrow && testrightArrow) {
    // Left arrow click change testimonial
    testleftArrow.addEventListener('click', () => {
      current = (current - 1 + testimonials.length) % testimonials.length;
      showTestimonial(current);
    });
  
    // Right arrow click change testimonial
    testrightArrow.addEventListener('click', () => {
      current = (current + 1) % testimonials.length;
      showTestimonial(current);
    });
  }

});




/* ========== PRODUCTS 1 PAGE ========== */
document.addEventListener('DOMContentLoaded', () => {

  // OPEN SORT BY
  const sortToggle = document.getElementById('sortToggle');
  const sortOptions = document.getElementById('sortOptions');

  if (sortToggle) {
    sortToggle.addEventListener('click', () => {
      sortOptions.classList.toggle('hidden');
    });
  } 


  // SORT FILTERS (ON MOBILE & DESKTOP)
  // Select all the headers that control the filters 
  const filterHeaders = document.querySelectorAll('.filter-header');

  // Loop through each header
  filterHeaders.forEach(header => {
    header.addEventListener('click', () => {

      const filterName = header.dataset.filter;
      const filterOptions = document.querySelectorAll(`[data-filter-options= "${filterName}"]`);
      const arrow = header.querySelector('img');

      // Toggle visibility for each matching filter options section
      filterOptions.forEach(option => {
        option.classList.toggle('hidden-filter');
      });

      // Toggle arrow direction
      if (filterOptions[0].classList.contains('hidden-filter')) {
        arrow.src = 'images/arrow-down.svg';
      } else {
        arrow.src = 'images/arrow-up.svg';
      }
    });

  });



  // OPEN/CLOSE FILTER BUTTON (MOBILE)
  const openFilter = document.getElementById('openFilter');
  const closeFilter = document.getElementById('closeFilter');
  const mobileFilterOverlay = document.getElementById('mobileFilterOverlay');

  if (openFilter && closeFilter && mobileFilterOverlay) {
    openFilter.addEventListener('click', () => {
      mobileFilterOverlay.classList.add('show');
      document.body.classList.add('no-scroll');
    });
  
    closeFilter.addEventListener('click', () => {
      mobileFilterOverlay.classList.remove('show');
      document.body.classList.remove('no-scroll');
    });
  }

});






/* ========== INDIVIDUAL PRODUCT PAGE ========== */

document.addEventListener('DOMContentLoaded', () => {

  // SIZE DROPDOWN TOGGLE
  const sizeToggle = document.getElementById('sizeToggle');
  const sizeOptions = document.getElementById('sizeOptions');

  // Open/close size dropdown 
  if (sizeToggle && sizeOptions) {
    sizeToggle.addEventListener('click', () => {
      sizeOptions.classList.toggle('hidden');
    });
  }

  // PRODUCT QUANTITY BUTTONS (ON PRODUCT PAGE) 
  const qtyCount = document.getElementById('qtyCount');
  const productQtyBtns = document.querySelectorAll('.product-qty-btn');

  // increment/decrement item quantity
  if (qtyCount) {
    productQtyBtns.forEach(btn => {
      btn.addEventListener('click', () => {

        let count = parseInt(qtyCount.textContent);

        if (btn.textContent === '−' && count > 1) 
          count--;
        if (btn.textContent === '+') 
          count++;

        qtyCount.textContent = count;

      });
    });
}


  // DESCRIPTION & MEASUREMENTS SECTIONS
  const sectionHeaders = document.querySelectorAll('.section-header');

  // open/close section and swap icon

  sectionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const sectionName = header.dataset.section;
      const content = document.getElementById(sectionName + 'Content');
      const icon = header.querySelector('.section-icon');

      if (content) {
        content.classList.toggle('hidden');

        if (content.classList.contains('hidden')) {
          icon.src = 'images/plus.svg';
        } 
        else {
          icon.src = 'images/minus.svg';
        }
      }

    });

  });


  // QUANTITY BUTTONS IN CART SIDEBAR
  const cartQty = document.getElementById("cartQty");
  const cartPlus = document.getElementById("cartPlus");
  const cartMinus = document.getElementById("cartMinus");


  // Increment/decrement quantity inside cart popup
  if (cartQty && cartPlus && cartMinus) {
    cartPlus.addEventListener("click", () => {
      cartQty.textContent = parseInt(cartQty.textContent) + 1;
    });

    cartMinus.addEventListener("click", () => {
      if (parseInt(cartQty.textContent) > 1) {
        cartQty.textContent = parseInt(cartQty.textContent) - 1;
      }
    });
  }

  // PRODUCT IMAGE GALLERY CHANGE

  const mainImage = document.getElementById('mainProductImage');
  const thumbs = document.querySelectorAll('.thumb');
  const prevBtn = document.getElementById('prevImage');
  const nextBtn = document.getElementById('nextImage');

  // current image index
  let currentIndex = 0;  

  // Function to update main image and active thumbnail
    function updateMainImage(index) {
      mainImage.src = thumbs[index].src;

      // goes through all thumbnails to mark active
      thumbs.forEach(img => img.classList.remove('active'));
      thumbs[index].classList.add('active');
      currentIndex = index;
    }

  
  if (mainImage && thumbs.length) {

  
    // when a thumbnail is clicked show it in the main image
    thumbs.forEach((thumb, index) => {
      thumb.addEventListener('click', () => updateMainImage(index));
    });

    // Previous arrow button, go back one image
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        let newIndex = (currentIndex - 1 + thumbs.length) % thumbs.length;

        updateMainImage(newIndex);
      });
    }

    // next arrow button, go forward one image
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        let newIndex = (currentIndex + 1) % thumbs.length;
        updateMainImage(newIndex);
      });
    }
  }

});




  /* ========== CART PAGE ========== */





  

  /* ========== CHECKOUT PAGE ========== */

