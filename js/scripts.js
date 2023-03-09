// collapsible resume sections
var coll = document.getElementsByClassName("collapsible");
var i;

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






// thumbnail gallery code
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



  //contact form validation

  <script>
   const constraints = {
       Name: {
           presence: { allowEmpty: false }
       },
       Email: {
           presence: { allowEmpty: false },
           email: true
       },
       Subject: {
        presence: { allowEmpty: false }
      },
        Message: {
           presence: { allowEmpty: false }
       }
   };

   const form = document.getElementById('contact-form');

   form.addEventListener('submit', function (event) {
     const formValues = {
         name: form.elements.name.value,
         email: form.elements.email.value,
         subject: form.elements.subject.value,
         message: form.elements.message.value
     };

     const errors = validate(formValues, constraints);

     if (errors) {
       event.preventDefault();
       const errorMessage = Object
           .values(errors)
           .map(function (fieldValues) { return fieldValues.join(', ')})
           .join("\n");

       alert(errorMessage);
     }
   }, false);
