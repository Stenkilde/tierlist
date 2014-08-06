
/*================================================================
=>                  Controller = Main
==================================================================*/
/*global app*/

app.controller('MainCtrl', function ($scope, $http) {

    'use strict';

    $http({method: 'GET', url: 'app/main/mons.json'}).
        success(function(data, status, headers, config) {
            $scope.pokemons = data.pokemons;
            console.log($scope.pokemons);
        }).
        error(function(data, status, headers, config) {
        });
    });


/*-----  End of Controller = Main  ------*/



