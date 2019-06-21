app.controller('AdminCtrl' , AdminCtrl)

AdminCtrl.$inject = ['$http' , '$scope' , '$rootScope' ]

function AdminCtrl($http , $scope , $rootScope) {
  var vm = this
  vm.objectToEdit = null

  // $http.get('/api/post')
  //   .success(function(response) {
  //     vm.products = response
  //   })
  //   .error(function(err) {
  //     console.log(err)
  //   })

  //   vm.saveProduct = function() {
  //     console.log(vm.file)
  //     var data = new FormData();
  //     data.append('price' , vm.price);
  //     data.append('gender' , vm.gender);
  //     data.append('model' , vm.model);
  //     data.append('file' , vm.file);


  //     $http.post('/api/post' , data, 
  //     {
  //       headers: {'Content-type' : undefined},
  //       transformRequest: angular.identity
  //     })  
  //     .success(function(response) {
  //       vm.products.push(response)
  //     })
  //     .error(function(err) {
  //       console.log(err)
  //     })

  //       $http.post('/api/post' , data)
  //       .success(function(response) {
  //         vm.footwears.push(response)
  //       })
  //       .error(function(err) {
  //         console.log(err)
  //       })
  //   }

  //   vm.deleteProduct = function(product) {
  //     $http.delete('/api/post/' + product._id)
  //       .success(function(response) {
  //         var index = vm.products.findIndex(function(item) {
  //           return item._id === product._id
  //         })

  //         vm.products.splice(index, 1);
  //       })
  //       .error(function(err) {
  //         console.log(err);
  //       });
  //   }

  //   vm.editTable = function(product) {
  //     vm.objectToEdit = product;
  //   }

  //   vm.closeModal = function() {
  //     vm.objectToEdit = null
  //   }

  //   vm.editFotowear = function(product) {
  //     $http.put('/api/post' , vm.objectToEdit)
  //       .success(function(response) {
  //         console.log(response)
  //         vm.closeModal()
  //       })
  //       .error(function(err) {
  //         console.log(err)
  //       })
  //   }

}
