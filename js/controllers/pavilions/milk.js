app.controller('MilkCtrl' , MilkCtrl);

MilkCtrl.$inject = ['$http' , '$scope'];

function MilkCtrl($htpp , $scope) {
	var vm = this;

	jQuery(".only_number").keypress(function(e) {
if (e.which != 8 && e.which != 0 && e.which != 46 && (e.which < 48 || e.which > 57)) {
return false;
}
});

	$(document).ready(function() {
		$('#enscart_image_wrapper').css({'background-color': '#31c309', 'margin-top': '70px'})
		$('#enscart_counter').css({'background-color': '#29a206', 'margin-top': '68px'})
		
	})
	
	$( function() {
		if (localStorage.getItem("myKey")) {
			var stored_select = localStorage.getItem("myKey");
			$('#' + stored_select).prop( "selected", true );
			$('.' + stored_select).show();
		} else {
			$('.almaty').show();
		}
	});

	$("#selectItem").change(function(){
		$('.containerss').find('div').hide();
		var selected = $('#selectItem option:selected').attr('id');
		localStorage.setItem("myKey", selected);
		$('.' + selected).show();
	});

	$('.city__close').click(function () {
		$('.choose__city').css('display' , 'none')
	})

	var words = ['Молочный павильон'];
	var i=0;
	var j=0;
	var title = document.getElementById('pavilion__name');

	function inputText(){
		var str="";
		var interval = setInterval(function(){

			if(str.length == words[i].length){

				clearInterval(interval);

			} else{
				str = str + words[i][j];
				title.innerHTML = str ;
				j++;
			}
		},120);
	}

	inputText()


	 $(document).ready(function() {
		var offset = 0;
		$('html , body').animate({
		  scrollTop: $('#header').offset().bottom - offset
		} , 1000);
		return false;
	  })


	this.addToCart = function (product) {
		if (localStorage.getItem('basket')) {
			var basket = JSON.parse(localStorage.getItem('basket'))
			var index = basket.findIndex(function (item) {
				return item.model == product.model
			})
			if (index >= 0) {
				basket [index].count = (basket [index].count * 1) + 1;
			} else {
				basket.push({
					model: product.model,
					gender: product.gender,
					price: product.price,
					count: 1
				})
			}

			localStorage.setItem('basket', JSON.stringify(basket));

		} else {
			var basket = [];
			basket.push({
				model: product.model,
				gender: product.gender,
				price: product.price,
				count: 1
			})
			localStorage.setItem('basket', JSON.stringify(basket));
		}
	};	

		$(document).ready(function() {
		    $('.choose__pav').click(function() {
		    	var offset = +200;
		    	$('html , body').animate({
			      scrollTop: $('.accordionn').offset().top - offset
				} , 1000);
			    return false;
		    })
	 	 });

} 