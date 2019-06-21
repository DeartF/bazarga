app.controller('TenderCtrl' , TenderCtrl)

TenderCtrl.$inject = ['$http' , '$scope' , '$rootScope']

function TenderCtrl($http , $scope , $rootScope) {
	var vm = this;

	$http.get('/api/request')
    .success(function(response) {
      vm.requests = response
    })
    .error(function(err) {
      console.log(err)
    })

    $http.get('/api/question')
    .success(function(response) {
      vm.questions = response
    })
    .error(function(err) {
      console.log(err)
    })

    vm.saveRequest = function() {
      var form = $('#frm');
      var request = new FormData(form[0]);
      request.append('descriptionRequest' , vm.descriptionRequest);
      request.append('companyRequest' , vm.companyRequest);
      console.log(vm.companyRequest)
      console.log(vm.descriptionRequest)
      console.log(request)


      $http.post('/api/request' , request,
      {
        headers: {'Content-type' : undefined},
        transformRequest: angular.identity
      })
      .success(function(request) {
        vm.requests.push(request)
        console.log('success')
      })
      .error(function(err) {
        console.log(err)
      })
    }

    vm.saveQuestion = function() {
      var data = new FormData();
      data.append('question' , vm.question);
      data.append('company' , vm.company);

      $http.post('/api/question' , data , 
      {
        headers: {'Content-type': undefined},
        transformRequest: angular.identity
      })
      .success(function(response) {
        vm.questions.push(response)
      })
      .error(function(err) {
        console.log(err)
      })
    }
}