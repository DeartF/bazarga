app.controller('MenShoesCtrl' , MenShoesCtrl);

MenShoesCtrl.$inject = ['$http' , '$scope'];

function MenShoesCtrl($http , $scopre) {
	var vm = this

	$http.get('/api/post')
		.success ( function ( response ) {
			console.log( response )
		})
		.error ( function ( err ) {
			console.log ( err )
		})
}

