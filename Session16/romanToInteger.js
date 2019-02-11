function romanToInteger(roman) {
    let result = 0;

    let arr = roman.split('');
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case "I":
                if (arr[i + 1] !== "I") {
                    result = result - 2;
                }
                result += 1;
                break;
            
            case "V":
                result += 5;
                break;

            case "X":
                result += 10;
                break;

            case "L":
                result += 50;
                break;
            
            case "C":
                result += 100;
                break;
            
            case "D":
                result += 500;
                break;
            
            case "M":
                result +=1000;
                break;
            
            default:
                return 0;
        }
    }
    
    return result;
}

console.log(romanToInteger("XIV"));