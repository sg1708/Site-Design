document.getElementById('searchBtn').addEventListener('click', () => {
  document.getElementById('searchPopup').classList.toggle('hidden');
});

document.getElementById('productsBtn').addEventListener('click', () => {
  document.getElementById('productsPopup').classList.toggle('hidden');
});

document.getElementById('cartBtn').addEventListener('click', () => {
  document.getElementById('cartPopup').classList.toggle('hidden');
});



function addToCart() {
  alert("Product added to cart!");
}


