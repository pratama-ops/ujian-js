# Ujian Kalkulator Sederhana - Aplikasi Web

## 📋 Deskripsi Proyek
Proyek ini adalah tugas ujian sekolah untuk membuat aplikasi **Kalkulator Sederhana** menggunakan HTML, CSS, dan JavaScript. Aplikasi ini memungkinkan pengguna untuk melakukan operasi matematika dasar dengan antarmuka yang user-friendly.

## 🎯 Tujuan Pembelajaran
Melalui proyek ini, siswa diharapkan dapat:
- Memahami struktur HTML untuk membuat form dan input
- Menggunakan CSS untuk styling dan membuat desain yang menarik
- Mengimplementasikan JavaScript untuk logika interaktif
- Menangani event dan DOM manipulation
- Melakukan validasi input dari pengguna

## ✨ Fitur Aplikasi
- ✅ Input dua angka
- ✅ Empat operasi matematika: Perkalian (×), Pembagian (÷)
- ✅ Pemilihan operasi dengan tombol yang dapat di-highlight
- ✅ Tombol Hitung untuk mendapatkan hasil
- ✅ Tombol Reset untuk menghapus semua input
- ✅ Validasi input (menolak pembagian dengan 0)
- ✅ Tampilan hasil yang rapi dan responsif

## 📁 Struktur File

```
ujian js/
├── soal1.html       # File HTML utama (struktur dan form)
├── soal1.js         # File JavaScript (logika kalkulator)
└── README.md        # Dokumentasi proyek (file ini)
```

## 🚀 Cara Menggunakan

### Prasyarat
- Browser web modern (Chrome, Firefox, Safari, Edge)

### Langkah-langkah:
1. Buka file `soal1.html` di browser
2. Masukkan angka pertama di kolom "Angka Pertama"
3. Masukkan angka kedua di kolom "Angka Kedua"
4. Pilih operasi matematika dengan mengklik salah satu tombol operator
5. Klik tombol "Hitung" untuk melihat hasil
6. Gunakan tombol "Reset" untuk menghapus semua input dan hasil

## 💻 Detail Teknis

### HTML (`soal1.html`)
- Struktur form dengan input number
- 4 tombol operator yang dapat dipilih
- Div untuk menampilkan hasil
- Styling CSS yang responsif

### JavaScript (`soal1.js`)
- Penanganan event click pada tombol operator
- Validasi input kosong dan pembagian dengan 0
- Fungsi perhitungan menggunakan switch statement
- DOM manipulation untuk menampilkan/menyembunyikan hasil
- Event listener untuk form submit dan reset

## 📊 Contoh Perhitungan

| Angka 1 | Operasi | Angka 2 | Hasil |
|---------|---------|---------|-------|
| 10      | +       | 5       | 15    |
| 20      | -       | 8       | 12    |
| 6       | ×       | 7       | 42    |
| 100     | ÷       | 4       | 25    |

## ⚠️ Validasi dan Error Handling
- Tidak boleh ada input yang kosong
- Tidak boleh membagi dengan angka 0
- Harus memilih operasi sebelum menghitung
- Hasil ditampilkan dengan 2 desimal

## 🎨 Desain Antarmuka
- Background gradient ungu modern
- Kartu kalkulator dengan shadow effect
- Tombol dengan hover effect
- Layout responsif
- Warna yang konsisten dan mudah dipandang

## 📝 Rubrik Penilaian
Proyek ini dinilai berdasarkan:
- **Fungsi (40%)** - Semua operasi berfungsi dengan baik
- **Desain (30%)** - Tampilan menarik dan user-friendly
- **Kode (20%)** - Kode rapi, terstruktur, dan ada komentar
- **Validasi (10%)** - Input validation dan error handling

## 📚 Referensi Teknologi
- **HTML5** - Semantic markup dan form elements
- **CSS3** - Flexbox, Grid, dan styling modern
- **JavaScript ES6** - Event handling, DOM manipulation, switch statement

## ✏️ Catatan Pengembang
- Kode sudah dioptimalkan untuk performa
- Event delegation digunakan untuk efisiensi
- Responsive design untuk berbagai ukuran layar
- Komentar dalam bahasa Indonesia untuk kemudahan pemahaman

## 📄 Lisensi
Proyek ini dibuat untuk keperluan ujian sekolah.

---

**Dibuat oleh:** Ujian Sekolah  
**Tanggal:** Mei 2026  
**Status:** Selesai ✓
