
// Wait for the entire HTML document to finish loading before running the script
document.addEventListener('DOMContentLoaded', () => {

  /* ========== HOMEPAGE ========== */
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





   /* ========== INDIVIDUAL PRODUCT PAGE ========== */

  // This function is used on the PRODUCT PAGE
  // When "Add to Cart" is clicked, it shows an alert box
  function addToCart() {
    alert("Product added to cart!");
  }


});