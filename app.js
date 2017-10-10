var arrays = [
  [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1],
  [-1,-8,-2],
  [1,7,3],
  [1,undefined,3,5,-3],
  [1,NaN,3,5,-3]
]

arrays.forEach(function (array) {
  document.write('<div>'+minMaxSum(array)+'</div>')
})

function minMaxSum(array) {
  var max = null
  var min = null
  var sum = null
  array.forEach(function (item) {
    if (item != null && typeof item == 'number' && !Number.isNaN(item)) {
      if (!max || max < item) max = item
      if (!min || min > item) min = item
      sum += item
    }
  })
  return [max, min, sum]
}
