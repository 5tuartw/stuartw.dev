document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    // Modal functionality for project screenshots
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.modal-close');

    // Get all project screenshots
    const screenshots = document.querySelectorAll('.project-screenshot img');

    screenshots.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        });
    });

    // Close modal when clicking the × button
    closeBtn.addEventListener('click', closeModal);

    // Close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }

    // Function to show a specific tab
    function showTab(tabId) {
        // Deactivate all buttons and panels
        tabButtons.forEach(button => button.classList.remove('active'));
        tabPanels.forEach(panel => panel.classList.remove('active'));

        // Activate the clicked button and its corresponding panel
        const activeTabButton = document.querySelector(`.tab-button[data-tab="${tabId}"]`);
        const activeTabPanel = document.getElementById(tabId);

        if (activeTabButton) {
            activeTabButton.classList.add('active');
        }
        if (activeTabPanel) {
            activeTabPanel.classList.add('active');
        }
    }

    // Add click event listeners to tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.dataset.tab; // Get the data-tab attribute value
            showTab(tabId);
        });
    });

    // Set the initial active tab
    // Check for a hash in the URL to open a specific tab, otherwise default to 'summary'
    const initialTab = window.location.hash ? window.location.hash.substring(1) : 'summary';
    showTab(initialTab);
});