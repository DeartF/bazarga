app.controller('HeaderCtrl', HeaderCtrl);

HeaderCtrl.$inject = ['$http' , '$scope' , '$cookies' , '$rootScope' , '$state'];

function HeaderCtrl($http, $scope , $cookies , $rootScope, $state) {
	var vm = this;
	
	document.body.onload = function() {
    setTimeout(function() {
      var preloader = document.getElementById('page-preloader')
      if( !preloader.classList.contains('done') ) {
        preloader.classList.add('done')
      }
    } , 1000)
}
	
	if($cookies.getObject('session')) {
		$rootScope.session = $cookies.getObject('session');
	}

	var cartimage 
	if ( cartimage == undefined) {
		console.log(cartimage)
		$(function() {
			$('#enscart_image_wrapper').append('<img src="./../../images/small/shopping-cart.svg" class = "shopping-cart">');

		})
		cartimage = 1
		console.log(cartimage)

	}

	vm.logout = function() {
		$http.post('/api/logout')
		.success(function(response) {
			$rootScope.session = undefined;
			$state.go('home');
		})
		.error(function(err) {
			console.log(err)
		})
	}

	//mobile
	var menu__bars = document.getElementById('menu__bars');
	var mobile = document.getElementById('mobile');
	var mobile__backgorund = document.getElementById('mobile__backgorund');
	var nav__inner_item = document.getElementById('nav__item');
	var menu__nav_inner = document.getElementById('menu__nav_inner');
	var close = document.getElementById('close');

	$('.nav__inner-item').click(function() {
		menu__nav_inner.style.display = "none";
		menu__nav_inner.style.left = "-100%";
		mobile__backgorund.style.left = "-100%";
	});

	$('.nav__inner-btn').click(function() {
		menu__nav_inner.style.display = "none";
		menu__nav_inner.style.left = "-100%";
		mobile__backgorund.style.left = "-100%";		
	})

	menu__bars.addEventListener('click' , function () {
		menu__nav_inner.style.left = "0%";
		menu__nav_inner.style.display = "inline-block";
		mobile__backgorund.style.left = "0%";
		close.style.display = "inline-block";
	});

	mobile__backgorund.addEventListener('click' , function () {
		menu__nav_inner.style.display = "none";
		menu__nav_inner.style.left = "-100%";
		mobile__backgorund.style.left = "-100%";
	});

	close.addEventListener('click' , function() {
		menu__nav_inner.style.display = "none";
		menu__nav_inner.style.left = "-100%";
		mobile__backgorund.style.left = "-100%";
	})


	$(document).ready(function() {
		$('.accordion__name').mouseover(function() {
			$('.accordion').css('display' , 'block');
			$('.accodrion__angle').removeClass('fa-angle-down');
			$('.accodrion__angle').addClass('fa-angle-up');
		});

		function hideAccodrion() {
			$('.accordion').css('display' , 'none');
			$('.accodrion__angle').removeClass('fa-angle-up');
			$('.accodrion__angle').addClass('fa-angle-down');
		}

		$('.accordion__name').mouseout(function() {
			setTimeout(hideAccodrion, 3000)
		});

		$('.exit__check').click(vm.logout)

		$('.products__window-close').on('click' , function() {
			$('.choose__products').fadeOut(500)
		})

		$('.choose__kuraga').on('click' , function() {
			$('.kuraga__products').css('display' , 'flex').fadeIn(500)
		})

		$('.choose__izum').on('click' , function() {
			$('.izum__products').css('display' , 'flex').fadeIn(500)
		})

	});

}
