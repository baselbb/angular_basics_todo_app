'use strict';

angular.module('todoListApp')

.controller('mainCtrl', function($scope, dataService) {
  
  $scope.addTodo = function() {
    var todo = {name: "This is a new todo."};
    $scope.todos.push(todo);
  };
  
  $scope.helloWorld = dataService.helloWorld;
  
 dataService.getTodos(function(response){
   console.log(response.data);
   $scope.todos = response.data;
 });

  $scope.deleteTodo = function (todo, $index){  
  // we invoke or fire the function here
    dataService.deleteTodo(todo);
    //we pass index for ng-repeat which deletes the todo in the view by pasing it the index of the deleted todo
    $scope.todos.splice($index, 1);
  };
  
  $scope.saveTodos = function(){
    var filteredTodos = $scope.todos.filter(function(todo) {
      if(todo.edited) {
      return todo;
      };
    })
    dataService.saveTodos(filteredTodos);
  };
  
})