function sortedFrequency(arr, value) {
    let count = 0;
    for (let i = 0; i<arr.length; i++){
        if (arr[i] == value){
            count++;
        }
    }

    if (count == 0){
        return -1;
    }
    
    return count;

}

module.exports = sortedFrequency