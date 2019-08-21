class Sorting {
    constructor() {}

    insertionSorting(arr) {
        var len = arr.length;
        var preIndex, current;
        for (var i = 1; i < len; i++) {
            preIndex = i - 1;
            current = arr[i];
            while (preIndex >= 0 && arr[preIndex] > current) {
                arr[preIndex + 1] = arr[preIndex];
                preIndex--;
            }
            arr[preIndex + 1] = current;
        }
        return arr;
    }
    bubbleSorting(arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] < arr[j]) {
                    arr[j] = arr[j] - arr[i];
                    arr[i] += arr[j];
                    arr[j] = arr[i] - arr[j];
                }
            }
        }
        return arr;
    }
}