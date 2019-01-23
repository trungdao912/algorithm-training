// You have to paint N boards of length {A0, A1, A2, A3 … AN-1}. There are K painters available and you are also given how much time a painter takes to paint 1 unit of board. You have to get this job done as soon as possible under the constraints that any painter will only paint contiguous sections of board.
// Note:
// 1. 2 painters cannot share a board to paint. That is to say, a board
// cannot be painted partially by one painter, and partially by another.
// 2. A painter will only paint contiguous boards. Which means a
// configuration where painter 1 paints board 1 and 3 but not 2 is
// invalid.

// Return the ans % 10000003
// Input :
// K : Number of painters
// T : Time taken by painter to paint 1 unit of board
// L : A List which will represent length of each board

// Output:
//      return minimum time to paint all boards % 10000003

// Bạn phải sơn N tấm bảng có độ dài {A0,... An}. Sẽ có K painters và sẽ biết được một painter mất bao lâu thời gian để sơn xong 1 đơn vị bảng. Bạn bắt buộc phải làm xong việc sớm nhất có thể dưới điều kiện  là các painter chỉ được phép sơn các bảng gần nhau.
/*
Chú ý:
1. 2 painter không được phép sơn 1 bảng. 
2. Painter phải sơn các bảng có thứ tự sát nhau. Ví dụ sơn 1 và 3 bỏ qua 2 là không hợp lệ.
Input : 
  K : 2 Number of painters
  T : 5 Time taken by painter to paint 1 unit of board
  L : [1, 10] A List which will represent length of each board

Output : 50
*/ 

// Ta sẽ tính được thời gian tối đa và thời gian tối thiểu để sơn hết bảng -> Tìm được khoảng chặn trên dưới
// Chia ra tìm điểm mid
// Viết một hàm nhận vào giá trị mid f(mid) kiểm tra xem cần bao nhiêu painter để sơn xong các bảng với (mid) thời gian
// Tìm được khoảng mid phù hợp -> Trả ra khoảng mid

// Hàm tìm ra cần bao nhiêu painter để sơn hết bảng trong thời gian yêu cầu
function paintersNeeded(boards, num) {
    let painter = 1;
    let time = 0;
    
    for (let i = 0; i < boards.length; i++) {
        time = time + boards[i];

        if (time > num) {
            painter++;
            time = 0;
            i--;
        }
    }

    return painter;
}

function painterPartion(boards, painters, time) {
    let max = boards.reduce((a, b) => a + b); // chặn trên
    let min = Math.max(...boards);// chặn dưới
    let result;
    
    while (min < max) {
        let mid = Math.floor((min + max) / 2);
        if (paintersNeeded(boards, mid) > painters) {
            min = mid + 1;
        } 

        if (paintersNeeded(boards, mid) <= painters) {
            max = mid - 1;
        }

        if (paintersNeeded(boards, mid) === painters) {
            result = mid;
        }
    }

    return result * time;
}

console.log(painterPartion([1,10], 2, 5));



