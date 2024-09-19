function loadComponent(id, file) {
    fetch("components/" + file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}

function loadContent(file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        });
}

// Load header and footer
document.addEventListener("DOMContentLoaded", function() {
    loadComponent('header', 'header.html');
    loadComponent('footer', 'footer.html');

    // Load initial content (e.g., home page)
    loadComponent('content', 'home.html')
});

// Handle navigation without reloading the page
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.dataset.load) {
        e.preventDefault();
        loadContent(e.target.getAttribute('href'));
    }
});

