/**
 * Setup my angular.module('products').config
 * Add all of the routes that would belong in here
 *
 */

angular.module('products', [ 'ui.router' ])
    .config(function( $stateProvider, $urlRouterProvider ) {

        $stateProvider.state('form', {
            url          : '/form',
            templateUrl  : 'app/products/form.html',
            controller   : 'formController',
            controllerAs : 'myForm'
        });

        $stateProvider.state('form.product', {
            url         : '/new',
            templateUrl : 'app/products/new.product.html'
        });

        $stateProvider.state('form.details', {
            url         : '/details',
            templateUrl : 'app/products/product.details.html'
        });
        
        $urlRouterProvider.otherwise('/form/new');
    })
    .controller('formController', function( $scope ) {
        var vm = this;
        vm.formData = {};
        vm.products = [];
        vm.processForm = function() {
            alert('processed!');
        }
    });

/*.config(function( $stateProvider, $urlRouterProvider ) {
 $stateProvider
 .state('home',
 {
 url   : '/',
 views : {
 'header' : {
 templateUrl : '/client/components/nav/navbar.html'
 //controller   : 'productController',
 //controllerAs : 'product'
 },
 'form'   : {
 templateUrl : '/app/products/new.product.html'
 }
 }
 }
 );
 console.log('Just ran the config for my angular module');
 //$urlRouterProvider.otherwise('/');
 });
 */