document.addEventListener('DOMContentLoaded', function () {
  // Get the timeline description elements, the timeline line, and the line streak
  const timelineDescriptions = document.querySelectorAll('.time-line-description');
  const timelineLine = document.querySelector('.line');
  const lineStreak = document.querySelector('.line-streak');

  // Function to check if an element is in the viewport
  function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  // Function to reveal the timeline descriptions and update the line streak
  function revealTimelineDescriptions() {
      timelineDescriptions.forEach(description => {
          if (isInViewport(description)) {
              description.classList.add('show-me');
              const topPosition = description.getBoundingClientRect().top;
              const lineHeight = timelineLine.offsetHeight;
              const newLinePosition = topPosition + lineHeight;
              lineStreak.style.height = `${newLinePosition}px`;
          }
      });
  }

  // Event listener for scroll to reveal the descriptions and update the line streak
  window.addEventListener('scroll', revealTimelineDescriptions);

  // Initial call to reveal the descriptions and update the line streak in case they are already in the viewport on page load
  revealTimelineDescriptions();

  // Add event listener
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNavList = document.querySelector('.main-nav-list');
  menuToggle.addEventListener('click', function () {
    mainNavList.classList.toggle('show');
  });
});



document.addEventListener('DOMContentLoaded', function () {
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
      // For demonstration purpose, I'll display a prompt for the success message
      const successMessage = 'Message sent successfully!';
      alert(successMessage);
      form.reset(); // Reset the form after successful submission
  });
});