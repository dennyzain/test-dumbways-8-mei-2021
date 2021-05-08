let n = 6;
let u = 0;
let string = '';
const str = 'DUMBWAYSIDUJIAN';
let arr = str.split(''); //string di pisah dengan method split dan menjadi array

// looping baris
for (let i = 1; i <= n; i++) {
    // printing spaces
    for (let j = 1; j <= n - i; j++) {
        string += ' ';
    }

    // printing array dumbways
    for (let k = 0; k < 1 * i - 1; k++) {
        string += arr[u] + ' ';
        u++;
    }
    string += '\n';
}
console.log(string);
