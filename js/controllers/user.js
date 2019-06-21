app.controller('UserCtrl' , UserCtrl);

UserCtrl.$inject = ['$http' , '$scope' , '$state'];

function UserCtrl($http , $scope , $state) {
  var vm = this;

  $http.get('/api/user/' + $state.params.id)
    .success(function(response) {
      vm.user = response;
      console.log(vm.user)
    })
    .error(function(err) {
      console.log(err)
    })
}
