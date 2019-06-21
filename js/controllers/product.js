app.controller('ProductCtrl', ProductCtrl);

ProductCtrl.$inject = ['$http', '$scope', '$state' , "basket"];

function ProductCtrl($http, $scope, $state , basket) {
	var vm = this;
	vm.commentToEdit = null;

	$http.get('/api/post/' + $state.params.id)
		.success(function(response) {
			vm.product = response;
			console.log(vm.product)
		})
		.error(function(err) {
			console.log(err);
		})

	this.addToCart = function ( product ) {
		if ( localStorage.getItem ( 'basket' ) ) {
			var basket = JSON.parse ( localStorage.getItem ( 'basket' ) )
			var index = basket.findIndex ( function ( item ) {
				return item.model == product.model
			})
			if ( index >= 0 ) {
				basket [ index ].count = ( basket [ index ].count * 1 ) + 1;
			} else {
				basket.push ( {
					model: product.model,
					gender: product.gender,
					price: product.price,
					count: 1
				} )
			}

			localStorage.setItem ( 'basket' , JSON.stringify( basket ) );

		} else {
			var basket = [ ]
			basket.push ( {
				model: product.model,
				gender: product.gender,
				price: product.price,
				count: 1
			} )
			localStorage.setItem ( 'basket' , JSON.stringify( basket ) );
		}
	}


	vm.addComment = function() {
		var data = {
			text: vm.text
		}

		console.log ( data )

		$http.post('/api/comment/' + $state.params.id, data)
			.success(function(response) {
				console.log(response);
			})
			.error(function(err) {
				console.log(err);
			})

	}

	vm.deleteComment = function(index, comment) {
		$http.delete('/api/comment/' + comment._id + '/' +  comment.product)
			.success(function(response) {
				vm.product.comments.splice(index, 1);
			}) .error(function(err) {
				console.log(err)
			})
	}

	var $cart = $('.cart')

	$cart.click(function() {
		$cart.addClass('add__cart')
		setTimeout( function() {
			$cart.removeClass('add__cart')
		}, 200)
	})

}
