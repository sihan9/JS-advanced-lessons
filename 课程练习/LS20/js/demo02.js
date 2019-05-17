var regExp = /ab/i;
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);

var regExp = /ab/gi;
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);

var regExp = /a*b/gi; 
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);

var regExp = /a.b/gi;
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);