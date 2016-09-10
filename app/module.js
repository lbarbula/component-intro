(function() {
  "use strict";
  angular
    .module('psMovies', ['ngComponentRouter'])
    .value("$routerRootComponent", "movieApp")
    .component("appAbout", {
      template: "this is the about page"
    })
})()
