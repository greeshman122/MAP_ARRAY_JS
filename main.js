function mapArray(array, divisor) {
    return array.map(num => num / divisor);
}

function sortArrayAscending(array) {
    return array.slice().sort((a, b) => a - b);
}

function sortArrayDescending(array) {
    return array.slice().sort((a, b) => b - a);
}

function execute() {
    let numbers = document.getElementById('numbers').value.split(',').map(Number);
    let divisor = Number(document.getElementById('divisor').value);

    let mappedArray = mapArray(numbers, divisor);
    document.getElementById('mappedResult').innerText = 'Mapped Array: ' + mappedArray.join(', ');

    let sortedAscending = sortArrayAscending(mappedArray);
    document.getElementById('ascendingResult').innerText = 'Ascending Order: ' + sortedAscending.join(', ');

    let sortedDescending = sortArrayDescending(mappedArray);
    document.getElementById('descendingResult').innerText = 'Descending Order: ' + sortedDescending.join(', ');
}