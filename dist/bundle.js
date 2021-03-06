'use strict';

angular.module('fireApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './home/home.html'
    }).state('about', {
        url: '/about',
        templateUrl: './about/about.html',
        controller: 'aboutCtrl'
    }).state('characters', {
        url: '/characters',
        templateUrl: './characters/characters.html',
        controller: 'charactersCtrl'
    }).state('video', {
        url: '/video',
        templateUrl: './video/video.html',
        controller: 'videoCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

angular.module('fireApp').controller('mainCtrl', function ($scope, mainSrv, $location, $anchorScroll) {
    $scope.scrollTo = function (id) {
        $location.hash(id);
        $anchorScroll();
    };
});
'use strict';

angular.module('fireApp').service('mainSrv', function () {
    this.mainService = 'mainservice is working';
});
'use strict';

angular.module('fireApp').controller('aboutCtrl', function ($scope, mainSrv) {});
'use strict';

angular.module('fireApp').controller('charactersCtrl', function ($scope) {});
'use strict';

angular.module("fireApp").directive('footer', function () {
    return {
        restrict: 'AE',
        templateUrl: 'footer/footer.html',
        controller: function controller($scope) {
            $scope.reloadPage = function () {
                location.reload();
            };
        }
    };
});
"use strict";
'use strict';

angular.module("fireApp").directive('navbar', function () {
    return {
        restrict: 'AE',
        templateUrl: 'navbar/navbar.html'
    };
});
'use strict';

angular.module('fireApp').controller('videoCtrl', function ($scope) {});