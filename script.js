// =========================================
// AMBIL ELEMEN HTML
// =========================================
const searchInput = document.querySelector('.header input');
const navLinks = document.querySelectorAll('.sidebar nav a');
const documentBoxes = document.querySelectorAll('.document-box');
const documentLinks = document.querySelectorAll('.document-box a');

const namaMahasiswa = document.getElementById('nama-mahasiswa');
const namaKelas = document.getElementById('nama-kelas');

const welcomeCard = document.querySelector('.welcome-card');
const aktivitas = document.querySelector('.aktifitas');
const progres = document.querySelector('.progres');
const statistik = document.querySelector('.statistik');
const documents = document.querySelector('.documents');

// =========================================
// FITUR PENCARIAN DOKUMEN
// =========================================
if (searchInput) {
    searchInput.addEventListener('input', function () {
        const keyword = this.value.toLowerCase();

        documentBoxes.forEach(function (document) {
            const text = document.textContent.toLowerCase();

            document.style.display = text.includes(keyword)
                ? 'flex'
                : 'none';
        });
    });
}

// =========================================
// MENU NAVIGASI
// =========================================
navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        // MENU AKTIF
        navLinks.forEach(item => {
            item.classList.remove('active');
        });

        this.classList.add('active');

        // MEMBACA NAMA MENU
        const menu = this.textContent.trim().toLowerCase();

        // =====================================
        // MENGATUR NAMA MAHASISWA
        // =====================================
        if (namaMahasiswa) {
            if (menu === 'mahasiswa') {
                namaMahasiswa.textContent = 'fuan Candyta';
            }

            if (menu === 'sign out') {
                namaMahasiswa.textContent = 'Nama Mahasiswa';
            }
        }

        // =====================================
        // MENGHAPUS SEMUA HIGHLIGHT SEBELUMNYA
        // =====================================
        if (namaKelas) {
            namaKelas.classList.remove('highlight');
        }

        if (welcomeCard) {
            welcomeCard.classList.remove('menu-highlight');
        }

        if (aktivitas) {
            aktivitas.classList.remove('menu-highlight');
        }

        if (progres) {
            progres.classList.remove('menu-highlight');
        }

        if (statistik) {
            statistik.classList.remove('menu-highlight');
        }

        if (documents) {
            documents.classList.remove('menu-highlight');
        }

        // =====================================
        // JIKA KLIK MAHASISWA
        // =====================================
        if (menu === 'mahasiswa') {
            if (welcomeCard) {
                welcomeCard.classList.add('menu-highlight');
            }
        }

        // =====================================
        // JIKA KLIK KELAS
        // =====================================
        if (menu === 'kelas') {
            if (namaKelas) {
                namaKelas.classList.add('highlight');
            }
        }

        // =====================================
        // JIKA KLIK AKTIVITAS
        // =====================================
        if (menu === 'aktivitas' || menu === 'aktifitas') {
            if (progres) {
                progres.classList.add('menu-highlight');
            }

            if (aktivitas) {
                aktivitas.classList.add('menu-highlight');
            }
        }

        // =====================================
        // JIKA KLIK STATISTIK
        // =====================================
        if (menu === 'statistik') {
            if (statistik) {
                statistik.classList.add('menu-highlight');
            }
        }

        // =====================================
        // JIKA KLIK DOKUMEN
        // =====================================
        if (menu === 'dokumen') {
            if (documents) {
                documents.classList.add('menu-highlight');
            }
        }
    });
});

// =========================================
// TOMBOL LIHAT DOKUMEN
// =========================================
documentLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
        if (this.getAttribute('href') === '#') {
            event.preventDefault();

            alert('Silakan hubungkan tombol ini dengan file PDF dokumen.');
        }
    });
});

// =========================================
// PESAN WEBSITE
// =========================================
console.log('Royal Dashboard berhasil dijalankan!');