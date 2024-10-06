const toggleButton = document.getElementById('toggle-button');
const closeButton = document.getElementById('close-button');
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('main-content');

// Open sidebar
toggleButton.addEventListener('click', function() {
    sidebar.style.width = '250px'; // Set sidebar width
    mainContent.style.marginLeft = '250px'; // Push main content to the right
});

// Close sidebar
closeButton.addEventListener('click', function() {
    sidebar.style.width = '0'; // Reset sidebar width
    mainContent.style.marginLeft = '0'; // Reset main content margin
});
