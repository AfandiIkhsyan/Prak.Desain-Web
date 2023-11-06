document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah form dari submit otomatis

    // Validasi Nama
    var studentName = document.getElementById('studentName').value;
    if (!studentName) {
        return alert('Nama lengkap wajib diisi.');
    }

    // Validasi ID Siswa
    var studentId = document.getElementById('studentId').value;
    if (!studentId) {
        return alert('ID Siswa wajib diisi.');
    }

    // Validasi Email
    var email = document.getElementById('email').value;
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        return alert('Format email tidak valid.');
    }

    // Validasi Password
    var password = document.getElementById('password').value;
    // Verifikasi menggunakan REGEX (silakan cari referensi tentang REGEX)
    if (password.length < 9 || !/[a-zA-Z]/.test(password) || !/[0-9]/.test(password) || !/[^a-zA-Z0-9]/.test(password)) {
        return alert('Password harus minimal 9 karakter dan mengandung huruf, angka, serta simbol.');
    }

    // Validasi Tanggal Lahir
    var birthDate = document.getElementById('birthDate').value;
    if (!birthDate) {
        return alert('Tanggal lahir wajib diisi.');
    }

    // Jika semua validasi terpenuhi, proses form submission dilanjutkan.
    // Gantilah dengan kode untuk submit data atau informasi selanjutnya.
    alert('Pendaftaran berhasil!');
});