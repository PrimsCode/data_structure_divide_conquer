// function findFloor(arr, value) {
//     let leftIdx = 0;
//     let rightIdx = arr.length -1;
//     let floor = -1;

//     while(leftIdx <= rightIdx){
//         let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
//         let middleVal = arr[middleIdx];

//         if(value >= arr[rightIdx]){
//             floor = arr[rightIdx];
//         }

//         if (middleVal < value){
//             leftIdx = middleIdx + 1;
//             floor = arr[leftIdx];
//         } else if (middleVal > value) {
//             rightIdx = middleIdx - 1;
//             floor = arr[rightIdx];
//         } else {
//             floor = arr[middleIdx]
//             return floor;
//         }
//     }

//     return floor;
// }

function findFloor(arr, num, low = 0, high = arr.length - 1) {
    if (low > high) return -1;
    if (num >= arr[high]) return arr[high];
  
    let mid = Math.floor((low + high) / 2)
  
    if (arr[mid] === num) return arr[mid];
  
    if (mid > 0 && arr[mid - 1] <= num && num < arr[mid]) {
      return arr[mid - 1];
    }
  
    if (num < arr[mid]) {
      return findFloor(arr, num, low, mid - 1);
    }
  
    return findFloor(arr, num, mid + 1, high)
  }

module.exports = findFloor

