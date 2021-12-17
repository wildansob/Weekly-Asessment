function persegiPanjang(jumlah) {
    let hasil = '';
    for (let i = 1; i <= 6; i++) {
        for (let j = 1; j <= jumlah; j++) {
            hasil += '*';
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(persegiPanjang(27));