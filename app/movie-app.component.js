(function() {
  "use strict";

  angular
    .module("psMovies")
    .component("movieApp", {
      templateUrl: "movie-app.component.html",
      $routeConfig: [
        { path: "/home", component: "movieList", name:"List"},
        { path: "/about", component: "appAbout", name:"About"},
        { path: "/detail/:id/...", component: "movieDetails", name: "Details"},
        { path: "/**", redirectTo:["List"]  }
      ]
    })
}())
