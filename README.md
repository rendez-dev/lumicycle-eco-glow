# Lumicycle Eco-Glow

Project ini adalah aplikasi web modern yang dibangun dengan tumpukan teknologi Vite, React, TypeScript, dan shadcn/ui. Dibuat sebagai bagian dari [masukkan tujuan project di sini, misal: platform e-commerce, dasbor, dll.].

## Fitur Utama

* **Frontend Cepat:** Dibangun di atas **Vite** untuk pengembangan dan build yang sangat cepat.
* **UI Modern:** Menggunakan **React** dan **TypeScript** untuk UI yang kuat dan dapat dikelola.
* **Komponen UI:** Didesain dengan indah menggunakan **shadcn/ui**, yang dibangun di atas Radix UI dan Tailwind CSS.
* **Routing:** Navigasi sisi klien ditangani oleh **React Router**.
* **Manajemen State:** Menggunakan **TanStack Query** (React Query) untuk pengambilan, caching, dan pembaruan data asinkron.
* **Validasi Form:** Validasi skema yang tangguh dengan **React Hook Form** dan **Zod**.
* **Visualisasi Data:** Termasuk **Recharts** untuk membuat bagan dan grafik interaktif.
* **Styling:** Sepenuhnya di-style dengan **Tailwind CSS** untuk utilitas CSS yang cepat dan responsif.

## Teknologi yang Digunakan

* **Framework:** React 18
* **Bundler:** Vite
* **Bahasa:** TypeScript
* **Styling:** Tailwind CSS
* **Komponen UI:** shadcn/ui
* **Routing:** React Router DOM (v6)
* **Manajemen State Server:** @tanstack/react-query
* **Formulir:** React Hook Form & Zod
* **Linting:** ESLint & TypeScript ESLint
* **Lainnya:** Lucide (ikon), date-fns, recharts, sonner (notifikasi toast)

## Prasyarat Instalasi

Sebelum memulai, pastikan Anda telah menginstal perangkat lunak berikut di mesin Anda:

* **Node.js:** (Direkomendasikan v18.x atau v20.x ke atas)
* **npm** (atau package manager lain seperti `yarn` atau `pnpm`)

## Panduan Instalasi dan Penggunaan

Untuk menjalankan proyek ini secara lokal, ikuti langkah-langkah berikut:

1.  **Clone Repository**
    ```sh
    git clone [https://github.com/](https://github.com/)[USERNAME_ANDA]/[NAMA_REPOSITORY_ANDA].git
    ```

2.  **Masuk ke Direktori Proyek**
    ```sh
    cd [NAMA_REPOSITORY_ANDA]
    ```

3.  **Install Dependensi**
    Gunakan npm untuk menginstal semua dependensi yang terdaftar di `package.json`.
    ```sh
    npm install
    ```

4.  **Jalankan Server Pengembangan**
    Perintah ini akan menjalankan aplikasi dalam mode pengembangan dengan hot-reloading.
    ```sh
    npm run dev
    ```
    Buka [http://localhost:5173](http://localhost:5173) (atau port lain yang ditampilkan di terminal) di browser Anda.

5.  **Build untuk Produksi**
    Untuk membuat build produksi yang dioptimalkan:
    ```sh
    npm run build
    ```
    File build akan berada di direktori `dist/`.

6.  **Jalankan Linting**
    Untuk memeriksa masalah gaya dan kualitas kode:
    ```sh
    npm run lint
    ```
## Kontribusi

Kami sangat terbuka untuk kontribusi! Jika Anda ingin membantu meningkatkan proyek ini, silakan:

1.  **Fork** repository ini.
2.  Buat *branch* fitur baru (`git checkout -b fitur/NamaFiturAnda`).
3.  **Commit** perubahan Anda (`git commit -m 'Menambahkan fitur baru'`).
4.  **Push** ke *branch* Anda (`git push origin fitur/NamaFiturAnda`).
5.  Buka **Pull Request** ke *branch* `main` dari repository ini.

Harap pastikan kode Anda mematuhi standar linting yang ada dengan menjalankan `npm run lint` sebelum melakukan *commit*.

## Lisensi

Proyek ini dilisensikan di bawah **Lisensi MIT**. Lihat file `LICENSE` (atau teks di bawah) untuk detail lengkap.

---

**MIT License**

Copyright (c) 2025 [rendez-dev]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
