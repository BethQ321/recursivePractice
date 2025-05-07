function fibsRec(num) {

    if(num === 1) {
        return [0];
    } else if(num === 2) {
        return[0,1];
    }

    let sum = fibsRec(num - 1);
    sum.push(sum[sum.length-1] + sum[sum.length-2]);
    return sum;
}
console.log("fibonacci:", fibsRec(8));

// num = 5 
//     num = 4 
//         num = 3 
//             num = 2 
//             [0, 1]
//         [0, 1, 1]
//     [0, 1, 1, 2]
// [0, 1, 1, 2, 3]

array1 = [3, 2, 1, 13, 8, 5, 0, 1];
array2 = [105, 79, 100, 110];

function mergeSort(arr) {
    if(arr.length === 0) {
        return []
    };

    const lowerArray = [];
    const higherArray = [];
    for(let i = 1; i < arr.length; i++) {
        if(arr[0] > arr[i]) {
            lowerArray.push(arr[i]);
        } else {
            higherArray.push(arr[i]);
        }
    };
    return [...mergeSort(lowerArray), arr[0], ...mergeSort(higherArray)];
}

console.log(mergeSort(array1));
console.log(mergeSort(array2));