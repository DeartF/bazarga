app.controller('AdminUsersCtrl' , AdminUsersCtrl);

AdminUsersCtrl.$inject = ['$http', '$scope' , '$cookies' , '$rootScope'];

function AdminUsersCtrl($http , $scope , $cookies, $rootScope) {
  var vm = this;
  vm.objectToEdit = null


    if($cookies.getObject('session')){
    $rootScope.session = $cookies.getObject('session');
  }

  $http.get('/api/user')
    .success(function(response) {
      vm.users = response
    })
    .error(function(err) {
      console.log(err)
    })

    vm.deleteUser = function(user) {
      $http.delete('/api/user/' + user._id)
        .success(function(response) {
          var index = vm.users.findIndex(function(item) {
            return item._id === user._id
          })

          vm.users.splice(index, 1);
          res.cookie('session', JSON.stringify(req.user))
      res.send(req.user)
        })
        .error(function(err) {
          console.log(err);
        });
    }

    vm.editTableUser = function(user) {
      vm.objectToEdit = user;
    }

    vm.closeModal = function() {
      vm.objectToEdit = null
    }

    vm.editUser = function(user) {
      $http.put('/api/user' , vm.objectToEdit)
        .success(function(response) {
          console.log(response)
          vm.closeModal()
        })
        .error(function(err) {
          console.log(err)
        })
    }
}
