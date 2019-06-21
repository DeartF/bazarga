app.controller('WomenCtrl', WomenCtrl);

WomenCtrl.$inject = ['$http', '$scope'];

function WomenCtrl($http, $scope) {
	var vm = this;

	$http.get ('/api/post/product')
	.success ( function ( response ) {
		console.log( response )
	})
	.error ( function (  err ) {
		console.log(err)
	})

}
