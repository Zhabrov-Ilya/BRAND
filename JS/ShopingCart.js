'use strict';

//Удаление товара из корзины
document.querySelector('.cart__table').addEventListener('click', event => {
  if (event.target.matches('.cart__cross')) {
    event.target.closest('tr').remove()
  }
})

// document.querySelector('.cart__table').addEventListener('change', event => {
//   if (event.target.name == 'productQuantity') {
//     let productQuantity = document.getElementById('1');
//     let subtotal = Number(productQuantity.innerText) * event.target.value;
//     console.log(subtotal);
//     console.log(object);
//   }
// })
