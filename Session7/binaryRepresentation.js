function binaryRepresentation(num) {
    
    let newNum = Math.floor(num / 2);

    if (num == 1) {
        return "1";
    }
    return binaryRepresentation(newNum) + (num % 2);
}
