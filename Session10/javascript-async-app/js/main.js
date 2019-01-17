(function() {
  var app = angular.module("myApp", []);

  app.controller("demoCtrl", ["$scope", DemoController]);

  function DemoController($scope) {
    // Your Code Here
    // Callback
    $.get("https://jsonplaceholder.typicode.com/users", function(users) {
      users.forEach((user) => {
        $.get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`, (posts) => {
          user.posts = posts;
          posts.forEach((post) => {
            $.get(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`, (comments) => {
              post.comments = comments;
              $scope.$apply(() => {
                $scope.users = users;
              })
            })
          });
        })
      })
    });
  }

  // Promise
  // fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((users) => {
  //       return users.json();
  //     })
  //     .then((users) => {
  //       users.forEach((user) => {
  //         fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
  //           .then((posts) => {
  //             return posts.json();
  //           })
  //           .then((posts) => {
  //             user.posts = posts;
  //             posts.forEach((post) => {
  //               fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
  //                 .then((comments) => {
  //                   return comments.json();
  //                 })
  //                 .then((comments) => {
  //                   post.comments = comments;
  //                   $scope.$apply(function() {
  //                     $scope.users = users;
  //                 });                  
  //                 })
  //             })

  //           })
  //       })
  //     })
  
})();

