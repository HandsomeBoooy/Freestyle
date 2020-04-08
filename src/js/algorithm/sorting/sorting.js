class Sorting {
    constructor() {}

    insertionSort(arr) {
        if (arr && arr.length) {
            var preIndex, current;
            for(var i = 1; i < arr.length; i++) {
                preIndex = i - 1;
                current = arr[i];
                while(preIndex >= 0 && arr[preIndex] > current) {
                    arr[preIndex + 1] = arr[preIndex];
                    preIndex--;
                }
                arr[preIndex + 1] = current;
            }
        }
        return arr;
    }

    ultimateSorting(arr) {
        if (arr && arr.length) {
            return arr.sort((a, b) => a - b);
        } else {
            return arr;
        }
    }
}