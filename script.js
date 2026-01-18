document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('audit-form');
    const formSection = document.getElementById('diagnosis-form');
    const successSection = document.getElementById('success-message');
    const submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Basic Validation (HTML5 handles most of it due to 'required' attributes)
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        console.log('Form Submitted with data:', data);

        // UI Feedback: Loading State
        const originalBtnText = submitBtn.textContent;
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;

        // Simulate Network Request (1.5 seconds)
        setTimeout(() => {
            // Success State
            form.reset();

            // Hide Form Section with a fade out effect (optional, but simple display toggle here)
            formSection.style.display = 'none';

            // Show Success Message
            successSection.classList.remove('hidden');

            // Scroll to success message
            successSection.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Reset button state (in case we show form again later, though we don't here)
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
        }, 1500);
    });
});
