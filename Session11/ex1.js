(function IIFE() {
    debugger;
  function foo(x) {
    var y = x * 2; // y = 4 (2)
    w = 42;
    return (z) => { // trả về function bar (3) - (6) hàm bar chạy với tham số là list1
      if (z.length > 3) {
        return z.map(function baz(v) {
          if (v > 3) return v + y;
          else return baz(v * 4);
        });// (10) trả về array có giá trị là [8, 16, 8, 10]
      } else {
        var obj = []; 

        setTimeout(
           () => {
            obj.length = 1;
            obj[0] = this.w;
          },
          100
        ); // (7) set hàm Timeout sau 100ms list1 sẽ là [42]

        return obj; // (8) trả về object rỗng
      }
    };
  }

  var p = foo(2); // được khởi chạy đầu tiền (1) - biến p tham chiếu đến function bar (4) 
  var list1 = [1, 3, 4]; // list1 = [1, 3, 4]
  var list2 = list1.concat(6); // list2 = [1, 3, 4, 6]

  list1 = p.call({ w: 42 }, list1); // (5) function bar sẽ được thực thi với từ khóa this trỏ đến {w: 42} tham số là list1
  list2 = p(list2); // (9) chạy function bar với tham số là list2

  setTimeout(() => {
    console.log(
      list1[0] ===
        list2.reduce((s, v) => {
          return s + v;
        }, 0)
    ); // (11) in ra true
  }, 200);
})();
