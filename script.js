const input = document.getElementById('input');
const ekle = document.getElementById('ekle');
const liste = document.getElementById('liste');

ekle.onclick = function () {
    const deger = input.value.trim();
    if (deger === "") return;

    const li = document.createElement('li');
    li.textContent = deger;

    const silBtn = document.createElement('button');
    silBtn.textContent = "Sil";
    silBtn.onclick = function () {
        liste.removeChild(li);
    };

    li.appendChild(silBtn);
    liste.appendChild(li);

    input.value = "";
};
