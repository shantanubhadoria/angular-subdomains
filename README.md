## Description

This package breaks down subdomain data into an array and returns it.
e.g. If your host is abc.blogs.com This would return ['abc','blogs','com']. Note that the port number if any is ignored.

## Install

You can install this package either with `npm` or with `bower`.

### npm

```shell
npm install angular-subdomains
```

Then add `subdomains` as a dependency for your app:

```javascript
angular.module('myApp', [require('subdomains')]);
```

### bower

```shell
bower install angular-subdomains
```

Add a `<script>` to your `index.html`:

```html
<script src="/bower_components/angular-subdomains/angular-subdomains.js"></script>
```

Then add `subdomains` as a dependency for your app:

```javascript
angular.module('myApp', ['subdomains']);
```

If you are using Ecmascript your may import subdomains module directly
instead of using `<script>` tag in the index.html as well:

```javascript
import subdomains from 'angular-subdomains';
angular.module('myApp', [subdomains]);

```

Now you may inject 'subdomains' as a dependency in your controller as follows:

```javascript
app.controller('MyController', ['$scope', 'subdomains', function ($scope, subdomains) {
     // use subdomains same as any other variable
}]);
```

## License
The MIT License

Copyright (c) Shantanu Bhadoria. https://www.shantanubhadoria.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
