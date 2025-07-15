document.addEventListener("DOMContentLoaded", function () {
   const form = document.getElementById("quote-form");
   const message = document.getElementById("form-message");

   form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent actual submission

      const firstName = document.getElementById("first-name").value.trim();
      const lastName = document.getElementById("last-name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();

      if (!firstName || !lastName || !email || !phone) {
         message.textContent = "⚠️ Please fill out all fields before submitting.";
         message.style.color = "red";
      } else {
         message.textContent = "✅ Thank you for your submission!";
         message.style.color = "green";
         form.reset(); // Clear form after success
      }
   });
});
