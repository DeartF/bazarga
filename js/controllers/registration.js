app.controller('RegistrCtrl' , RegistrCtrl);

RegistrCtrl.$inject = ['$http' , '$scope' , '$state' , '$rootScope'  ,'$cookies'];

function RegistrCtrl($http , $scopre , $state , $rootSCope , $cookies) {
	var vm = this

	vm.registration = function() {
		var data = {
			email: vm.email,
			name: vm.name,
			password: vm.password
		}

		if ( vm.name != null && vm.email != null && vm.password != null) {
			$('.mail__send').css('display' , 'flex')
		}

		$http.post('/api/registration' , data)
			.success(function(response) {
				console.log(response)
          		swal("Завершите регистрацию!", "Письмо с потверждением отправлено на вашу почту!", "success");
			})
			.error(function(err) {
				console.log(error)
				swal("Ошибка!" , "Ранее пользователь уже был зарегистрирован" , 'error')
			})
	}

	vm.closeSend = function ( ) {
		$('.mail__send').css('display' , 'none')
	}

	$(document).ready(function() {
		$('.hide__password').mouseover(function() {
			$(this).addClass('fa-eye')
			$(this).removeClass('fa-eye-slash')
			$('#reg__password').attr('type' , 'text')
		})

		$('.hide__password').mouseout(function() {
			$(this).addClass('fa-eye-slash')
			$(this).removeClass('fa-eye')
			$('#reg__password').attr('type' , 'password')
		})
	})


}