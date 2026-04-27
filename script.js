// Fungsi Login
function prosesLogin() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    if(user === "admin" && pass === "123") {
        alert("Login Sukses! Selamat datang Admin.");
        // window.location.href = "dashboard.html"; 
    } else {
        alert("Gagal! Username: admin, Pass: 123");
    }
}

// Handling Form Contact
const contactForm = document.getElementById('contactForm');
if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert("Pesan berhasil terkirim! Terima kasih.");
        this.reset();
    });
}