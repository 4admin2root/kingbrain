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


mobile.controller("godController",function($scope){
    $scope.playMusic=false;
    $scope.$on('playMusic',function(){
        $scope.playMusic=true;
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

mobile.controller("startController",function($scope,$http,$state){
    $scope.init=function(){
        $scope.$emit('playMusic');
    }
    $scope.startGame=function(){
        $state.go("game");
    }
})


mobile.controller("gameController",function($scope,$http,$state){
    $scope.total = 4;
    $scope.currentNum=1;

    $scope.init=function(){
        $http({
            method:"GET",
            url:"http://45.63.124.245:8080/question"
        }).then(function(result){
            $scope.subject = result.data[0];
            updateProgress()
            console.log($scope.subject)
        })
    }

    function updateProgress(){
        if($scope.currentNum==$scope.total){
            $state.go("success");
        }
        $scope.progress={
            width:($scope.currentNum/$scope.total)*100+'%'
        }
    }

    $scope.answer=function(answer){
        console.log(answer)
        $scope.currentNum++;
        updateProgress();
    }
    



})

mobile.controller("successController",function($scope,$http,$state){
    $scope.giveMeMoney=function(){
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

mobile.controller("resultController",function($scope,$http,$state){
    $scope.startGame=function(){
        $state.go("game");
    }
})


mobile.controller("failedController",function($scope,$http,$state){
    $scope.startGame=function(){
        $state.go("game");
    }
})