/**
 * DeepVerify - Navigation Management
 * Handles navigation bar rendering and navigation functionality
 */

// Render navigation bar
function renderNavigation() {
    if (!isAuthenticated()) {
        return; // Don't show nav if not authenticated
    }
    
    const navHTML = `
        <nav class="navbar">
            <div class="navbar-content">
                <a href="home.html" class="logo">
                    <div class="logo-icon">DV</div>
                    <span>DeepVerify</span>
                </a>
                <ul class="nav-links">
                    <li><a href="home.html">Home</a></li>
                    <li><a href="text-analysis.html">Text</a></li>
                    <li><a href="image-analysis.html">Image</a></li>
                    <li><a href="url-analysis.html">URL</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="#" class="logout-btn" onclick="handleLogout(); return false;">Logout</a></li>
                </ul>
            </div>
        </nav>
    `;
    
    // Insert navigation at the beginning of body
    document.body.insertAdjacentHTML('afterbegin', navHTML);
}

// Initialize navigation on page load
document.addEventListener('DOMContentLoaded', function() {
    renderNavigation();
});


