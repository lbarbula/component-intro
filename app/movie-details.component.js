(function(){
  "use strict";
  var module = angular.module('psMovies')
    module.component('movieDetails', {
      templateUrl: "movie-details.component.html",
      $routeConfig: [
        {
          path: "/overview",
          component: "movieOverview",
          name: "Overview"
        },
        {
          path: "/cast",
          component: "movieCast",
          name: "Cast"
        },
        {
          path: "/director",
          component: "movieDirector",
          name: "Director"
        }
      ],
      controllerAs: "model",
      controller: function () {
        var model = this

        model.$routerOnActivate = function (next) {
          model.id = next.params.id
        }
      }
    })
    module.component('movieOverview', {
      template: "Hello World"
    })
    module.component('movieCast', {
      template: "Hello cast"
    })
    module.component('movieDirector', {
      template: "Hello director"
    })

}())
