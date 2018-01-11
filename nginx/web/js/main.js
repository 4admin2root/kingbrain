
var audio = document.getElementById('music');



var mobile = angular.module("mobile", ["ui.router"]);


mobile.config(function ($stateProvider, $urlRouterProvider) {

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
});


mobile.controller("godController", function ($scope) {
    $scope.playMusic = false;
    $scope.$on('playMusic', function () {
        $scope.playMusic = true;
    })
})

mobile.controller("loginController", function ($scope, $http, $state) {
    $scope.login = function () {
        PostbirdAlertBox.confirm({
            'title': '确认',
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
        // $scope.$emit('playMusic');
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
            url: "http://king.joeybox.top:8080/api/question/random"
        }).then(function (result) {
            $scope.subject = result.data.data;
            updateProgress()
        }, function (error) {
            $scope.badConnect = true;
        })
    }

    $scope.init = function () {
        $scope.badConnect = false;
        $scope.total = 4;
        $scope.currentNum = 0;
        getAQuestion();
    }



    $scope.answer = function (answer) {

        $http({
            method: "POST",
            url: "http://king.joeybox.top:8080/api/user/1/answer",
            data: {
                questionId: $scope.subject.id,
                answer: answer
            }
        }).then(function (result) {
            console.log(result.data.data)
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
            'title': '确认',
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
