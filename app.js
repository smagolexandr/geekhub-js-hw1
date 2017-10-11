var arrays = [
  [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1],
  [-1,-8,-2],
  [1,7,3],
  [1,undefined,3,5,-3],
  [1,NaN,3,5,-3]
]

var i = 0;
while (i <= arrays.length) {
    document.write('<div>'+minMaxSum(arrays[i])+'</div>')
    i++;
}

function minMaxSum(array) {
  var max = null
  var min = null
  var sum = null
    for (var i = 0; i <= array.length; i++){
        if (array[i] != null && typeof array[i] == 'number' && !Number.isNaN(array[i])) {
            if (!max || max < array[i]) max = array[i]
            if (!min || min > array[i]) min = array[i]
            sum += array[i]
        }
    }
  return [max, min, sum]
}
