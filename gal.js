
var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");


var images = document.getElementsByClassName("gallery-img");


for (var i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        modal.style.display = "block"; 
        modalImg.src = this.src;      
        captionText.innerHTML = this.alt; 
    };
}


function closeModal() {
    modal.style.display = "none";
}
