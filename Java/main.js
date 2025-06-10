

/* ========== HOMEPAGE ========== */
document.addEventListener('DOMContentLoaded', () => {

  // GALLERY SCROLLING 
  const galleryScroll = document.querySelector('.gallery-scroll');
  const leftArrow = document.querySelector('.gallery-arrow.left');
  const rightArrow = document.querySelector('.gallery-arrow.right');


// when clicking left/right arrows, scroll a bit to left and right
  leftArrow.addEventListener('click', () => {
    galleryScroll.scrollBy({ left: -300, behavior: 'smooth' });
  });

  rightArrow.addEventListener('click', () => {
    galleryScroll.scrollBy({ left: 300, behavior: 'smooth' });
  });
    

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

});




/* ========== PRODUCTS 1 PAGE ========== */
document.addEventListener('DOMContentLoaded', () => {

  // OPEN SORT BY
  const sortToggle = document.getElementById('sortToggle');
  const sortOptions = document.getElementById('sortOptions');

  sortToggle.addEventListener('click', () => {
    sortOptions.classList.toggle('hidden');
  });



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

  openFilter.addEventListener('click', () => {
    mobileFilterOverlay.classList.add('show');
    document.body.classList.add('no-scroll');
  });

  closeFilter.addEventListener('click', () => {
    mobileFilterOverlay.classList.remove('show');
    document.body.classList.remove('no-scroll');
  });


});



/* ========== PRODUCT 2 PAGE ========== */



/* ========== INDIVIDUAL PRODUCT PAGE ========== */

  // This function is used on the PRODUCT PAGE
  // When "Add to Cart" is clicked, it shows an alert box
  function addToCart() {
    alert("Product added to cart!");
  }



  /* ========== CART PAGE ========== */



  /* ========== CHECKOUT PAGE ========== */
