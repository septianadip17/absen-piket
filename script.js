const absenForm = document.getElementById('absenForm');
    const absensiData = []; // Gunakan array untuk menyimpan data absensi

    absenForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const nama = document.getElementById('nama').value;
        const tanggal = document.getElementById('tanggal').value;

        // Buat objek data absensi
        const absensi = {
            nama: nama,
            tanggal: tanggal
        };

        // Tambahkan data absensi ke dalam array
        absensiData.push(absensi);

        // Tampilkan pesan sukses atau lakukan yang lain sesuai kebutuhan Anda
        alert('Absensi berhasil!');

        // Reset formulir
        absenForm.reset();
    });