document.addEventListener("DOMContentLoaded", function () {
   const form = document.getElementById("quote-form");
   const message = document.getElementById("form-message");

   form.addEventListener("submit", function (event) {
      const firstName = document.getElementById("first-name").value.trim();
      const lastName = document.getElementById("last-name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();

      if (!firstName || !lastName || !email || !phone) {
         event.preventDefault();
         message.textContent = "⚠️ Please fill out all fields before submitting.";
         message.style.color = "red";
      } else {
         message.textContent = "";
      }
   });
});
