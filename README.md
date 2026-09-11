# DeepVerify - AI Fake News Detection System

A modern, responsive web application for detecting fake news using artificial intelligence. DeepVerify provides a secure, user-friendly interface for analyzing text, images, and URLs to verify their authenticity.

## Features

- **Secure Login Gateway**: Protected access with authentication system
- **Text Analysis**: Analyze news articles and text content for authenticity
- **Image Analysis**: Detect manipulated images, deepfakes, and verify photo authenticity
- **URL Analysis**: Verify website credibility and check article URLs
- **Real-Time Results**: Fast processing with instant analysis results
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean blue-white theme with professional layout

## Project Structure

```
DeepVerify/
├── index.html              # Login page (entry point)
├── home.html               # Home page with analysis options
├── text-analysis.html      # Text analysis page
├── image-analysis.html     # Image analysis page
├── url-analysis.html       # URL analysis page
├── about.html              # About page
├── css/
│   └── styles.css         # Main stylesheet
├── js/
│   ├── auth.js            # Authentication management
│   └── navigation.js      # Navigation bar rendering
├── assets/                # Images, logos, and other assets
└── README.md              # This file
```

## Getting Started

### Local Development

1. **Open the project**: Simply open `index.html` in a web browser
   - For best results, use a local web server (see below)

2. **Using a local web server** (Recommended):
   ```bash
   # Using Python 3
   python -m http.server 8000

   # Using Python 2
   python -m SimpleHTTPServer 8000

   # Using Node.js (http-server)
   npx http-server
   ```

3. **Access the application**:
   - Open your browser and navigate to `http://localhost:8000`

### Demo Credentials

For testing purposes, use these demo credentials:

- **Username**: `admin`
- **Password**: `admin123`

Other demo accounts:

- **Username**: `user` / **Password**: `user123`
- **Username**: `demo` / **Password**: `demo123`

**Note**: Replace these with actual backend authentication in production.


## Backend Integration

The frontend is ready for backend integration. Look for `TODO` comments in the code:

### Authentication (`js/auth.js`)

```javascript
// TODO: Replace with actual backend API call
// Line ~20-45: handleLogin() function
```

### Text Analysis (`text-analysis.html`)

```javascript
// TODO: Replace with actual backend API call
// Line ~95-115: API endpoint for text analysis
```

### Image Analysis (`image-analysis.html`)

```javascript
// TODO: Replace with actual backend API call
// Line ~125-145: API endpoint for image analysis
```

### URL Analysis (`url-analysis.html`)

```javascript
// TODO: Replace with actual backend API call
// Line ~80-100: API endpoint for URL analysis
```

### Expected API Endpoints

1. **Login**: `POST /api/auth/login`

   ```json
   {
     "username": "user",
     "password": "pass"
   }
   ```

2. **Text Analysis**: `POST /api/analyze/text`

   ```json
   {
     "text": "article text here"
   }
   ```

3. **Image Analysis**: `POST /api/analyze/image`
   - FormData with `image` file

4. **URL Analysis**: `POST /api/analyze/url`

   ```json
   {
     "url": "https://example.com/article"
   }
   ```

## Design Features

- **Color Scheme**: Blue-white theme with gradients
- **Typography**: Modern, readable fonts (Segoe UI family)
- **Responsive**: Mobile-first design with breakpoints
- **Animations**: Smooth transitions and hover effects
- **Accessibility**: Semantic HTML and proper form labels

## Security Notes

- Current authentication uses localStorage (demo only)
- In production, implement proper session management
- Use HTTPS for all API calls
- Implement CSRF protection
- Validate and sanitize all user inputs
- Store JWT tokens securely (httpOnly cookies recommended)

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS variables
- **JavaScript (ES6+)**: Client-side functionality
- **LocalStorage**: Session management (demo)

## Development Notes

### Adding New Features

1. **New Analysis Type**:
   - Create new HTML page following existing pattern
   - Add navigation link in `js/navigation.js`
   - Create corresponding API endpoint

2. **Styling Changes**:
   - Modify `css/styles.css`
   - Use CSS variables for theming

3. **Authentication Updates**:
   - Modify `js/auth.js`
   - Update login logic as needed

## Troubleshooting

### Navigation not appearing

- Check if user is authenticated
- Verify `js/navigation.js` is loaded
- Check browser console for errors

### Forms not submitting

- Check browser console for JavaScript errors
- Verify all required fields are filled
- Ensure JavaScript is enabled

### Styling issues

- Clear browser cache
- Verify `css/styles.css` is loaded
- Check for CSS syntax errors

## License

This project is provided as-is for development purposes.

## Contributing

When integrating with backend:

1. Replace all `TODO` comments with actual API calls
2. Update authentication to use secure tokens
3. Add error handling for network failures
4. Implement proper loading states
5. Add user feedback for all actions

## Support

For backend integration questions or issues, refer to your backend API documentation.

---

**DeepVerify** - Stay informed. Stay verified.
