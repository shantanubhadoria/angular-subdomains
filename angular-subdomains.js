/**
 * @license angular-subdomains
 * (c) Shantanu Bhadoria. https://www.shantanubhadoria.com
 * License: MIT
 */
(function(angular) {'use strict';
  var name = 'subdomains';

  angular.module(
    name,
    []
  ).factory(name, ['$location', function ($location) {
    var host = $location.host();
    if (host.indexOf('.') < 0)
      return null;
    else
      return host.split('.');
  }]);
})(window.angular);
