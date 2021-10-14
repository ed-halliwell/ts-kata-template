function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      //             console.log(arr)
      if (arr[j] > arr[j + 1]) {
        //SWAP
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// console.log(bubbleSort([37,45,29,8]))
bubbleSort([37, 45, 29, 8]);
