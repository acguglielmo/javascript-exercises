function calculate_triangle_area(a, b, c) {

    let s = (a + b + c) / 2; 

    return Math.sqrt( s * (s - a) * (s - b) * (s - c)) ;

}

module.exports = calculate_triangle_area
