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
            templateUrl : 'app/products/product.details.html',
            resolve     : {
                onEnter : function( myForm ) {
                    myForm.salesRepHelp = 'Enter the number of sales representatives that are responsible for selling ' + myForm.formData.productName + ' to new customers (e.g. new logo business).';
                    myForm.avgDealSizeHelp = 'Enter the average deal size of a new logo deal. A rough estimate is fine for this number if the client doesn\'t have it immediately available.';
                    myForm.estimatedWinRateHelp = 'Enter their estimated win rate for new logo opportunities that are competitive. An estimate is fine for this, if the client doesn\'t have this information immediately available.';
                    myForm.competitorCountHelp = 'Enter the number of primary competitors for ' + myForm.formData.productName + ' the client has.';
                    myForm.newLogoRevenueHelp = 'Enter the amount of new logo revenue the client did with ' + myForm.formData.productName + ' over the past 12 months. An estimate is fine for this if the client doesn\'t have this information immediately available.';
                    myForm.customerCountHelp = 'Enter the total number of customers that are currently using ' + myForm.formData.productName + '.';
                    myForm.topCustomerCountHelp = 'Enter the number of customers that the client considers their top customers using ' + myForm.formData.productName + '. Typically this is the number of customers that make up 80% of their renewal revenue for ' + myForm.formData.productName + '.';
                    myForm.avgAnnualSpendHelp = 'Enter the amount that a customer spends on average in a given year with the client for ' + myForm.formData.productName + '.';
                    myForm.revenueRetentionHelp = 'Enter the percent of renewal revenue that the client retains on average each year. Example: if a client did $10M in renewal revenue for ' + myForm.formData.productName + ' last year, and they expect to do $8M in renewal revenue with those same customers, then their revenue retention rate is 80%.';
                    myForm.customerRetentionHelp = 'Enter the customer retention rate for ' + myForm.formData.productName + ' for the client, which is the percent of customers using ' + myForm.formData.productName + ' that the client retains each year.';
                    myForm.accountManagersHelp = 'Enter the number of account managers, or the role responsible for securing renewals with existing customers for ' + myForm.formData.productName + '.';
                }
            }
        });

        $urlRouterProvider.otherwise('/form/new');
    })
    .controller('formController', function( $scope ) {
        var vm = this;
        vm.formData = {};
        vm.products = [];
        vm.processForm = function() {
            alert('processed!');
        };

        var initDone = false;

        vm.showCorrectGlyph = function( clickState ) {
            var clicked = 'glyphicon glyphicon-chevron-down';
            var hide = 'glyphicon glyphicon-chevron-right';
            if ( clickState ) {
                return clicked;
            }
            return hide;
        };

        vm.showSalesRepHelp = false;
        vm.showAvgDealSizeHelp = false;
        vm.showEstimatedWinRateHelp = false;
        vm.showCompetitorCountHelp = false;
        vm.showNewLogoRevenueHelp = false;
        vm.showCustomerCountHelp = false;
        vm.showTopCustomerCountHelp = false;
        vm.showAvgAnnualSpendHelp = false;
        vm.showRevenueRetentionHelp = false;
        vm.showCustomerRetentionHelp = false;
        vm.showAccountManagerHelp = false;

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