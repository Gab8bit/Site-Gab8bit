var modal = document.getElementById("modal");
var modalImg = document.getElementById("modal-image");
var images = document.querySelectorAll(".gallery img");

images.forEach(function(img) {
  img.addEventListener("click", function() {
    modal.style.display = "block";
    modalImg.src = this.src;
  });
});

document.getElementById('modal').addEventListener('click', function(event) {
  if (event.target.classList.contains('close')) {
    closeModal();
  }
});

function closeModal() {
  modal.style.display = "none";
}

modal.addEventListener("click", function(event) {
  if (event.target === modal) {
    closeModal();
  }
});
