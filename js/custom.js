// CONTACT FORM VALIDATION
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function(e) {

    e.preventDefault();

    if (!this.checkValidity()) {
      this.classList.add("was-validated");
      return;
    }

    alert("Message sent successfully!");

    this.reset();
    this.classList.remove("was-validated");
  });
}


// BOOKING FORM VALIDATION
const bookForm = document.getElementById("bookForm");

if (bookForm) {

  bookForm.addEventListener("submit", function(e) {

    e.preventDefault();

    if (!this.checkValidity()) {
      this.classList.add("was-validated");
      return;
    }

    alert("Booking submitted successfully!");

    const modal = bootstrap.Modal.getInstance(
      document.getElementById("bookModal")
    );

    modal.hide();

    this.reset();
    this.classList.remove("was-validated");

  });

}