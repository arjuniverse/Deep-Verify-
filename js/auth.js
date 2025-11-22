/**
 * DeepVerify - Authentication Management
 * Handles user login, logout, and session management
 */

// Check if user is logged in
function isAuthenticated() {
    return localStorage.getItem('deepverify_authenticated') === 'true';
}

// Set user as authenticated
function setAuthenticated(value) {
    localStorage.setItem('deepverify_authenticated', value ? 'true' : 'false');
    if (value) {
        localStorage.setItem('deepverify_login_time', new Date().toISOString());
    }
}

// Handle login
function handleLogin(username, password) {
    // TODO: Replace with actual backend authentication
    // For now, using simple authentication (demo purposes)
    // In production, this should call your backend API
    
    // Demo credentials (remove in production)
    const validCredentials = {
        'admin': 'admin123',
        'user': 'user123',
        'demo': 'demo123'
    };
    
    // Simulate API call delay
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (validCredentials[username] && validCredentials[username] === password) {
                setAuthenticated(true);
                localStorage.setItem('deepverify_username', username);
                resolve({ success: true, username: username });
            } else {
                reject({ success: false, message: 'Invalid username or password' });
            }
        }, 500); // Simulate network delay
    });
    
    // TODO: Replace above with actual backend call:
    /*
    return fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            setAuthenticated(true);
            localStorage.setItem('deepverify_token', data.token);
            localStorage.setItem('deepverify_username', data.username);
            return data;
        } else {
            throw new Error(data.message || 'Login failed');
        }
    });
    */
}

// Handle logout
function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('deepverify_username');
    localStorage.removeItem('deepverify_token');
    localStorage.removeItem('deepverify_login_time');
    window.location.href = 'index.html';
}

// Check authentication and redirect if needed
function requireAuth() {
    if (!isAuthenticated()) {
        window.location.href = 'index.html';
        return false;
    }
    return true;
}

// Initialize authentication check on page load
function initAuth() {
    // Check if current page requires authentication (all except login page)
    const currentPage = window.location.pathname.split('/').pop();
    const publicPages = ['index.html', ''];
    
    if (!publicPages.includes(currentPage)) {
        requireAuth();
    } else if (currentPage === 'index.html' && isAuthenticated()) {
        // If already logged in and on login page, redirect to home
        window.location.href = 'home.html';
    }
}

// Get current user
function getCurrentUser() {
    return localStorage.getItem('deepverify_username') || 'User';
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initAuth();
});


