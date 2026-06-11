/**
 * GROUP 13 - INTERACTIVE JAVASCRIPT
 * =========================================
 * This script provides interactive behaviors for the group assignment site:
 * 1. Mobile navigation menu drawer toggle.
 * 2. Contact form submission intercept and custom success notification.
 */

// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {

  // ==================== 1. MOBILE NAV DRAWER TOGGLE ====================
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  // Check if the menu toggle elements exist on the page
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      // Toggle the 'active' class on the menu list (makes it slide in/out in CSS)
      navMenu.classList.toggle('active');
      
      // Update hamburger icon style or rotation if desired
      if (navMenu.classList.contains('active')) {
        menuToggle.innerHTML = '&#10006;'; // Close 'X' icon
      } else {
        menuToggle.innerHTML = '&#9776;'; // Hamburger menu icon
      }
    });

    // Close the mobile menu if the user clicks anywhere outside of it
    document.addEventListener('click', (event) => {
      const isClickInsideMenu = navMenu.contains(event.target);
      const isClickOnToggle = menuToggle.contains(event.target);
      
      if (!isClickInsideMenu && !isClickOnToggle && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        menuToggle.innerHTML = '&#9776;';
      }
    });
  }

  // ==================== 2. CONTACT FORM SUBMISSION INTERACTION ====================
  const contactForm = document.getElementById('contactForm');
  const successAlert = document.getElementById('formSuccessAlert');

  // Check if contact form exists on the current page
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      // Prevent the default browser form submission (which reloads the page)
      event.preventDefault();

      // Retrieve form values
      const name = document.getElementById('userName').value.trim();
      const email = document.getElementById('userEmail').value.trim();
      const message = document.getElementById('userMessage').value.trim();

      // Array of all team member email addresses
      const teamEmails = [
        '2425402613@live.gctu.edu.gh', // Team Leader
        '2425400774@live.gctu.edu.gh', // Frontend Designer
        '2425402044@live.gctu.edu.gh', // QA
        '2425404295@live.gctu.edu.gh', // JS Developer
        '2425402789@live.gctu.edu.gh'  // Content Writer
      ].join(',');

      // Construct the subject and body for the email
      const mailtoSubject = encodeURIComponent(`New message from ${name} via Group 13 Website`);
      const mailtoBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

      // Open the user's default email client pre-filled with the team's emails
      window.location.href = `mailto:${teamEmails}?subject=${mailtoSubject}&body=${mailtoBody}`;

      // Log values to console for demonstration/grading purposes
      console.log('--- Form Submission (Opening Email Client) ---');
      console.log('To:', teamEmails);
      console.log('Sender Name:', name);
      console.log('Sender Email:', email);
      console.log('Message:', message);

      // Show the customized success notification banner
      if (successAlert) {
        successAlert.style.display = 'block';
        successAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Reset the form input fields
        contactForm.reset();

        // Automatically hide the success alert after 6 seconds
        setTimeout(() => {
          successAlert.style.display = 'none';
        }, 6000);
      } else {
        // Fallback standard browser alert if the custom banner is not in DOM
        alert(`Thank you, ${name}! Your message was sent successfully.`);
        contactForm.reset();
      }
    });
  }

});
