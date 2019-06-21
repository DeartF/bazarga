app.controller('AddCategory' , AddCategory)

AddCategory.$inject = ['$http' , '$scope']

function AddCategory($http , $scope) {
  var vm = this;

  $http.get('/api/post')
    .success(function(response) {
      vm.products = response
    })
    .error(function(err) {
      console.log(err)
    })

    vm.editTable = function(product) {
      vm.objectToEdit = product;
    }

    vm.closeModal = function() {
      vm.objectToEdit = null
    }

    vm.editFotowear = function(product) {
      $http.put('/api/post' , vm.objectToEdit)
        .success(function(response) {
          console.log(response)
          vm.closeModal()
        })
        .error(function(err) {
          console.log(err)
        })
    }
}
