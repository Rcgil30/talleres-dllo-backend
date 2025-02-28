function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function includes(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return true;
        }
    }
    return false;
}

function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

function missingNumbers(arr) {
    let min = arr[0];
    let max = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    
    let missing = [];
    for (let i = min; i <= max; i++) {
        if(!includes(arr, i)) {
            missing.push(i)
        }
    }
    return missing;
}