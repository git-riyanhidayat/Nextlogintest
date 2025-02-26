**Validasi:**
**Cek Input Kosong:**

Kode if (!username || !password) memeriksa apakah field username atau password kosong. Jika salah satu atau keduanya kosong, pesan error 'Username dan password harus diisi!' akan ditampilkan menggunakan errorElement.textContent. return digunakan untuk menghentikan proses lebih lanjut (tidak melanjutkan ke fetch request).

**Trim Input:**
trim() digunakan untuk menghapus spasi di awal dan akhir input. Ini memastikan input seperti " " (spasi saja) maka dianggap kosong.

**Pesan Error dari XSS:**
Pesan error ditampilkan menggunakan textContent, bukan innerHTML, sehingga aman dari serangan XSS.

**Contoh Case Validasi :**
**Kasus 1: Input Kosong**
Jika pengguna mencoba login tanpa mengisi username atau password, pesan error akan muncul: Username dan password harus diisi y!

**Kasus 2: Input Valid**
Jika username dan password diisi, form akan mengirim data ke server menggunakan Fetch API.
