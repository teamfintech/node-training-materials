

/**
 * Worst case time complexity O(n log n)
 *  for divide log n
 *  for merge n
 * Algorithm
 * If r > l
     1. Find the middle point to divide the array into two halves:  
             middle m = l+ (r-l)/2
     2. Call mergeSort for first half:   
             Call mergeSort(arr, l, m)
     3. Call mergeSort for second half:
             Call mergeSort(arr, m+1, r)
     4. Merge the two halves sorted in step 2 and 3:
             Call merge(arr, l, m, r)
 */

function mergeSort(arrToSort) {

    function merge(arr, l, m, r) {
        // calc left and right array size 
        let leftArrSize = (m - l) + 1; // left array include middle element
        let rightArrSize = r - m;

        // initialize empty left and right array
        let leftArr = new Array(leftArrSize);
        let rightArr = new Array(rightArrSize);

        // copy data from main array to temp left and right array
        for (let i = 0; i < leftArrSize; i++)
            leftArr[i] = arr[l + i];
        for (let i = 0; i < rightArrSize; i++)
            rightArr[i] = arr[(m + 1) + i];

        let i = 0; // initial index of left array
        let j = 0; // initial index of right array
        let k = l; // initial index of merged array

        // compare left and right array element and merge the main array in sorted order
        while (i < leftArrSize && j < rightArrSize) {
            if (leftArr[i] <= rightArr[j]) {
                arr[k] = leftArr[i];
                i++
            }
            else {
                arr[k] = rightArr[j];
                j++
            }
            k++;
        }

        // merge the remianing element from left arr
        while (i < leftArrSize) {
            arr[k] = leftArr[i];
            i++;
            k++;
        }

        // merge the remianing element from right arr
        while (j < rightArrSize) {
            arr[k] = rightArr[j];
            j++;
            k++;
        }


    }

    function sort(arr, l, r) {
        // returning point
        if (l >= r)
            return;
        // calc middle of sub array
        let m = l + parseInt((r - l) / 2);
        // divide left portion of sub array
        sort(arr, l, m);
        // divide right portion of sub array
        sort(arr, m + 1, r);
        // merge the two portion in sorted order
        merge(arr, l, m, r);
    }

    sort(arrToSort, 0, arrToSort.length - 1);
    return arrToSort;
}


module.exports = mergeSort;