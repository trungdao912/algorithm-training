function hotelBookingPossible(arrival, depature, rooms) {
    let i = 0;
    let j = 0;
    let room = 0;
    debugger;
    while (i < arrival.length && j < depature.length) {
        if (arrival[i] < depature[j]) {
            i++;
            room++;
        }
        else {
            j++;
            room--;
        }
        if (room > rooms) {
            return false;
        }
    }
    return true;
}