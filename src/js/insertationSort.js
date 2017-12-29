class Sort {

    constructor() {

    }

    insertionSort(arr, key) {
        if (arr && arr.length) {
            for (let i = 1; i < arr.length; i++) {
                if (key !== '' && key !== undefined && key !== null) {
                    if (arr[i - 1][key] > arr[i][key]) {
                        let temp = arr[i],
                            tempIndex = i;
                        while (tempIndex > 0 && arr[i - 1][key] > temp[key]) {
                            arr[tempIndex] = arr[tempIndex - 1];
                            tempIndex--;
                        }
                        arr[tempIndex] = temp;
                    }
                } else {
                    if (arr[i - 1] > arr[i]) {
                        let temp = arr[i],
                            tempIndex = i;
                        while (tempIndex > 0 && arr[i - 1] > temp) {
                            arr[tempIndex] = arr[tempIndex - 1];
                            tempIndex--;
                        }
                        arr[tempIndex] = temp;
                    }
                }
            }
        }
    }

    bubbleSort(arr) {
        if (arr && arr.length) {
            for (let i = 0; i < arr.length; i++) {
                for (let j = 1; j < arr.length; j++) {
                    if (arr[i] > arr[j]) {
                        exchangeVlue(arr[i], arr[j]);
                    }
                }
            }
        }
    }

    cocktailSort(arr) {
        // let 
    }

    exchangeVlue(a, b) {
        a = a + b;
        b = a - b;
        a = a - b;
    }
}