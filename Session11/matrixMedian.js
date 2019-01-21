function matrixMedian(matrix) {
    // Tìm 2 giá trị đầu và cuối của ma trận
    // Sau khi tìm 2 giá trị đầu và cuối ta sẽ được khoảng chặn
    // Giá trị median sẽ là giá trị lớn hơn Math.floor(m * n / 2) phần tử
    // Duyệt qua từng mảng trong ma trận và sử dụng binarySearch để tìm giá trị nhỏ hơn giá trị cần kiểm tra
    // Trả về kết quả
    let min = +Infinity;
    let max = -Infinity;
    let medianValue = Math.floor((matrix[0].length * matrix.length) / 2);
    for (let i = 0; i < matrix.length; i++) {
        min = Math.min(min, matrix[i][0]);
        max = Math.max(max, matrix[i][matrix[i].length - 1]);
    }

    let count;
    let present;
    debugger;
    for (let i = min; i <= max; i++) {
        count = 0;
        present = 0;
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[j].includes(i)) {
                present++;
            }
            count = count + arraySearch(matrix[j], i);
            if (count === medianValue && present != 0) {
                return i;
            }
        }
    }
}

function arraySearch(array, num) {
    if (array.includes(num)) {
        return array.indexOf(num);
    }
    for (let i of array) {
        if (i > num) {
            return array.indexOf(i);
        }
    }
    return array.length;
}

console.log(matrixMedian([[1 ,3, 5], [2, 6, 9], [3, 6, 9]]))