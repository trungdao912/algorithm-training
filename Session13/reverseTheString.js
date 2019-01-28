function reverseTheString(str) {
    return str.split(' ').filter((char) => {
        return char !== '';
    }).reverse().join(' ');
}