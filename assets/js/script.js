var userListApp = angular.module('userListApp', []);

// Define the userListController controller on the `userListApp` module
userListApp.controller('UserListController', ['$scope', '$http', function UserListController($scope,$http) {
    $scope.users=[];
  $scope.searchText='';   
  $scope.userModel={
      "general": {
      "firstName": "",
      "lastName": "",
      "avatar": ""
    },
    "job": {
      "company": "",
      "title": ""
    },
    "contact": {
      "email": "",
      "phone": ""
    },
    "address": {
      "street": "",
      "city": "",
      "zipCode": "",
      "country": ""
    }
  };
    var previousChoise=null;
    
  document.getElementById("users").style.maxHeight=window.innerHeight+"px";
  document.getElementById("users").style.height=window.innerHeight+"px";  
    
    $http.get('clients.json').then(function(response) {
        // you can do some processing here
        $scope.users = response.data;
        for(var i=0;i<$scope.users.length;i++)
            {
               $scope.users[i].general.name=$scope.users[i].general.firstName+' '+$scope.users[i].general.lastName; 
                $scope.users[i].general.id=[i];
            }       
    });    

 $scope.GetUserInfo=function($event,user) {
     if (!previousChoise){ 
     previousChoise=$event.currentTarget;
         var cols = document.getElementsByClassName("title");
      for(i=0; i<cols.length; i++) {
      cols[i].style.visibility = 'visible';
  }
        
     }
     else{
       previousChoise.classList.remove("active");
       previousChoise=$event.currentTarget;
     }
      window.location="#"+user.general.name;
     $event.currentTarget.classList.add("active");
     $scope.UserModel=user;    
 };
    
}]);

