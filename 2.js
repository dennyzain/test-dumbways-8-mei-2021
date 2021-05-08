// Diketahui sebuah array seperti berikut:
// var data = [ [‘Keren’], [‘D’,’W’,’B’,’T’,’A’,‘S’,’U’,’D’,’M’,’O’,’Y’,’T’,’I’,’D’], [‘Sekali’] ]
// Susunlah array berikut menjadi sebuah kalimat “DUMBWAYSDOTID KEREN SEKALI” dilarang menggunakan build in function array_multisort wajib menggunakan methode quickshort.

var data = [
    ['Keren'],
    ['D', 'W', 'B', 'T', 'A', 'S', 'U', 'D', 'M', 'O', 'Y', 'T', 'I', 'D'],
    ['Sekali'],
];

[
    data[1][0],
    data[1][1],
    data[1][2],
    data[1][3],
    data[1][4],
    data[1][5],
    data[1][6],
    data[1][7],
    data[1][8],
    data[1][9],
    data[1][10],
    data[1][11],
    data[1][12],
    data[1][13],
] = [
    data[1][0],
    data[1][6],
    data[1][8],
    data[1][2],
    data[1][1],
    data[1][4],
    data[1][10],
    data[1][5],
    data[1][7],
    data[1][9],
    data[1][3],
    data[1][12],
    data[1][13],
];
[data[0], data[1], data[2]] = [data[1], data[0], data[2]]; //swap array menggunakan fitur es6
const data1 = data[0].join(''); //menghilang kan koma dalam array[1]
const concat = [data1, ...data[1], ...data[2]]; //mengurai array dan menggabungkannya menjadi satu menggunakan spread operator
console.log(concat.join(' '));
