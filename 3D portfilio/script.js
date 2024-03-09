document.addEventListener('DOMContentLoaded', function () {
    // Add event listener to toggle navigation menu on click
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNavList = document.querySelector('.main-nav-list');
    menuToggle.addEventListener('click', function () {
      mainNavList.classList.toggle('show');
    });
  
    // Add event listener to enable/disable send button based on form validation
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const sendButton = document.querySelector('.send-button');
    const form = document.getElementById('form');
  
    [emailInput, subjectInput, messageInput].forEach(input => {
      input.addEventListener('input', validateForm);
    });
  
    function validateForm() {
      if (emailInput.validity.valid && subjectInput.validity.valid && messageInput.validity.valid) {
        sendButton.disabled = false;
      } else {
        sendButton.disabled = true;
      }
    }
  
    // Add event listener to handle form submission
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const formData = new FormData(form);
      // You can handle form submission here, for example, send data to a server using fetch API
      // Then display success message or handle errors accordingly
      // For demonstration purpose, I'll display a spinner for a few seconds
      const spinner = document.getElementById('spinner');
      spinner.classList.remove('hideSpinner');
      setTimeout(function () {
        spinner.classList.add('hideSpinner');
        alert('Message sent successfully!');
        form.reset(); // Reset the form after successful submission
      }, 3000); // Change 3000 to adjust the duration of spinner display
    });
  });
  