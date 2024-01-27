// Sample JavaScript file

function hello(name) {
  console.log('Hello ' + name);
}

/* eslint-disable no-undef */
if (typeof module !== 'undefined') {
  module.exports = hello;
}
/* eslint-enable no-undef */
