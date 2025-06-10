
// Wait for the entire HTML document to finish loading before running the script
document.addEventListener('DOMContentLoaded', () => {


  /* ========== OPEN NAVIGATION OVERLAYS (DESKTOP) ========== */

  // Get references to the nav buttons and overlay elements

  const searchBtn = document.getElementById('searchBtn'); 
  const searchBtnMobile = document.getElementById('searchBtnMobile');
  const searchOverlay = document.getElementById('searchOverlay');
  const searchClose = document.getElementById('searchClose');
  const searchGo = document.getElementById('searchGo');
  const searchInput = document.getElementById('searchInput');

  const productsBtn = document.getElementById('productsBtn');

  const cartBtn = document.getElementById('cartBtn');
  const cartBtnMobile = document.getElementById('cartBtnMobile');
  const closeCart = document.getElementById('closeCart');
  const cartPopup = document.getElementById('cartPopup');

  // DESKTOP SEARCH
  // Toggle the search overlay (slide it in/out from the top) when search icon is clicked
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      searchOverlay.classList.add('show');
    });
  }

  // MOBILE SEARCH
  if (searchBtnMobile) {
    searchBtnMobile.addEventListener('click', () => {
      searchOverlay.classList.add('show');
    });
  }

  // Close search when clicking cross
  if (searchClose) {
    searchClose.addEventListener('click', () => {
      searchOverlay.classList.remove('show');
    });
  }

  // Go to search results on search click
  if (searchGo) {
    searchGo.addEventListener('click', () => {
      window.location.href = 'products2.html';
    });
  }

  // Submit search on Enter key
  if (searchInput) {
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        window.location.href = 'products2.html';
      }
    });
  }


  // PRODUCTS POPUP
  // Toggle the visibility of the Products popup when "Products" is clicked

  const popup = document.getElementById('productsPopup');
  const arrow = productsBtn.querySelector('.arrow-icon');

  
  if (productsBtn) {
    productsBtn.addEventListener('click', () => {
      const NowHidden = popup.classList.toggle('hidden');
      document.body.classList.toggle('dimmed', !NowHidden);

      // Toggle arrow
      if (popup.classList.contains('hidden')) {
        arrow.src = 'images/arrow-down.svg';
      } else {
        arrow.src = 'images/arrow-up.svg';
      }

    });
  }



  // CART
  // Toggle the visibility of the Cart popup when cart icon is clicked

  if (cartBtn) {
    cartBtn.addEventListener('click', () => {
      cartPopup.classList.add('show');
      document.body.classList.add('dimmed');
    });
  }

  if (closeCart) {
    closeCart.addEventListener('click', () => {
      cartPopup.classList.remove('show');
      document.body.classList.remove('dimmed');
    });
  }


  // CLOSE WHEN CLICKING OUTSIDE EACH OVERLAY

  document.addEventListener('click', (e) => {

    // SEARCH CLOSE
    if (searchOverlay.classList.contains('show') && 
      !searchOverlay.contains(e.target) &&
      !searchBtn.contains(e.target) && 
      !searchBtnMobile.contains(e.target)) {

      searchOverlay.classList.remove('show');
    }

    // PRODUCTS CLOSE
    const ClickInsidePopup = popup.contains(e.target);
    const ClickInsideNavbar = document.querySelector('.navbar').contains(e.target);

    // Close only if click is outside both popup and navbar
    if (!ClickInsidePopup && !ClickInsideNavbar) {
      popup.classList.add('hidden');

      // Toggle arrow
      if (popup.classList.contains('hidden')) {
        arrow.src = 'images/arrow-down.svg';
      } else {
        arrow.src = 'images/arrow-up.svg';
      }

    }

    // CART CLOSE 
    if (
      cartPopup && !cartPopup.contains(e.target) && !cartBtn.contains(e.target)
    && !cartBtnMobile.contains(e.target)) {
      cartPopup.classList.remove('show');
 
    }

    // DIM BACKGROUND FOR OVERLAYS
    const productsOpen = !popup.classList.contains('hidden');
    const cartOpen = cartPopup.classList.contains('show');
    
    if (productsOpen || cartOpen) {
      document.body.classList.add('dimmed');
    } else {
      document.body.classList.remove('dimmed');
    }

  });


  /* ========== OPEN NAVIGATION OVERLAYS (MOBILE) ========== */

  const menuToggle = document.getElementById('menuToggle');
  const sideMenu = document.getElementById('sideMenu');
  const productsToggle = document.querySelector('.products-toggle');
  const mobileProductsOverlay = document.getElementById('mobileProductsOverlay');
  const menuIcon = menuToggle?.querySelector('img');


  // PRODUCT/MENU POPUP

  // Open/close side menu
  menuToggle.addEventListener('click', () => {
    const isOpen = sideMenu.classList.contains('show');

    if (isOpen) {
      sideMenu.classList.remove('show');
      mobileProductsOverlay.classList.remove('show');
      document.body.classList.remove('no-scroll');
    } 
    else {
      sideMenu.classList.add('show');
      mobileProductsOverlay.classList.remove('show');
      document.body.classList.add('no-scroll');
    }

    updateMenuIcon();
  });


  // Update filter/close icon when product/menu overlays are open
  const updateMenuIcon = () => {
    const menuOpen = sideMenu.classList.contains('show') || mobileProductsOverlay.classList.contains('show');
    if (menuOpen) {
      menuIcon.src = 'images/close-icon.svg';
    } 
    else {
      menuIcon.src = 'images/filter-icon.svg';
    }
  };
  

 
  // Open mobile products overlay
  productsToggle.addEventListener('click', () => {
    sideMenu.classList.remove('show');
    mobileProductsOverlay.classList.add('show');
    document.body.classList.add('no-scroll');
    updateMenuIcon();
  });


  // Close mobile products overlay and return to menu
  const backToMenu = document.getElementById('backToMenu');

  backToMenu.addEventListener('click', () => {
    mobileProductsOverlay.classList.remove('show');

    sideMenu.classList.add('show'); // go back to side menu
    updateMenuIcon();
  });


  // CART POPUP

  if (cartBtnMobile) {
    cartBtnMobile.addEventListener('click', () => {
      cartPopup.classList.add('show');
      document.body.classList.add('dimmed');
    });
  }


});




