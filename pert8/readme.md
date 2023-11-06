# Laporan Alur Logika Pengisian Form Pendaftaran

Dalam laporan ini, akan dijelaskan alur logika pengisian formulir pendaftaran yang diimplementasikan melalui kode HTML, CSS, dan JavaScript yang diberikan.

## Deskripsi

Kode ini adalah implementasi formulir pendaftaran sederhana yang memungkinkan pengguna mengisi informasi pribadi seperti Nama Lengkap, ID Siswa, Email, Password, dan Tanggal Lahir. Formulir ini dilengkapi dengan validasi di sisi klien menggunakan JavaScript untuk memastikan bahwa data yang dimasukkan sesuai dengan kriteria yang ditentukan sebelum formulir dapat dikirim.

## Alur Logika

1. Pengguna membuka halaman web yang berisi formulir pendaftaran.

2. Pengguna mengisi formulir dengan informasi yang diminta, yaitu:
   - Nama Lengkap
   - ID Siswa
   - Email
   - Password
   - Tanggal Lahir

3. Ketika pengguna mengklik tombol "Daftar" untuk mengirim formulir, terjadi alur logika berikut:

   - JavaScript mendeteksi pengiriman formulir melalui event `submit`.

   - Event listener menjalankan fungsi yang mencegah pengiriman formulir otomatis dengan menggunakan `event.preventDefault()`.

   - Fungsi kemudian memeriksa validitas setiap input berdasarkan kriteria berikut:
     - Nama Lengkap harus diisi (tidak boleh kosong).
     - ID Siswa harus diisi (tidak boleh kosong).
     - Email harus sesuai dengan format email yang valid (menggunakan ekspresi reguler).
     - Password harus minimal 9 karakter dan mengandung huruf, angka, serta simbol (menggunakan ekspresi reguler).
     - Tanggal Lahir harus diisi (tidak boleh kosong).

   - Jika salah satu validasi gagal, sebuah alert akan muncul memberi tahu pengguna tentang kesalahan tersebut.

   - Jika semua validasi berhasil, maka sebuah alert "Pendaftaran berhasil!" akan muncul, yang bisa digantikan dengan kode untuk mengirimkan data pendaftaran ke server atau melakukan tindakan selanjutnya.

4. Pengguna akan menerima notifikasi tentang status pendaftaran mereka, baik itu berhasil atau terdapat kesalahan yang perlu diperbaiki.

## Kesimpulan

Kode ini memberikan contoh sederhana tentang cara membuat formulir pendaftaran dengan validasi di sisi klien. Ini membantu memastikan bahwa data yang dikirimkan oleh pengguna sesuai dengan kriteria yang ditentukan sebelum formulir dapat dikirim ke server. Validasi seperti ini memungkinkan pengguna untuk menghindari kesalahan pengisian dan memastikan integritas data yang diterima oleh server.
