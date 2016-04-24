(function(){
    var app = angular.module('app',[]);

    app.controller('MainController', ['$scope', function($scope) {
        console.log("controller initialized");

        $scope.isEngines = false;
        $scope.isBelts = false;
        $scope.isControls = false;
        $scope.isHelmets = false;
        $scope.isBatBelt = false;
        $scope.isBatHelmet = false;
        $scope.isBatEngine = false;
        $scope.isAquariumHelmet = false;
        $scope.is60sControls = false;
        $scope.is80sControls = false;
        $scope.isRocket = false;
        $scope.isWaterJet = false;
        $scope.isPlanetBelt = false;
        $scope.isArrowBelt =false;
        $scope.isStepOne = true;
        $scope.isStepTwo = false;
        $scope.isStepThree = false;


        $scope.showEngines = function() {
            $scope.reset();
            console.log("showEngines", $scope.isEngines);
            $scope.isEngines = true;
        };

        $scope.showBelts = function() {
            $scope.reset();
            console.log("showBelt", $scope.isBelts);
            $scope.isBelts = true;
        };

        $scope.showControls = function(){
            $scope.reset();
            console.log("showControls", $scope.isControls);
            $scope.isControls = true;
        }

        $scope.showHelmets = function(){
            $scope.reset();
            console.log("showControls", $scope.isHelmets);
            $scope.isHelmets = true;
        }



        $scope.displayInfoControls = function(a) {
            console.log("displayInfoControls", a);
                if (a == '60s'){
                $scope.is80sControls = false;
                $scope.is60sControls = !$scope.is60sControls;
            }
            else if (a == '80s'){
                $scope.is60sControls = false;
                $scope.is80sControls = !$scope.is80sControls;
            }
        }

        $scope.dispayInfoEngine = function(a) {
            console.log("dispayInfoEngine", a);
            if(a === 'bat') {
                $scope.isWaterJet = false;
                $scope.isRocket = false;
                $scope.isBatEngine = !$scope.isBatEngine;
            }
            else if (a == 'water'){
                $scope.isRocket = false;
                $scope.isBatEngine = false;
                $scope.isWaterJet = !$scope.isWaterJet;
            }
            else if (a = 'rocket'){
                $scope.isWaterJet  = false;
                $scope.isBatEngine = false;
                $scope.isRocket = !$scope.isRocket;
            }

        }
        $scope.dispayInfoBelt = function(a) {
            console.log("dispayInfoBelt", a);
            if(a === 'bat') {
                $scope.isPlanetBelt = false;
                $scope.isArrowBelt = false;
                $scope.isBatBelt = !$scope.isBatBelt;
            }
            if(a === 'arrow') {
                $scope.isBatBelt = false;
                $scope.isPlanetBelt = false;
                $scope.isArrowBelt = !$scope.isArrowBelt;
            }

            if(a === 'planet') {
                $scope.isBatBelt = false;
                $scope.isArrowBelt = false;
                $scope.isPlanetBelt = !$scope.isPlanetBelt;
            }

        }
        $scope.displayInfoHelmet = function(a) {
            console.log("displayInfoHelmet", a);
            if(a === 'bat') {
                $scope.isAquariumHelmet =false;
                $scope.isBatHelmet = !$scope.isBatHelmet;
            }
            else if (a == 'aquarium') {
                $scope.isBatHelmet = false;
                $scope.isAquariumHelmet = !$scope.isAquariumHelmet;
            }
        }

        $scope.showStep = function(a) {
            if (a === 1) {
                $scope.isStepOne = true;
                $scope.isStepTwo = false;
                $scope.isStepThree = false;

            }
            if (a === 2) {
                 $scope.isStepOne = false;
                 $scope.isStepTwo = true;
                 $scope.isStepThree = false;

            }
            if (a === 3) {
                $scope.isStepOne = false;
                $scope.isStepTwo = false;
                $scope.isStepThree = true;

            }
        }

        $scope.reset = function() {
            console.log('reset!');
            $scope.isEngines = false;
            $scope.isBelts = false;
            $scope.isControls = false;
            $scope.isHelmets = false;
        }

    }]);
})();


