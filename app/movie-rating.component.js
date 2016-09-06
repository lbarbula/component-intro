(function(){
  "use strict";

  angular
    .module('psMovies')
    .component("movieRating", {
      templateUrl: "movie-rating.component.html",
      bindings: {
        value: "<"
      },
      transclude: true,
      controllerAs: "model",
      controller: function () {
        var model = this
        model.$onInit = function () {
          model.entries = new Array(model.value)
        }
        model.$onChanges = function () {
          model.entries = new Array(model.value)
        }
      }
    })
}())
