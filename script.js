const inputNama = document.querySelector('#nama');
const inputAsal = document.querySelector('#asal');
const inputTujuan = document.querySelector('#tujuan');
const inputTanggal = document.querySelector('#tanggal');

const pereviewNama = document.querySelector('#preview-nama');
const pereviewAsal = document.querySelector('#preview-asal');
const pereviewTujuan = document.querySelector('#preview-tujuan');
const pereviewTanggal = document.querySelector('#preview-tanggal');

function updatePreview() {
    pereviewNama.textContent = inputNama.value || "_";
    pereviewAsal.textContent = inputAsal.value || "_";
    pereviewTujuan.textContent = inputTujuan.value || "_";
    pereviewTanggal.textContent = inputTanggal.value || "_";
}

[inputNama, inputAsal, inputTujuan, inputTanggal].forEach(input => {
    input.addEventListener('input', updatePreview);
});