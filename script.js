const input_tugas = document.getElementById("input-tugas");
const button_tambah = document.getElementById("button-tambah");
const daftar_tugas = document.getElementById("daftar-tugas");
const total_tugas = document.getElementById("total-tugas");
const jumlah_selesai = document.getElementById("jumlah-selesai");
const jumlah_belum_selesai = document.getElementById("jumlah-belum-selesai");

let jumlah_tugas = 0;
let tugas_selesai = 0;

function tambah_tugas() {
    const isi_tugas = input_tugas.value.trim();

    if (isi_tugas === "") {
        alert("Tugas tidak boleh kosong!");
        return;
    }

    const tugas_baru = document.createElement("li");
    tugas_baru.className = "task-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const teks_tugas = document.createElement("span");
    teks_tugas.innerText = isi_tugas;

    const button_hapus = document.createElement("button");
    button_hapus.innerText = "Hapus";
    button_hapus.className = "button-hapus";

    checkbox.addEventListener("change", function () {
        teks_tugas.classList.toggle("selesai");

        if (checkbox.checked) {
            tugas_selesai++;
        } else {
            tugas_selesai--;
        }

        perbarui_statistik();
    });

    button_hapus.addEventListener("click", function () {
        if (checkbox.checked) {
            tugas_selesai--;
        }

        jumlah_tugas--;
        tugas_baru.remove();

        perbarui_statistik();
    });

    tugas_baru.appendChild(checkbox);
    tugas_baru.appendChild(teks_tugas);
    tugas_baru.appendChild(button_hapus);

    daftar_tugas.appendChild(tugas_baru);

    jumlah_tugas++;
    perbarui_statistik();

    input_tugas.value = "";
}

function perbarui_statistik() {
    total_tugas.innerText = jumlah_tugas;
    jumlah_selesai.innerText = tugas_selesai;
    jumlah_belum_selesai.innerText = jumlah_tugas - tugas_selesai;
}

button_tambah.addEventListener("click", tambah_tugas);