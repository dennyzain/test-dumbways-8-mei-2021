//Buatlah sebuah function untuk mengecek apakah sebuah angka yang diinputkan adalah bilangan palindrom atau bukan.
//Palindrom merupakan sebuah bilangan yang jika dibalik maka penulisannya tetap sama. Contoh: 16461, 1001

const palindrom = (input) => {
    const toStr = input.toString(); //input diubah kedalam string terlebih dahulu
    const reverseStr = toStr.split('').reverse().join(''); //dalam variable reverseStr = input di pisah menggunakan method split() dan di balik menggunakan method reverse()
    if (reverseStr === toStr) {
        console.log(`${input} merupakan bilangan palindrom`);
    } else {
        console.log(`${input} bukan bilangan palindrom`);
    }
};

// palindrom(1001);
palindrom(16461);
// palindrom(213223)
