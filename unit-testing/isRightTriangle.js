function isRightTriangle(a, b, c) {
    return ((a*a===b*b+c*c)||(b*b===a*a+c*c)||(c*c===a*a+b*b))&&(a < b + c) && (b < a + c) && (c < a + b)
 ;
}
const isTriangle = require('./isTriangle');
module.exports = isRightTriangle;