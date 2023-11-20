# Image Slider

Ini adalah slider gambar sederhana yang diimplementasikan menggunakan HTML, CSS, dan JavaScript.

## HTML (`index.html`)

- **DOCTYPE dan Tag HTML:**
  - `<!DOCTYPE html>`: Menunjukkan bahwa dokumen ini adalah dokumen HTML5.
  - `<html lang="en">`: Memulai elemen HTML, dengan menentukan bahasa sebagai Bahasa Inggris.

- **Bagian Head:**
  - `<meta charset="UTF-8">`: Menetapkan pengkodean karakter menjadi UTF-8.
  - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Memberikan informasi tampilan untuk perangkat seluler.
  - `<title>Image Slider</title>`: Menetapkan judul halaman.

- **Gaya CSS:**
  - Gaya CSS disertakan dalam tag `<style>` di dalam `<head>`. Ini mencakup aturan gaya untuk elemen-elemen dalam halaman, seperti warna latar belakang, jenis huruf, dan tata letak slider.

## CSS (`styles.css`)

- **Gaya Body:**
  - `body`: Menetapkan warna latar belakang dan jenis huruf untuk halaman.

- **Gaya Slider:**
  - `#slider`: Gaya untuk wadah slider.
  - `#slider img`: Gaya untuk gambar dalam slider, termasuk efek transisi dan keadaan aktif.

- **Gaya Kontrol Slider:**
  - `#slider-controls`: Gaya untuk wadah kontrol slider.
  - `.slider-control`: Gaya untuk setiap kontrol slider.
  - `.slider-control.active`: Gaya untuk kontrol yang sedang aktif.

## JavaScript (`script.js`)

- **Peristiwa Beban Jendela:**
  - `window.addEventListener('DOMContentLoaded', (event) => {...}`: Menjalankan skrip JavaScript setelah halaman sepenuhnya dimuat.

- **Fungsionalitas Slider:**
  - Membuat variabel `current` untuk melacak indeks gambar saat ini.
  - Memilih semua elemen gambar dan kontrol slider.
  - Membuat fungsi `showImage(index)` untuk menampilkan gambar dan menandai kontrol yang aktif.
  - Membuat fungsi `startAutoSlide()` dan `stopAutoSlide()` untuk mengatur perilaku slider otomatis.
  - Menetapkan listener peristiwa untuk setiap kontrol slider dan memulai slider otomatis saat halaman dimuat.

- **Slider Otomatis:**
  - Memulai slider otomatis saat halaman dimuat.

### Catatan Tambahan:

- Slider ini menampilkan enam gambar secara otomatis dengan interval tiga detik.
- Pengguna dapat mengklik kontrol slider untuk beralih ke gambar tertentu.
- Desain slider mencakup animasi transisi dan tampilan yang dinamis.


