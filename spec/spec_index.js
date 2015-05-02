// ES5 shims for Function.prototype.bind, Object.prototype.keys, etc.
require('core-js/es5');

// require all modules ending in "Specs" from the
// current directory and all subdirectories
var specsContext = require.context(".", true, /Spec.js$/);
specsContext.keys().forEach(specsContext);


