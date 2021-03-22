function map(arr, callbackFunc) {
  let newArr = [];
  for(i=0; i<arr.length; i++) {
    newArr = callbackFunc(arr[i])
  }
  return newArr;
}