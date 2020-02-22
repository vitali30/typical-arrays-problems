function sortingMin (a, b){
  return (a-b)
}

function sortingMax (a, b){
  return (b-a)
}

exports.min = function min (array) {
  if (!array) return (0);
  else if (array.length == 0) return (0)
  else return (array.sort(sortingMin)[0]);
}

exports.max = function max (array) {
  
  if (!array) return (0);
  else if (array.length == 0) return (0)
  else return (array.sort(sortingMax)[0]);
}

exports.avg = function avg (array) {
  if (!array) return (0);
  else if (array.length == 0) return (0)
  else {
    let summ = 0;
    for (number of array){
      summ = summ + number
    }
    summ = summ / array.length;
    return (summ)
    }

}
// let array = [2,-24,13,-11,16,-12,-16,24,13,-38,19,-16,19,3,2,32,0,-10,-19,-27];
// console.log(exports.min(array));
