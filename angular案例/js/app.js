angular.module('myApp', [])
    .controller('MyCtrl', ['$scope', ($scope) => {
        $scope.todos = [{
            data: '吃饭',
            flag: true
        }, {
            data: '打豆豆',
            flag: false
        }, {
            data: '睡觉',
            flag: false
        }];
        $scope.add = () => {

            $scope.todos.push({ data: $scope.txt, flag: false });
            $scope.txt = '';
        };
        $scope.remove = () => {
            $scope.todos = $scope.todos.filter(function(item) {

                return item.flag === false

            })
        }
    }])