var audio = document.getElementById('music');


var DEVING=false;

var PRO_GET_A_RANDOM_QUESTION="http://king.joeybox.top:8080/api/user/1/question";
var PRO_CHECK_ANSWER_IS_CORRECT="http://king.joeybox.top:8080/api/user/1/answer";

var DEV_GET_A_RANDOM_QUESTION="http://10.205.124.154:8080/user/1/question";
var DEV_CHECK_ANSWER_IS_CORRECT="http://10.205.124.154:8080/user/1/answer";






var mobile = angular.module("mobile", ["ui.router"]);

mobile.config(function ($stateProvider, $urlRouterProvider,$httpProvider) {

    var loginState = {
        name: 'login',
        url: '/login',
        templateUrl: 'partials/login.html'
    }

    var startState = {
        name: 'start',
        url: '/start',
        templateUrl: 'partials/start.html'
    }

    var gameState = {
        name: 'game',
        url: '/game',
        templateUrl: 'partials/game.html'
    }

    var successState = {
        name: 'success',
        url: '/success',
        templateUrl: 'partials/success.html'
    }

    var failedState = {
        name: 'failed',
        url: '/failed',
        templateUrl: 'partials/failed.html'
    }
    var resultState = {
        name: 'result',
        url: '/result',
        templateUrl: 'partials/result.html'
    }
    $stateProvider.state(loginState);
    $stateProvider.state(startState);
    $stateProvider.state(gameState);
    $stateProvider.state(successState);
    $stateProvider.state(failedState);
    $stateProvider.state(resultState);

    $urlRouterProvider.when('/', 'login');

    $httpProvider.interceptors.push("httpInterceptor");
});


mobile.run(function($rootScope){
    $rootScope.loading=true;
})


mobile.factory('httpInterceptor',["$rootScope",function($rootScope){
    return {
        request:function(config){
            $rootScope.loading=true;
            return config;
        },
        response:function(response){
            $rootScope.loading=false;
            return response;
        },
        requestError:function(error){
            $rootScope.loading=false;
            return error;
        },
        responseError:function(error){
            $rootScope.loading=false;
            return error;
        }
    }
}])

mobile.controller("godController", function ($scope) {
    $scope.playMusic = false;
    $scope.$on('playMusic', function () {
        $scope.playMusic = true;
    })

})

mobile.controller("loginController", function ($scope, $http, $state) {
    $scope.login = function () {
        PostbirdAlertBox.confirm({
            'title': '需要你确认',
            'content': '确认授权微信登录',
            'okBtn': '是',
            'contentColor': 'red',
            'onConfirm': function () {
                $state.go("start")
            },
            'onCancel': function () {

            }
        });
    }
})

mobile.controller("startController", function ($scope, $http, $state) {
    $scope.init = function () {
        audio.play();
    }
    $scope.startGame = function () {
        $state.go("game");
    }
})


mobile.controller("gameController", function ($scope, $http, $state) {


    function updateProgress() {
        if ($scope.currentNum == $scope.total) {
            $state.go("success");
        }
        $scope.progress = {
            width: ($scope.currentNum / $scope.total) * 100 + '%'
        }
    }

    function getAQuestion() {
        return $http({
            method: "GET",
            url: DEVING?DEV_GET_A_RANDOM_QUESTION:PRO_GET_A_RANDOM_QUESTION
        }).then(function (result) {
            $scope.subject = result.data.data;
            updateProgress()
        }, function (error) {
            $scope.badConnect = true;
        })
    }

    $scope.init = function () {
        $scope.badConnect = false;
        $scope.total = 10;
        $scope.currentNum = 0;
        getAQuestion();
    }



    $scope.answer = function (answer) {

        $http({
            method: "POST",
            url: DEVING?DEV_CHECK_ANSWER_IS_CORRECT:PRO_CHECK_ANSWER_IS_CORRECT,
            data: {
                questionId: $scope.subject.id,
                answer: answer
            }
        }).then(function (result) {
            var isCorrect = result.data.data;
            if (!isCorrect) {
                $state.go("failed");
            } else {
                $scope.currentNum++;
                updateProgress();
                getAQuestion();
            }

        }, function (error) {
            $scope.badConnect = true;
        })
    }




})

mobile.controller("successController", function ($scope, $http, $state) {
    $scope.giveMeMoney = function () {
        PostbirdAlertBox.confirm({
            'title': '需要你确认',
            'content': '提现到微信，确定吗？',
            'okBtn': '是',
            'contentColor': 'red',
            'onConfirm': function () {
                $state.go("result")
            },
            'onCancel': function () {

            }
        });
    }
})

mobile.controller("resultController", function ($scope, $http, $state) {
    $scope.startGame = function () {
        $state.go("game");
    }
})


mobile.controller("failedController", function ($scope, $http, $state) {
    $scope.startGame = function () {
        $state.go("game");
    }
})
