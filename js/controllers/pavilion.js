app.controller('PavilionCtrl', PavilionCtrl);

PavilionCtrl.$inject = ['$http', '$scope'];

function PavilionCtrl($http, $scope) {
	var vm = this;

	$(document).ready(function() {
		$('#enscart_image_wrapper').css({'background-color': '#31c309', 'margin-top': '70px'})
		$('#enscart_counter').css({'background-color': '#29a206', 'margin-top': '68px'})
		
	})

	$(document).ready(function() {
		var offset = 0;
		$('html , body').animate({
			scrollTop: $('#header').offset().bottom - offset
		} , 1000);
		return false;
	})
}
