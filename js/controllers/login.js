app.controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['$http' , '$scope' , '$state' , '$rootScope' , '$cookies'];

function LoginCtrl($http, $scope , $state , $rootScope , $cookies) {
	var vm = this;

	vm.login = function() {
		var data = {
			email: vm.email,
			password: vm.password
		}

		$http.post('/api/login' , data)
			.success(function(response) {
				$rootScope.session = $cookies.getObject('session');
				$state.go('home');
				swal('Поздравляем!' , 'Вы успешно вошли в аккаунт!' , 'success');
			})
			.error(function(err) {
				console.log(err)
				swal('Ошибка!' , 'Проверьте правильность введенных данных! ' , 'error')
			})
	}

}
