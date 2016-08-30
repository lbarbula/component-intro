(function () {
  "use strict"
function fetchMovies($http) {
  return $http.get("movies.json")
    .then(function (response){
      return response.data
    })
}
function controller($http) {
    var model = this
    model.$onInit = function() {
      fetchMovies($http)
        .then(function(movies){
          model.movies = movies
        })
    }
    model.upVote = function(movie) {
      if(movie.rating < 5) {
        movie.rating += 1
      }
    }
    model.downVote = function (movie) {
      if(movie.rating > 1) {
        movie.rating -= 1
      }
    }
  }

angular
  .module("psMovies")
  .component("movieList", {
    templateUrl: "movie-list.componenent.html",
    controllerAs: "model",
    controller: ["$http", controller]
  })

})()
