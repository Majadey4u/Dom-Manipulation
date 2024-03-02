
  // Function to increase quantity
function increaseQuantity(button) {
  var input = button.parentNode.querySelector('input');
  input.value = parseInt(input.value) + 1;
  updateTotalPrice();
}


  // Function to decrease quantity
function decreaseQuantity(button) {
  var input = button.parentNode.querySelector('input');
  if (parseInt(input.value) > 1) {
    input.value = parseInt(input.value) - 1;
    updateTotalPrice();
  }
}
  // Function to remove item from cart
function removeItem(button) {
  button.closest('.cart-item').remove();
  updateTotalPrice();
}


 // Function to toggle like status
function toggleLike(icon) {
  icon.classList.toggle('active');
}

 // Function to update total price
function updateTotalPrice() {
  var total = 0;
  var items = document.querySelectorAll('.cart-item');
  items.forEach(function(item) {
    var price = parseFloat(item.querySelector('p').innerText.substring(1));
    var quantity = parseInt(item.querySelector('input').value);
    total += price * quantity;
  });
  document.querySelector('.total-price').innerText = 'Total: $' + total.toFixed(2);
}