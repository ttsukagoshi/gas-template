// Sample JavaScript file

function hello(name) {
  console.log('Hello ' + name);
}

/* eslint-disable no-undef */
if (typeof modules !== 'undefined') {
  modules.exports = hello;
}
/* eslint-enable no-undef */
