// require all modules ending in "_test" from the
// current directory and all subdirectories
var specsContext = require.context(".", true, /Spec.js$/);
specsContext.keys().forEach(specsContext);

