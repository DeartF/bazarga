app.controller('MinuteCtrl', MinuteCtrl);

MinuteCtrl.$inject = ['$http', '$scope'];

function MinuteCtrl($http, $scope) {
	var vm = this;

	$(document).ready(function() {
		var offset = 0;
		$('html , body').animate({
			scrollTop: $('#header').offset().bottom - offset
		} , 1000);
		return false;
	})

	$(document).ready(function() {
		$(window).scroll(function() {
		 $('.recepts__inner').each(function() {
			 var imagePos = $(this).offset().top;
			 var topOfWindow = $(window).scrollTop();
			 if(imagePos < topOfWindow + 600) {
				 $(this).addClass('flipInY');
			 }
		 })
	 })
	})
}
