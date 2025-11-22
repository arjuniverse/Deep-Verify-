# DeepVerify - Quick Start Guide 🚀

## ⚡ 3-Step Setup

### Step 1: Start a Local Server

Open terminal in the `DeepVerify` folder and run:

```bash
# Python 3
python -m http.server 8000

# Or Python 2
python -m SimpleHTTPServer 8000

# Or using Node.js
npx http-server
```

### Step 2: Open in Browser

Navigate to: **http://localhost:8000**

### Step 3: Login

Use these demo credentials:
- **Username**: `admin`
- **Password**: `admin123`

---

## 📋 What's Included

✅ **Login Page** (`index.html`) - Secure authentication gateway  
✅ **Home Page** (`home.html`) - Main dashboard with analysis options  
✅ **Text Analysis** (`text-analysis.html`) - Analyze text content  
✅ **Image Analysis** (`image-analysis.html`) - Upload and analyze images  
✅ **URL Analysis** (`url-analysis.html`) - Verify URLs and websites  
✅ **About Page** (`about.html`) - Project information  
✅ **Navigation Bar** - Auto-renders on all authenticated pages  
✅ **Responsive Design** - Works on all devices  

---

## 🎯 Key Features

- 🔒 **Secure Login**: Authentication required for all pages
- 📱 **Fully Responsive**: Mobile, tablet, desktop ready
- 🎨 **Modern UI**: Clean blue-white theme
- ⚡ **Fast Loading**: Optimized CSS and JavaScript
- 🔄 **Auto-Redirect**: Unauthenticated users redirected to login
- 📊 **Results Display**: Clear, formatted analysis results

---

## 🔌 Backend Integration Points

All TODO comments are marked in the code. Key integration points:

1. **`js/auth.js`** (Line ~20): Login API call
2. **`text-analysis.html`** (Line ~95): Text analysis API
3. **`image-analysis.html`** (Line ~125): Image analysis API
4. **`url-analysis.html`** (Line ~80): URL analysis API

Replace demo code with your actual backend endpoints.

---

## 🎨 Customization

### Change Colors
Edit `css/styles.css` variables:
```css
:root {
    --primary-blue: #2563eb;
    --secondary-blue: #60a5fa;
    /* ... */
}
```

### Update Logo Text
Edit navigation in `js/navigation.js` and login page in `index.html`

### Modify Pages
All HTML files are well-commented and easy to customize.

---

## 📂 File Structure

```
DeepVerify/
├── index.html          ← Start here (Login)
├── home.html           ← Dashboard
├── text-analysis.html  ← Text analysis
├── image-analysis.html ← Image analysis
├── url-analysis.html   ← URL analysis
├── about.html          ← About page
├── css/
│   └── styles.css      ← All styles
├── js/
│   ├── auth.js         ← Authentication
│   └── navigation.js   ← Navigation bar
└── assets/             ← For logos/images
```

---

## 🐛 Troubleshooting

**Page not loading?**
- Check if local server is running
- Verify you're accessing via `http://localhost:8000`

**Login not working?**
- Use demo credentials: `admin` / `admin123`
- Check browser console for errors

**Navigation missing?**
- Ensure you're logged in
- Check if `js/navigation.js` is loaded

**Styling broken?**
- Verify `css/styles.css` path is correct
- Clear browser cache

---

## ✨ That's It!

Your DeepVerify frontend is ready! Just start the server and open in your browser.

**Happy Coding! 🎉**


