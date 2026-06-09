const products = {
   trubochka_choc: {
      name: `Шоколадна трубочка`,
      desc: `Хрустка трубочка з начинкою зі згущеного молока з маслом та смаженим арахісом`,
      img: `img/foto3.jpg`,
   },
   trubochka_klass: {
      name: `Класична трубочка`,
      desc: `Ніжна вафельна трубочка з кремом зі згущеного молока з маслом`,
      img: `img/foto10.png`,
   },

   oreshki: {
      name: `Горішки класичні`,
      desc: `Домашні пісочні горішки з начинкою зі вареного згущеного молока`,
      img: `img/foto11.png`,
   },
   tartaletka: {
      name: `Тарталетка`,
      desc: `Пісочна тарталетка зі шаром вареного згущеного молока, шоколадом та арахісом або кокосовою стружкою`,
      img: `img/foto7.jpg`,
   },
   medovik: {
      name: `Медовик`,
      desc: `Класичний медовий торт з ніжним кремом на основі сметани`,
      img: `img/foto2.png`,
   },
   kolbaska: {
      name: `Солодка ковбаска`,
      desc: `Шоколадна ковбаска з какао та смаженим арахісом — смак із дитинства`,
      img: `img/foto14.png`,
   },
   ponchiki: {
      name: `Міні пончики`,
      desc: `Пухкі міні пончики в цукровому сиропі та цукровій пудрі`,
      img: `img/foto9.png`,
   },
   vafli: {
      name: `Бельгійські вафлі`,
      desc: `Класичні бельгійські вафлі — хрусткі зовні та ніжні всередині`,
      img: `img/foto4.jpg`,
   },
   chipsy: {
      name: `Пивні чіпси`,
      desc: `Хрусткі вафельні чіпси зі смаком сиру, паприки та італійських трав`,
      img: `img/foto5.jpg`,
   },
};

function openModal(id) {
   const p = products[id];
   if (!p) return;
   document.getElementById("modal-img").src = p.img;
   document.getElementById("modal-name").textContent = p.name;
   document.getElementById("modal-desc").textContent = p.desc;
   document.getElementById("modal").classList.add("open");
}

function closeModal(e) {
   if (e.target.id === "modal")
      document.getElementById("modal").classList.remove("open");
}

function showContactChoice() {
   document.getElementById("choiceOverlay").classList.add("open");
}
function hideContactChoice(e) {
   if (e.target.id === "choiceOverlay") closeChoiceNow();
}
function closeChoiceNow() {
   document.getElementById("choiceOverlay").classList.remove("open");
}

function openLightbox(id) {
   const p = products[id];
   if (!p) return;
   document.getElementById("lightbox-img").src = p.img;
   document.getElementById("lightbox").classList.add("open");
}
function closeLightbox() {
   document.getElementById("lightbox").classList.remove("open");
}
