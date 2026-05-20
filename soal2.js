// menambahkan angka 0 di depan
function padZero(num) {
    return num < 10 ? '0' + num : num;
}

// mendapatkan tanggal saat ini dalam berbagai format
function getCurrentDateFormats() {
    const currentDate = new Date();
    
    // Mengambil hari, bulan, dan tahun
    const day = padZero(currentDate.getDate());          // Hari (1-31)
    const month = padZero(currentDate.getMonth() + 1);   // Bulan (0-11, tambah 1)
    const year = currentDate.getFullYear();              // Tahun (4 digit)
    
    const format1 = month + '-' + day + '-' + year;
    
    const format2 = month + '/' + day + '/' + year;
    
    const format3 = day + '-' + month + '-' + year;
    
    const format4 = day + '/' + month + '/' + year;
    
    return {
        format1: format1,
        format2: format2,
        format3: format3,
        format4: format4,
        nativeDate: currentDate
    };
}

const dateFormats = getCurrentDateFormats();

console.log(dateFormats.format1);
console.log(dateFormats.format2);
console.log(dateFormats.format3);
console.log(dateFormats.format4);
