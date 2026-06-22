import { auth, db } from "/admin/firebase.js";
import {
   signInWithEmailAndPassword,
   signOut,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import {
   collection,
   addDoc,
   getDocs,
   deleteDoc,
   doc,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const IMGBB_API_KEY = "b7636e548e191116b0f327bdc1e07423";

// ЛОГІН
window.login = async function () {
   const email = document.getElementById("email").value;
   const password = document.getElementById("password").value;
   try {
      await signInWithEmailAndPassword(auth, email, password);
      showAdmin();
   } catch (e) {
      document.getElementById("login-error").textContent =
         "Невірний email або пароль";
   }
};

// ВИХІД
window.logout = async function () {
   await signOut(auth);
   document.getElementById("login-screen").style.display = "flex";
   document.getElementById("admin-screen").style.display = "none";
};

// ПОКАЗАТИ АДМІНКУ
function showAdmin() {
   document.getElementById("login-screen").style.display = "none";
   document.getElementById("admin-screen").style.display = "block";
   loadProducts();
}

// ЗАВАНТАЖИТИ ФОТО НА IMGBB
async function uploadPhoto(file) {
   const base64 = await toBase64(file);
   const formData = new FormData();
   formData.append("image", base64.split(",")[1]);
   formData.append("album", "vsPcWp"); // ID твоего альбома
   const res = await fetch(
      `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
      {
         method: "POST",
         body: formData,
      },
   );
   const data = await res.json();
   return data.data.url;
}

function toBase64(file) {
   return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
   });
}

// ДОДАТИ ТОВАР
window.addProduct = async function () {
   const name = document.getElementById("name").value.trim();
   const desc = document.getElementById("desc").value.trim();
   const photoFile = document.getElementById("photo").files[0];
   const status = document.getElementById("form-status");

   if (!name || !desc || !photoFile) {
      status.textContent = "Заповніть всі поля!";
      return;
   }

   status.textContent = "Завантаження...";

   try {
      const photoUrl = await uploadPhoto(photoFile);
      await addDoc(collection(db, "products"), {
         name,
         desc,
         photoUrl,
         createdAt: Date.now(),
      });
      status.textContent = "✅ Товар додано!";
      document.getElementById("name").value = "";
      document.getElementById("desc").value = "";
      document.getElementById("photo").value = "";
      loadProducts();
   } catch (e) {
      status.textContent = "Помилка: " + e.message;
   }
};

// ЗАВАНТАЖИТИ СПИСОК ТОВАРІВ
async function loadProducts() {
   const list = document.getElementById("products-list");
   list.innerHTML = "";
   const snapshot = await getDocs(collection(db, "products"));
   snapshot.forEach((docSnap) => {
      const p = docSnap.data();
      list.innerHTML += `
      <div class="product-card">
        <img src="${p.photoUrl}" alt="${p.name}" />
        <div class="product-info">
          <h4>${p.name}</h4>
          <p>${p.desc}</p>
        </div>
        <button class="delete-btn" onclick="deleteProduct('${docSnap.id}')">Видалити</button>
      </div>
    `;
   });
}

// ВИДАЛИТИ ТОВАР
window.deleteProduct = async function (id) {
   await deleteDoc(doc(db, "products", id));
   loadProducts();
};
