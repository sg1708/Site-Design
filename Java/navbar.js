
// OPEN NAVIGATION OVERLAYS
// Wait for the entire HTML document to finish loading before running the script
document.addEventListener('DOMContentLoaded', () => {


  // Get references to the nav buttons and overlay element
  // Search icon/button in the navbar
  const searchBtn = document.getElementById('searchBtn'); 

  // "Products" button in the navbar
  const productsBtn = document.getElementById('productsBtn');

  // Cart icon/button in the navbar
  const cartBtn = document.getElementById('cartBtn');



  // SEARCH OVERLAY FUNCTIONS
  // Slide-down search bar
  const searchOverlay = document.getElementById('searchOverlay');

  const searchClose = document.getElementById('searchClose');

  const searchGo = document.getElementById('searchGo');



  // Toggle the search overlay (slide it in/out from the top) when search icon is clicked
  if (searchOverlay) {
    searchBtn.addEventListener('click', () => {
      searchOverlay.classList.add('show');
    });
  }

  // Close on cross (×)
  if (searchClose) {
    searchClose.addEventListener('click', () => {
      searchOverlay.classList.remove('show');
    });
  }

 

  // Go to search results on icon click
  if (searchGo) {
    searchGo.addEventListener('click', () => {
      window.location.href = 'products2.html';
    });
  }

  // Submit search on Enter key
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        window.location.href = 'products2.html';
      }
    });
  }


  //PRODUCT OVERLAY FUNCTIONS
  // Toggle the visibility of the Products popup when "Products" is clicked
  productsBtn.addEventListener('click', () => {
    const popup = document.getElementById('productsPopup');
    const NowHidden = popup.classList.toggle('hidden'); 

  if (NowHidden) {
    document.body.classList.remove('dimmed');
  } else {
    document.body.classList.add('dimmed');
  }

  });



  // CART OVERLAY FUNCTIONS
  // Toggle the visibility of the Cart popup when cart icon is clicked
  const closeCart = document.getElementById('closeCart');
  const cartPopup = document.getElementById('cartPopup');

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



    // Close when clicking outside each overlay
  document.addEventListener('click', (e) => {
    // SEARCH CLOSE
    if (searchOverlay.classList.contains('show') &&
      !searchOverlay.contains(e.target) &&
      !searchBtn.contains(e.target)) {

      searchOverlay.classList.remove('show');
    }

    // PRODUCTS CLOSE
    const popup = document.getElementById('productsPopup');
    const ClickInsidePopup = popup.contains(e.target);
    const ClickInsideNavbar = document.querySelector('.navbar').contains(e.target);

    // Close only if click is outside both popup and navbar
    if (!ClickInsidePopup && !ClickInsideNavbar) {
      popup.classList.add('hidden');

    }

    // CART CLOSE 

    if (
      cartPopup &&
      !cartPopup.contains(e.target) &&
      !cartBtn.contains(e.target)
    ) {
      cartPopup.classList.remove('show');
 
    }

    // DIM BACKGROUND CLOSE FOR OVERLAYS

    const productsOpen = !popup.classList.contains('hidden');
    const cartOpen = cartPopup.classList.contains('show');
    
    if (!productsOpen && !cartOpen) {
      document.body.classList.remove('dimmed');
    }


  });


  

  const menuToggle = document.getElementById('menuToggle');
  const sideMenu = document.getElementById('sideMenu');
  const productsToggle = document.querySelector('.products-toggle');
  const mobileProductsOverlay = document.getElementById('mobileProductsOverlay');
  const closeMobileProducts = document.getElementById('closeMobileProducts');
  

  // Get the <img> inside the menu button
  const menuIcon = menuToggle.querySelector('img');

  // Update filter/close icon
  const updateMenuIcon = () => {
    const menuOpen = sideMenu.classList.contains('show') || mobileProductsOverlay.classList.contains('show');
    if (menuIcon) {
      menuIcon.src = menuOpen ? 'images/close-icon.svg' : 'images/filter-icon.svg';
    }
  };

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

 

  // Open mobile products overlay
  productsToggle.addEventListener('click', () => {
    sideMenu.classList.remove('show');
    mobileProductsOverlay.classList.add('show');
    document.body.classList.add('no-scroll');
    updateMenuIcon();
  });

  // Close mobile products overlay
  closeMobileProducts.addEventListener('click', () => {
    mobileProductsOverlay.classList.remove('show');
    document.body.classList.remove('no-scroll');
    updateMenuIcon();
  });

});




