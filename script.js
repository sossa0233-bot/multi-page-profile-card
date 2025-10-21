function updateTime() {
  const timeElement = document.getElementById('currentTime');
  const now = new Date();

  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

updateTime();
setInterval(updateTime, 1000);

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get fields
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    // Clear previous errors
    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    let valid = true;

    // Validation logic
    if (!name) {
      document.getElementById("test-contact-error-name").textContent = "Full name is required.";
      valid = false;
    }

    if (!email) {
      document.getElementById("test-contact-error-email").textContent = "Email is required.";
      valid = false;
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      document.getElementById("test-contact-error-email").textContent = "Enter a valid email address.";
      valid = false;
    }

    if (!subject) {
      document.getElementById("test-contact-error-subject").textContent = "Subject is required.";
      valid = false;
    }

    if (!message) {
      document.getElementById("test-contact-error-message").textContent = "Message is required.";
      valid = false;
    } else if (message.length < 10) {
      document.getElementById("test-contact-error-message").textContent = "Message must be at least 10 characters.";
      valid = false;
    }

    // Show success if all good
    if (valid) {
      successMessage.hidden = false;
      form.reset();
    } else {
      successMessage.hidden = true;
    }
  });
});
