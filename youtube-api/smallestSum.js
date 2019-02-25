/* Ý tưởng: Từ array trên ta có thể suy ra được chặn trên chặn dưới của array đó. Chặn dưới sẽ là số lớn nhất 
của array và chặn trên sẽ là tổng tất cả các phần tử. Khi ta biết được chặn trên và chặn dưới, ta sẽ viết một hàm blockCount kiểm
tra xem block có thể chứa bao nhiêu phần tử. Nếu hàm trả ra số phần tử nhỏ hơn số K nhập vào thì ta sẽ giảm upperBoundaries ngược lại sẽ tăng
cuối cùng ta sẽ trả về được kết quả là block có tổng nhỏ nhất
*/

function smallestSum(K, M, arr) {
    let lowerBoundaries = max(arr); // chặn dưới
    let upperBoundaries = sum(arr); // chặn trên
    let mid;
    let block;
    let condition = true;
    debugger;
    
    if (lowerBoundaries > M) {
        return false;
    }

    while (condition) {
        mid = Math.floor((lowerBoundaries + upperBoundaries) / 2); // tìm điểm giữa
        block = blockCount(arr, mid); // Hàm kiểm tra block và so sánh với K

        if (block < K) {
            upperBoundaries = mid - 1; // Nếu nhỏ hơn thì giảm chặn trên
        } else if (block > K) {
            lowerBoundaries = mid + 1; // Lớn hơn thì tăng chặn dưới
        } else {
            return upperBoundaries;
        }
    }
}

function max(arr) { // Tìm max của array
    return Math.max(...arr);
}

function sum(arr) { // Tìm tổng của array
    return arr.reduce((a, b) => {
        return a + b;
    })
}

function blockCount(arr, mid) { // Hàm kiểm tra block
    let count = 0;
    let sum = 0;

    for (let i of arr) {
        if (sum + i > mid) {
            count++;
            sum = i;
        } else {
            sum += i;
        }
    }

    return count; // Trả về kết quả
}

console.log(smallestSum(3, 5, [2,1,5,1,2,2,2]));