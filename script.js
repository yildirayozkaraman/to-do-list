const liste = document.getElementById('liste');

let list = [];

window.onload = function () {
    const kayitliListe = localStorage.getItem("yapilacaklar");
    if (kayitliListe) {
        list = JSON.parse(kayitliListe);
        list.forEach(eleman => listeyeEkle(eleman));
    }
};

function listeyeEkle(deger) {
    const li = document.createElement('li');
    li.textContent = deger;

    const silBtn = document.createElement('button');
    silBtn.textContent = "Sil";
    silBtn.onclick = function () {
        liste.removeChild(li);
        list = list.filter(item => item !== deger);
        localStorage.setItem("yapilacaklar", JSON.stringify(list));
    };

    li.appendChild(silBtn);
    liste.appendChild(li);
}
ekle.onclick = function () {
    const deger = input.value.trim();
    if (deger === "") return;

    list.push(deger);
    localStorage.setItem("yapilacaklar", JSON.stringify(list));
    listeyeEkle(deger);

    input.value = "";
};

