const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuButton?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});
navLinks?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
}));
document.querySelector("#year").textContent = new Date().getFullYear();

const form = document.querySelector("#contact-form");
form?.addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(form);
  const recipient = "YOUR_EMAIL_ADDRESS";
  if (recipient === "YOUR_EMAIL_ADDRESS") {
    document.querySelector(".form-feedback").textContent =
      "The form is ready. To receive enquiries, replace YOUR_EMAIL_ADDRESS in script.js with your business email, then publish the update.";
    return;
  }
  const subject = encodeURIComponent("Merchant Center enquiry from " + data.get("name"));
  const body = encodeURIComponent(
    "Name: " + data.get("name") + "\nEmail: " + data.get("email") +
    "\nStore website: " + (data.get("website") || "Not provided") +
    "\nSupport needed: " + data.get("service") + "\n\nDetails:\n" + data.get("message")
  );
  window.location.href = "mailto:" + recipient + "?subject=" + subject + "&body=" + body;
});