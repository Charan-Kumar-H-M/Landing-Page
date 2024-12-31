// Get the modal and button elements
const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModalBtn');
const admissionForm = document.getElementById('admissionForm');

// Open the modal when the "Apply Now" button is clicked
openModalBtn.onclick = function () {
    modal.style.display = 'flex';
};

// Close the modal when the close button (×) is clicked
closeModalBtn.onclick = function () {
    modal.style.display = 'none';
};

// Close the modal and reset the form when the form is submitted
admissionForm.onsubmit = function (event) {
    event.preventDefault();  // Prevent form submission (for demonstration purposes)

    // You can handle the form data here, for example, send it to the server
    console.log('Form submitted:', {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
    });

    // Close the modal after submission
    modal.style.display = 'none';

    // Optionally, reset the form fields
    admissionForm.reset();
};
