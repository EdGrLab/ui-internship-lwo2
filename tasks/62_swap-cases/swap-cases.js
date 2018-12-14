export function swapCases(str) {
  let result = str.split('').map(function(_case) {
    return _case === _case.toUpperCase() ?
    _case.toLowerCase() : _case.toUpperCase();
  }).join('');
  return result;
}
