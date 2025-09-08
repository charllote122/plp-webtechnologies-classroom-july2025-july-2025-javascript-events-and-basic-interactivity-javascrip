// =========================
// Part 1: Event Handling
// =========================
const messageBtn = document.getElementById("messageBtn");
const messageOutput = document.getElementById("messageOutput");

messageBtn.addEventListener("click", () => {
    messageOutput.textContent = "🎉 Button was clicked!";
});

// =========================
// Part 2: Interactive Elements
// =========================

// 1. Light/Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// 2. Counter Game
let count = 0;
const counterBtn = document.getElementById("counterBtn");
const countValue = document.getElementById("countValue");

counterBtn.addEventListener("click", () => {
    count++;
    countValue.textContent = count;
});

// 3. Collapsible FAQ
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
});

// =========================
// Part 3: Form Validation
// =========================
const form = document.getElementById("signupForm");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop page reload

    let isValid = true;

    // Name Validation
    const name = document.getElementById("name").value.trim();
    const nameError = document.getElementById("nameError");
    if (name === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    // Email Validation
    const email = document.getElementById("email").value.trim();
    const emailError = document.getElementById("emailError");
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = "Enter a valid email.";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Password Validation
    const password = document.getElementById("password").value.trim();
    const passwordError = document.getElementById("passwordError");
    if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    // Success Message
    const formSuccess = document.getElementById("formSuccess");
    if (isValid) {
        formSuccess.textContent = "✅ Form submitted successfully!";
        form.reset(); // clear form
    } else {
        formSuccess.textContent = "";
    }
});
