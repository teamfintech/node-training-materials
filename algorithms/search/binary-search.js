

function binarySearch(arr, l, r, v) {
    if(r >= l) {
        let mid = l + parseInt((r - l) / 2);
        if(arr[mid] === v)
            return mid;
        if(v < arr[mid])
            return binarySearch(arr, l, mid - 1, v);
        else 
            return binarySearch(arr, mid + 1, r, v);
    }
    return -1;
}


module.exports = binarySearch;