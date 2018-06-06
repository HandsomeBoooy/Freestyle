class Sorting {
    constructor() {}

    insertionSort(arr) {
        if (arr && arr.length) {
            for (let i = 1; i < arr.length; i++) {
                if (arr[i - 1] > arr[i]) {
                    let tempValue = arr[i],
                        tempIndex = i;
                    while (tempIndex > 0 && arr[i - 1] > tempValue) {
                        arr[tempIndex] = arr[tempIndex - 1];
                        tempIndex--;
                    }
                    arr[tempIndex] = tempValue;
                }
            }
        }
    }
}