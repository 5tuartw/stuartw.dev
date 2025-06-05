document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');

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