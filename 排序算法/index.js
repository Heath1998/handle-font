function quicksort(arr, start, end) {
  if(start < end) {
    let mid = partition(arr, start, end);
    console.log(arr)
    quicksort(arr, start, mid -1);
    quicksort(arr,mid+1,end);
  }
}

function partition(arr,start,end) {
  let pivotIndex = start;
  let pivotValue = arr[end];
  for(let i=start;i<end;i++) {
    if (pivotValue > arr[i]) {
      [arr[pivotIndex], arr[i]] = [arr[i], arr[pivotIndex]];
      pivotIndex++;
    }
  }
  [arr[end],arr[pivotIndex]] = [arr[pivotIndex], arr[end]];
  return pivotIndex;
}


// var arr = [6,7,4,2,5,9,1];
// quicksort(arr,0,arr.length-1);
// console.log(arr);

function quickSortK(arr, k) {
  let low = 0,hi = arr.length-1;
  while(low<=hi) {
    let mid = partitionK(arr,low,hi);
    console.log(mid);
    console.log(arr);
    if(mid === k-1) {
      return arr[mid];
    } 
    mid < k - 1 ? low = mid + 1 : hi = mid - 1
  }

}

function partitionK(arr,low,hight) {
  let mid = Math.floor(low + (hight - low) / 2)

  let pivotValue = arr[mid];
  [arr[mid], arr[hight]] = [arr[hight], arr[mid]];
  let i=low,j = hight-1;

  while(i<=j) {
    while(arr[i] > pivotValue) i++;
    while(arr[j] < pivotValue) j--;
    if(i<=j) {
      [arr[i],arr[j]] = [arr[j], arr[i]];
      i++;j--;
    }
  }
  [arr[i], arr[hight]] = [arr[hight], arr[i]];
  return i;
}


console.log(quickSortK([2,3,1,56,7], 2));
console.log('------')

var findKthLargest = function (nums, k) {
  let low = 0
  let high = nums.length - 1
  while (low <= high) {
    const mid = partition(nums, low, high)
    console.log(mid);
    console.log(nums);
    if (mid === k - 1) return nums[mid]
    mid < k - 1 ? low = mid + 1 : high = mid - 1
  }

}

function partition(arr, low, high) {
  let mid = Math.floor(low + (high - low) / 2)
  const pivot = arr[mid]; // 这里记得添加分号 
  // 把pivot放在arr的最后面
  [arr[mid], arr[high]] = [arr[high], arr[mid]]
  let i = low
  // 把pivot排除在外,不对pivot进行排序
  let j = high - 1
  while (i <= j) {
    while (arr[i] > pivot) i++
    while (arr[j] < pivot) j--
    if (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]]
      i++; j--;
    }
  }
  // 因为arr[i]是属于left的,pivot也是属于left的
  // 故我们可以把原本保护起来的pivot和现在数组的中间值交换
  [arr[high], arr[i]] = [arr[i], arr[high]]
  return i
}
console.log(findKthLargest([2,3,1,56,7], 2));



