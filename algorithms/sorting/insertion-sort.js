
/**
 * Worst Case Time Complexity O(n^2)
 * Algorithm
 * 1. Divide the array into two half sorted and unsorted (initially 0, 1..n)
 * 2. for each unsorted element make a room in the sorted array
 * 3. Insert the key in the room after each interation
 */
function insertionSort(arr, order= "ASC") {
    for (let j = 1; j < arr.length; j++) {
        const key = arr[j];
        let i = j - 1;
        if(order === "ASC") {
            while(i >= 0 && key < arr[i]) {
                arr[i+1] = arr[i];
                i--;
            }
        }
        else {
            while(i >= 0 && key > arr[i]) {
                arr[i+1] = arr[i];
                i--;
            }
        }
        
        arr[i+1] = key;
    }
    return arr;
}


module.exports = insertionSort;