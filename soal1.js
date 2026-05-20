let selectedOperator = null;

// Ambil elemen id
const form = document.getElementById('calculatorForm');
const angka1Input = document.getElementById('angka1');
const angka2Input = document.getElementById('angka2');
const operatorButtons = document.querySelectorAll('.operator-btn');
const resultDiv = document.getElementById('result');
const resultValue = document.getElementById('resultValue');

// agar tombol operator bisa dipilih
operatorButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Hapus class active dari semua tombol
        operatorButtons.forEach(btn => btn.classList.remove('active'));
        
        // Tambahkan class active ke tombol yang diklik
        this.classList.add('active');
        
        // Simpan operator yang dipilih
        selectedOperator = this.dataset.operator;
    });
});

// memulai inti dari proses perhitungan 
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validasi input
    if (!angka1Input.value || !angka2Input.value || !selectedOperator) {
        alert('Harap isi semua field dan pilih operasi!');
        return;
    }
    
    // Konversi ke number
    const num1 = parseFloat(angka1Input.value);
    const num2 = parseFloat(angka2Input.value);
    
    // Hitung hasil
    let hasil = 0;
    
    switch(selectedOperator) {
        case '*':
            hasil = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert('Tidak bisa dibagi dengan 0!');
                return;
            }
            hasil = num1 / num2;
            break;
    }
    
    // Tampilkan hasil
    resultValue.textContent = hasil.toFixed(1);
    resultDiv.classList.add('show');
});
