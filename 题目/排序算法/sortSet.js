// 冒泡
function bubbleSort(arr) {
  for(let i=0;i<arr.length;i++)
    for(let j=0;j<arr.length-1-i;j++) {
      if(arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  return arr;
}

// let arr = [3,44,1,55,8,5,9,5];
// bubbleSort(arr);
// console.log(arr);



// 归并排序，分为分割和合并
function splitSort(arr, temp, left, right) {
  if (left < right) {
    let mid = Math.floor((left + right)/2);
    splitSort(arr, temp, left, mid);
    splitSort(arr, temp, mid+1, right);
    merge(arr, temp, left, mid, right);
  }
}

function merge(arr, temp, left, mid, right) {
  let i = left, j = mid+1, k = 0;
  while(i<=mid && j<=right) {
    temp[k++] = arr[i] > arr[j] ? arr[j++] : arr[i++];
  }
  while(i<=mid) {
    temp[k++] = arr[i++];
  }
  while(j<=right) {
    temp[k++] = arr[j++];
  }

  for(let z = 0;z<k;z++) {
    arr[left+z] = temp[z];
  }
}

// let arr = [3,44,1,55,8,5,9,5];
// splitSort(arr,[],0,arr.length-1);
// console.log(arr);

//  堆排序不稳定排序，主要写好堆调整，从当前位置一直向下调整
function heapify(arr, i, len) {
  let left = i*2;
  let right = i*2+1;
  let largest = i;
  if(left < len && arr[largest] < arr[left]) {
    largest = left;
  }
  if(right < len && arr[largest] < arr[right]) {
    largest = right;
  }
  if(largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, largest, len);
  }
}

function buildMaxHeap(arr) {
  let len = arr.length;
  for(let i=Math.floor(len/2);i >= 0; i--) {
    heapify(arr, i, len);
  }
}

function heapSort(arr) {
  buildMaxHeap(arr);
  let len = arr.length;
  for(let i= arr.length-1;i>0;i--) {
    [arr[0],arr[i]] = [arr[i], arr[0]];
    len--;
    heapify(arr, 0, len);
  }
}

// let arr = [3,44,1,55,8,5,9,5];
// heapSort(arr);
// console.log(arr);


// 快速排序
function quickSort(arr, left, right) {
  if(left < right) {
    let mid = partition(arr, left, right);
    quickSort(arr, left,mid-1);
    quickSort(arr, mid+1, right);
  }
}

function partition(arr, left, right) {
  let pivot = left;
  let pivotVal = arr[right];
  for(let i=left;i<right;i++) {
    if(arr[i] < pivotVal) {
      [arr[i], arr[pivot]] = [arr[pivot], arr[i]];
      pivot++;
    }
  }
  [arr[pivot], arr[right]] = [arr[right],arr[pivot]];
  return pivot;
}

let arr = [3,44,1,55,8,5,9,5];
quickSort(arr,0, arr.length-1);
console.log(arr);