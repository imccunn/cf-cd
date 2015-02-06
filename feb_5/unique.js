function unique(arr) {
  var retArr=[];
  var seen = {};

  for (var i = 0; i < arr.length; i++) {
    var current - arr[i];
    if (!seen[current]) {
      seen[current] = 1;
      retArr.push(current);
    }
  }
  return retArr;
}

