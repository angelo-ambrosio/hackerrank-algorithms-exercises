function catAndMouse(x, y, z) {
    let routeCat1 = 0;
    let routeCat2 = 0;

    if (x > z){
        routeCat1 = x - z;
    } else if (x < z) {
        routeCat1 = z - x;
    }

    if (y > z){
        routeCat2 = y - z
    } else if (y < z){
        routeCat2 = z - y
    }

    if (routeCat1 < routeCat2){
        return ("Cat A")
    } else if(routeCat2 < routeCat1){
        return ("Cat B")
    } else {
        return ("Mouse C")
    }

}
