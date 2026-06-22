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

function openLightboxUrl(url) {
   document.getElementById("lightbox-img").src = url;
   document.getElementById("lightbox").classList.add("open");
}
function closeLightbox() {
   document.getElementById("lightbox").classList.remove("open");
}
