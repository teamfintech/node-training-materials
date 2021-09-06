

function insertionSort(arr, order = "ASC") {
    for (let j = 1; j < arr.length; j++) {
        const key = arr[j];
        let i = j - 1;
        while(i >= 0) {
            switch(order) {
                case "ASC":
                    if(key < arr[i]) {
                        arr[i+1] = arr[i];
                        arr[i] = key;
                    }
                    break;
                case "DESC":
                    if(key > arr[i]) {
                        arr[i+1] = arr[i];
                        arr[i] = key;
                    }
                    break;
            }
            
            i--;
        }
    }
    return arr;
}


module.exports = insertionSort;