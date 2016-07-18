
(function(window, angular) {'use strict';
  var name = 'subdomains';

  angular.module(
    name,
    []
  ).factory(name, ['$location', function ($location) {
      var host = $location.host();
      if (host.indexOf('.') < 0)
          return null;
      else
          return host.split('.')[0];
  }]);
)(window, window.angular);;
