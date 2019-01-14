function matrixProduct(matrix) {
    let minMatrix = [];
    let maxMatrix = [];
    let tempMin;
    let tempMax;

    // Tạo ra ma trận chứa giá trị min và ma trận chứa giá trị max
    for (let i = 0; i < matrix.length; i++) {
        minMatrix[i] = [];
        maxMatrix[i] = [];
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < matrix[0].length; column++) {
            // Tại cột và hàng = 0 thì sẽ trả về giá trị mặc định
            if (row == 0 && column == 0) {
                minMatrix[row][column] = matrix[row][column];
                maxMatrix[row][column] = matrix[row][column];
                continue;
            }
            let minVal = +Infinity;
            let maxVal = -Infinity;

            if (column > 0) {
                tempMin = Math.min(matrix[row][column] * minMatrix[row][column - 1], matrix[row][column] * maxMatrix[row][column - 1]);
                minVal = Math.min(tempMin, minVal);

                tempMax = Math.max(matrix[row][column] * minMatrix[row][column - 1], matrix[row][column] * maxMatrix[row][column - 1]);
                maxVal = Math.max(tempMax, maxVal);
            }

            if (row > 0) {
                tempMin = Math.min(matrix[row][column] * minMatrix[row - 1][column], matrix[row][column] * maxMatrix[row - 1][column]);
                minVal = Math.min(tempMin, minVal);

                tempMax = Math.max(matrix[row][column] * minMatrix[row - 1][column], matrix[row][column] * maxMatrix[row - 1][column]);
                maxVal = Math.max(tempMax, maxVal);
            }
            minMatrix[row][column] = minVal;
            maxMatrix[row][column] = maxVal;
        }
    }

    return maxMatrix[matrix.length - 1][matrix[0].length - 1];
}

console.log(matrixProduct([[-1, 2, 3], [4, 5, -6], [7, 8, 9]]));