// thumbnail gallery code
const images = document.querySelectorAll(".gallery-item img");
let imgSrc;
// get images src onclick
images.forEach((img) => {
    img.addEventListener("click", (e) => {
        imgSrc = e.target.src;
        document.getElementById("modal").id = 'modalActive';



      const fileName = imgSrc.split("/").pop();
      let fileLoc = imgSrc.split("images/").pop();
      let imgFolder = fileLoc.split("/").shift();
      let modalSrc = "../../images/" + imgFolder + "/large/" + fileName;
        document.getElementById("modalImage").src = modalSrc;

     });
});

function closeModal()  {
  document.getElementById("modalActive").id = 'modal';
  }