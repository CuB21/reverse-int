module.exports = function reverse (n) {
  const string = n.toString();
  const array = Array.from(string);
  
  const newArray = array.reverse();
  const newString = newArray.join('');
  return parseInt(newString);
}
