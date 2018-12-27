function deepComparision(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    }
    
    if (obj1 == null || typeof(obj1) != "object" && obj2 == null || typeof(obj2) != "object" ) {
        return false;
    }

    let a = Object.keys(obj1);

    for (i of a) {
        if (!i in obj2 || !deepComparision(obj1[i], obj2[i])) {
            return false;
        }
    }
    return true;
}
