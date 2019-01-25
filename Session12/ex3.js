function fib(n) {    
    let mapData = new Map();  
    for (let i = 1; i <= n; i++) {
        if (i <= 2) {
            mapData.set(i, 1);
        }
        
        else {
            mapData.set(i, mapData.get(i - 1) + mapData.get(i - 2));
        }
    }
    return mapData.get(n);
}
