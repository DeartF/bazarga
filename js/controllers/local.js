app.service('basket' , BasketService)



function BasketService ( ) {
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

	this.getCart = function ( ) {
		if ( localStorage.getItem ( 'basket' ) ) {
			return JSON.parse ( localStorage.getItem ( 'basket' ) )
		} else {
			return []
		}
	}
}
