# 🎮 TVEGesd's Games - Major Update v2.0

## 🚀 What's New

### Major Features Added:

#### 1. **⚙️ Settings System**
- Comprehensive settings modal with beautiful UI
- Access via floating settings button (bottom-right corner)
- Keyboard shortcut: **Alt + S**
- All settings saved in browser localStorage

#### 2. **🎭 Disguising Settings**
Disguise your page as something innocent:
- **Custom Page Title**: Set the browser tab title to anything (e.g., "Google Classroom", "Study Mode")
- **Custom Favicon**: Apply a custom favicon URL to match the disguise
- **Background Text**: Add watermark text behind content (e.g., "Study Mode", "Class Notes")
- Apply and save all disguise settings with one click

#### 3. **🚨 Panic Key System**
The most important feature - Quick escape to a safe page:
- **Record Panic Key**: Press any key on your keyboard to set it as your panic key
- **Panic Redirect**: Instantly redirects to a safe URL (default: Google)
- Press your panic key anytime to immediately navigate away
- Panic key indicator shows current key status at top-right
- Smooth fade-out animation during redirect

#### 4. **🎨 Display Settings**
Customize your visual experience:
- **Dark Mode**: Toggle dark/light theme (default: dark)
- **Sound Effects**: Enable/disable notification sounds
- **Animations**: Control page animations
- All preferences saved automatically

#### 5. **🔔 Notification System**
- Beautiful animated notifications for all actions
- Success notifications (blue glow)
- Error notifications (red glow)
- Auto-dismiss after 3 seconds

#### 6. **🎵 Sound Effects**
- Optional audio feedback for actions
- Success beep (800Hz tone)
- Alert/Panic beep (1200Hz tone)
- Uses Web Audio API for universal compatibility

---

## 📖 How to Use

### Opening Settings
- Click the **⚙️ button** in bottom-right corner, OR
- Press **Alt + S** on your keyboard
- Press **Escape** to close

### Setting Up Disguise
1. Click Settings button
2. Go to "Disguising Settings" section
3. Enter desired page title (e.g., "Google Classroom")
4. (Optional) Add favicon URL
5. (Optional) Add background watermark text
6. Click "Apply Disguise"

### Setting Up Panic Key
1. Click Settings button
2. Go to "Panic Key Settings" section
3. Click "Record Key" button
4. Press any key (letters, numbers, symbols all work)
5. Enter the URL to redirect to (default: google.com)
6. Click "Save Panic Key"
7. View your panic key in the indicator at top-right

### Using Panic Key
Simply press your recorded panic key anytime:
- Page smoothly fades out
- Redirects to your safe URL within 300ms
- Perfect for quick escape when someone walks by

---

## 🎯 Features Breakdown

### Settings Modal Sections

**Disguising Settings**
- Page Title Input
- Favicon URL Input
- Background Text Input
- Apply Disguise Button

**Panic Key Settings**
- Panic Key Display
- Record Key Button
- Panic URL Input
- Save Panic Key Button

**Display Settings**
- Dark Mode Toggle
- Sound Effects Toggle
- Animations Toggle

**Reset Section**
- Reset All Settings Button

---

## 💾 Data Storage

All settings are stored locally in your browser:
- **Location**: Browser's localStorage
- **Key**: `tveg_settings`
- **Format**: JSON object
- **Privacy**: Never sent to any server
- **Persistence**: Survives browser restart

### Stored Settings Include:
```javascript
{
    pageTitle: "Your custom title",
    faviconUrl: "URL to favicon",
    bgText: "Background text",
    panicKey: "Q",
    panicUrl: "https://google.com",
    darkMode: true,
    soundEnabled: false,
    animationsEnabled: true
}
```

---

## 🔒 Security & Privacy

✅ **100% Local Processing**
- All features work entirely in your browser
- No data sent to servers
- No tracking or analytics

✅ **Safe to Use**
- No malicious code
- Open source logic
- Browser native APIs only

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| **Alt + S** | Open Settings |
| **Escape** | Close Settings |
| **[Your Panic Key]** | Panic Redirect |

---

## 🎨 Visual Features

✨ **Modern Design**
- Glassmorphism effects
- Neon glow animations
- Smooth transitions
- Responsive layout

🌈 **Theme Support**
- Dark mode (default)
- Light mode toggle
- Custom gradient backgrounds
- Animated accents

---

## 📱 Mobile Friendly

- Fully responsive design
- Touch-friendly buttons
- Mobile-optimized settings modal
- Smaller panic indicator on mobile
- Adjustable text sizes

---

## 🛠️ Technical Details

### JavaScript Features Used
- LocalStorage API (persistent settings)
- Web Audio API (sound effects)
- DOM Manipulation (dynamic UI)
- Event Listeners (keyboard, clicks)
- CSS Animations

### CSS Features
- CSS Grid & Flexbox
- Backdrop Filter (glassmorphism)
- CSS Animations & Keyframes
- CSS Gradients
- Media Queries

### Browser Compatibility
- Chrome/Edge: ✅ Full Support
- Firefox: ✅ Full Support
- Safari: ✅ Full Support (iOS 15+)
- Mobile Browsers: ✅ Full Support

---

## 🎓 Use Cases

### School/Educational Settings
- Disguise tab as Google Classroom or Canvas
- Set panic key for instant escape
- Hide gaming activity quickly

### Work Environments
- Make tab look like work-related content
- Quick redirect to official company site
- Minimal footprint when alt-tabbing

### Privacy-Conscious Users
- Local-only processing
- No data collection
- Complete control over redirects

---

## ⚡ Performance

- Lightweight JavaScript (~8KB)
- Minimal CSS overhead
- No external dependencies
- Instant UI responses
- Smooth animations at 60fps

---

## 🔄 Updates & Improvements

### Version 2.0 Changes:
✨ Initial release with all features
- Disguising system
- Panic key system
- Full settings management
- Notification system
- Sound effects
- Dark/Light mode

---

## 📞 Support

For issues or feature requests, check the settings panel for help or reset settings if experiencing problems.

---

## 📄 License

Free to use and modify for educational purposes.

---

**Enjoy gaming safely! 🎮**

*Last Updated: November 16, 2025*
