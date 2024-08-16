
  document.getElementById("registrationForm").addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission

      const username = document.getElementById("username").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
      const confirmPassword = document.getElementById("confirmPassword").value.trim();
      const errorDiv = document.getElementById("error");

      // Simple validation checks
      if (username === "") {
          errorDiv.textContent = "Username is required.";
          errorDiv.style.display = "block";
          return;
      }

      if (email === "") {
          errorDiv.textContent = "Email is required.";
          errorDiv.style.display = "block";
          return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
          errorDiv.textContent = "Please enter a valid email address.";
          errorDiv.style.display = "block";
          return;
      }

      if (password === "") {
          errorDiv.textContent = "Password is required.";
          errorDiv.style.display = "block";
          return;
      }

      if (password.length < 6) {
          errorDiv.textContent = "Password must be at least 6 characters long.";
          errorDiv.style.display = "block";
          return;
      }

      if (password !== confirmPassword) {
          errorDiv.textContent = "Passwords do not match.";
          errorDiv.style.display = "block";
          return;
      }

      // If all validations pass, submit the form
      errorDiv.style.display = "none";
      alert("Registration successful!");
      // Form submission logic goes here (e.g., AJAX call or form submission)
  });