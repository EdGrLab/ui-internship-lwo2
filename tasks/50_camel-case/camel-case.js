/* eslint-disable-next-line */
String.prototype.camelCase = function() {
  return this.split(' ').map(function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }).join('');
};
