let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}






/* thumbnail gallery code */
const images = document.querySelectorAll(".gallery-item img");
let imgSrc;
// get images src onclick
images.forEach((img) => {
    img.addEventListener("click", (e) => {
        imgSrc = e.target.src;
        document.getElementById("modal").id = 'modalActive';
        document.getElementById("modalControl").id = 'modalControlActive';



      const fileName = imgSrc.split("/").pop();
      let fileLoc = imgSrc.split("images/").pop();
      let imgFolder = fileLoc.split("/").shift();
      let modalSrc = "../../images/" + imgFolder + "/large/" + fileName;
        document.getElementById("modalImage").src = modalSrc;

     });
});

function closeModal()  {
  document.getElementById("modalControlActive").id = 'modalControl';
  document.getElementById("modalActive").id = 'modal';
  }