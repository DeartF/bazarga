app.controller('BasketCtrl', BasketCtrl);

BasketCtrl.$inject = ['$http', '$scope' , 'basket'];

function BasketCtrl($http, $scope , basket) {
	var vm = this;

	this.removeFromCart = function(product){
	  var basket = JSON.parse(localStorage.getItem('basket'));
	  var index = basket.findIndex(function(item) {
	   return item._id == product._id
	  })
	  basket.splice(index, 1);
	  localStorage.setItem('basket', JSON.stringify(basket));
		basket.push(vm.basket)
	 }

	this.getCart = function ( ) {
		if ( localStorage.getItem ( 'basket' ) ) {
			return JSON.parse ( localStorage.getItem ( 'basket' ) )
		} else {
			return []
		}
	}


	vm.basket = basket.getCart()
}
