app.controller('RequestCtrl', RequestCtrl);

RequestCtrl.$inject = ['$http' , '$scope'];

function RequestCtrl($http, $scope) {
	var vm = this;
	$(document).ready(function() {
		var offset = 0;
		$('html , body').animate({
			scrollTop: $('#header').offset().bottom - offset
		} , 1000);
		return false;
	})
}