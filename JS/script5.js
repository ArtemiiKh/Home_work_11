const arr = [1, 2, 3, 4, 5];
for (let sum = 0, result = null; sum < arr.length; sum++) {
    result = Math.pow(arr[sum], 2) + result;
    console.log(result);
}