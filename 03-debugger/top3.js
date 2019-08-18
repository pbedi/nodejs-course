var rawArr = new Array(93, 17, 56, 91, 98, 33, 9, 38, 55, 78, 29, 81, 60);

function findLargest3(arr) {
  // sort descending
  arr.sort(function(a, b) {
    if (a < b) {
      return 1;
    } else if (a == b) {
      return 0;
    } else {
      return -1;
    }
  });

  console.log(arr + '/******/' + arr[0] + '/' + arr[1] + '/' + arr[2]);
  console.log(arr.slice(0, 3));
}

findLargest3(rawArr);
