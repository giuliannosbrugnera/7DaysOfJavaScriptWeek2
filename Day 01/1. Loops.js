process.stdin.resume();
process.stdin.setEncoding("ascii");

var input = "";

process.stdin.on("data", function (line) {
    input += line;
});

process.stdin.on("end", function () {
     vowelsAndConsonants(input);
});

function vowelsAndConsonants( s ) {
    
    var length = s.length;

    // Vowels
    for ( var i = 0; i < length; i++ ) {
        if ( s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u' ) {
            console.log( s[i] );
        }
    }
    
    // Consonants
    for ( var i = 0; i < length; i++ ) {
        if ( s[i] !== 'a' && s[i] !== 'e' && s[i] !== 'i' && s[i] !== 'o' && s[i] !== 'u' ) {
            console.log( s[i] );
        }
    }

}