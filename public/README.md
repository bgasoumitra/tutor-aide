# Tutor Aide Landing Page & Deep Linking Hub

Welcome to the official web repository for **Tutor Aide**—a modern, automated classroom management ecosystem designed for tutors and students. 

This folder contains the complete, static web project including the product showcase landing page, the Privacy Policy page, and the configuration assets required for **Google Play Console App Links** (Android deep linking).

---

## 🌟 Key Website Features

1. **Vibrant & Responsive Design:** Uses a premium dark-themed color palette matching the Jetpack Compose Android app interface. Fully responsive across smartphones, tablets, Chromebooks, and desktops.
2. **Dynamic Language Selector (EN / BN / HI):** 
   - Supports **English**, **Bengali (বাংলা)**, and **Hindi (हिन्दी)**.
   - Updates text dynamically without reload or layout shifts.
   - Includes automatic browser language detection (defaults to Bengali in Bangladesh and Hindi in India).
3. **Core Dashboard Tab Toggles:** Features a tab interface switching seamlessly between Teacher Dashboard and Student Dashboard modules.
4. **App Screenshot Slider:** Touch-friendly horizontal carousel showcasing all 21 mobile interface screenshots.
5. **Privacy Policy Page:** Professional, multi-lingual Privacy Policy (`privacy-policy.html`) matching the exact requirements for Google Play Console submission.
6. **Android App Links Integration:** Built-in `.well-known/assetlinks.json` configuration for seamless deep link validation.

---

## 📂 Project Directory Structure

```text
public/
├── index.html                  # Main product landing page
├── privacy-policy.html         # Google Play-compliant Privacy Policy
├── app-ads.txt                 # AdMob publisher validation file
├── 404.html                    # Fallback page for hosting routes
├── .well-known/
│   └── assetlinks.json         # Android App Links JSON verification file
└── assets/
    ├── css/
    │   └── style.css           # Custom stylesheets (variables, grids, animations)
    ├── js/
    │   └── main.js            # Language toggler, sliders, and tab switcher logic
    └── images/
        ├── logo.png            # Application logo
        ├── banner.jpg          # Chromebook/Tablet display ad banner
        ├── feature-graphic.png # Large hero graphic
        └── screenshots/        # Folder containing 21 mobile screenshots
```

---

## 🚀 How to Run Locally

You can open the website files directly:
1. Double-click `index.html` to open it in any web browser.
2. Alternatively, run a lightweight HTTP server in the directory:
   ```bash
   # Using Node.js (npx)
   npx http-server .
   
   # Using Python
   python -m http.server 8000
   ```

---

## 🌐 Deployment Guidelines

### Option A: Firebase Hosting (Recommended)
This directory is pre-configured with the project's `firebase.json` settings. Run the following command in the parent directory to deploy:
```bash
firebase deploy --only hosting
```
Your website will be live at `https://coachingmanagement-4a031.web.app` and `https://coachingmanagement-4a031.firebaseapp.com`.

### Option B: GitHub Pages
1. Push the contents of the `public/` directory to a new GitHub repository.
2. In your repository settings, navigate to **Pages**.
3. Under **Build and deployment**, set the source branch (e.g., `main` or `gh-pages`) and path (e.g., `/root`).
4. Save and your page will be online.

---

## 🔗 Android App Links (Deep Linking) Verification Guide

To link your website with the Android application so that URLs (like invitations or receipts) open directly in the app:

### 1. Configure the SHA-256 Key
Open `.well-known/assetlinks.json` and replace `"YOUR_PLAY_CONSOLE_SHA256_FINGERPRINT_HERE"` with your actual App Signing key fingerprint:
```json
"sha256_cert_fingerprints": [
  "XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX"
]
```
> **Note:** Find this in **Google Play Console** -> **Setup** -> **App Integrity** -> **App signing key certificate**.

### 2. Configure AndroidManifest.xml
Add or modify the intent filter inside your Android app's `AndroidManifest.xml` (usually under `MainActivity`):
```xml
<intent-filter android:autoVerify="true">
    <action android:name="android.intent.action.VIEW" />
    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />
    
    <data android:scheme="http" />
    <data android:scheme="https" />
    <data android:host="coachingmanagement-4a031.web.app" />
    <data android:host="coachingmanagement-4a031.firebaseapp.com" />
    <!-- Add your custom domain here if you map one -->
</intent-filter>
```

---

## 👨‍💻 Developer Information

* **Developer:** Soumitra Saha
* **Email:** bgasoumitra@gmail.com
* **App Version:** 1.1.2 (2026)
* **Copyright:** © 2026 Tutor Aide. All rights reserved.
