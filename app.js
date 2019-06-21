var app = angular.module('bazarza', [
	'ui.router',
	'ngCookies'
])

app.config(routeConfig);

routeConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

function routeConfig ($stateProvider, $urlRouterProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: '/views/home.html',
			controller: 'MainCtrl',
			controllerAs: 'vm'
		})
		.state('basket', {
			url: '/basket',
			templateUrl: '/views/basket.html',
			controller: 'BasketCtrl',
			controllerAs: 'vm'
		})
		.state('login' , {
			url: '/login',
			templateUrl: '/views/login.html',
			controller: 'LoginCtrl',
			controllerAs: 'vm'
		})
		.state('registration' , {
			url: '/registration',
			templateUrl: '/views/registration.html',
			controller: 'RegistrCtrl',
			controllerAs: 'vm'
		})
		.state('admin' , {
			url: '/admin',
			templateUrl: '/views/admin.html',
			controller: 'AdminCtrl',
			controllerAs: 'vm'
		})
		.state('anProducts' , {
			url: '/admin/products',
			templateUrl: '/views/adminProducts.html',
			controller: 'AdminProductsCtrl',
			controllerAs: 'vm'
		})
		.state('anUsers' , {
			url: '/admin/users',
			templateUrl: '/views/adminUsers.html',
			controller: 'AdminUsersCtrl',
			controllerAs: 'vm'
		})
		.state('addCategory' , {
			url: '/admin/categories',
			templateUrl: '/views/addCategory.html',
			controller: 'AddCategory',
			controllerAs: 'vm'
		})
		.state('product' , {
			url: '/product/:id',
			templateUrl: '/views/product.html',
			controller: 'ProductCtrl',
			controllerAs: 'vm'
		})
		.state('pavilion' , {
			url: '/pavilions',
			templateUrl: '/views/pavilion.html',
			controller: 'PavilionCtrl',
			controllerAs: 'vm'
		})
		.state('tender' , {
			url: '/tender',
			templateUrl: '/views/tender.html',
			controller: 'TenderCtrl',
			controllerAs: 'vm'
		})
		.state('request' , {
			url: '/request',
			templateUrl: '/views/request.html',
			controller: 'RequestCtrl',
			controllerAs: 'vm'
		})




		// recepts
		.state('crabsalad' , {
			url: '/recepts/crabsalad',
			templateUrl: '/views/crabsalad.html',
			controller: 'CrabSaladCtrl',
			controllerAs: 'vm'
		})
		.state('ragu' , {
			url: '/recepts/ragu',
			templateUrl: '/views/ragu.html',
			controller: 'RaguCtrl',
			controllerAs: 'vm'
		})
		.state('tcezarisalad' , {
			url: '/recepts/tcezarisalad.html',
			templateUrl: '/views/tcezarisalad.html',
			controller: 'TcezariCtrl',
			controllerAs: 'vm'
		})
		.state('minutesalad' , {
			url: '/recepts/minutesalad.html',
			templateUrl: '/views/minutesalad.html',
			controller: 'MinuteCtrl',
			controllerAs: 'vm'
		})
		.state('fish' , {
			url: '/recepts/fish.html',
			templateUrl: '/views/fish.html',
			controller: 'FishCtrl',
			controllerAs: 'vm'
		})
		.state('user' , {
			url: '/user/:id',
			templateUrl: '/views/user.html',
			controller: 'UserCtrl',
			controllerAs: 'vm'
		})
		// Pavilions
		.state('milk' , {
			url: '/pavilions/milk',
			templateUrl: '/views/pavilions/milk.html',
			controller: 'MilkCtrl',
			controllerAs: 'vm'
		})
		.state('fruit' , {
			url: '/pavilions/fruit',
			templateUrl: '/views/pavilions/fruit.html',
			controller: 'FruitCtrl',
			controllerAs: 'vm'
		})
		.state('vegetable' , {
			url: '/pavilions/vegetable',
			templateUrl: '/views/pavilions/vegetable.html',
			controller: 'VegetableCtrl',
			controllerAs: 'vm'
		})
		.state('meat' , {
			url: '/pavilions/meat',
			templateUrl: '/views/pavilions/meat.html',
			controller: 'MeatCtrl',
			controllerAs: 'vm'
		})
		.state('green' , {
			url: '/pavilions/green',
			templateUrl: '/views/pavilions/green.html',
			controller: 'GreenCtrl',
			controllerAs: 'vm'
		})
		.state('fishpavilion' , {
			url: '/pavilions/fish',
			templateUrl: '/views/pavilions/fish.html',
			controller: 'FishPavilionCtrl',
			controllerAs: 'vm'
		})
		
		
		.state('berry' , {
			url: '/pavilions/berry',
			templateUrl: '/views/pavilions/berry.html',
			controller: 'BerryCtrl',
			controllerAs: 'vm'
		})

		.state('dried' , {
			url: '/pavilions/driedfruits',
			templateUrl: '/views/pavilions/dried.html',
			controller: 'DriedCtrl',
			controllerAs: 'vm'
		})
}
