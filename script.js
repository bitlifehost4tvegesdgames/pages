// Settings Management
const SETTINGS_KEY = 'tveg_settings';
const DEFAULT_PANIC_URL = 'https://www.google.com';

// Initialize settings on page load
document.addEventListener('DOMContentLoaded', function() {
    loadSettings();
    setupPanicKeyListener();
    updatePanicKeyDisplay();
});

// Load settings from localStorage
function loadSettings() {
    const settings = JSON.parse(localStorage.getItem(SETTINGS_KEY)) || {};
    
    // Apply disguise if saved
    if (settings.pageTitle) {
        document.title = settings.pageTitle;
    }
    if (settings.faviconUrl) {
        setFavicon(settings.faviconUrl);
    }
    
    // Populate form fields
    if (document.getElementById('pageTitle')) {
        document.getElementById('pageTitle').value = settings.pageTitle || '';
        document.getElementById('faviconUrl').value = settings.faviconUrl || '';
        document.getElementById('bgText').value = settings.bgText || '';
        document.getElementById('panicUrl').value = settings.panicUrl || DEFAULT_PANIC_URL;
        document.getElementById('darkMode').checked = settings.darkMode !== false;
        document.getElementById('soundEnabled').checked = settings.soundEnabled || false;
        document.getElementById('animationsEnabled').checked = settings.animationsEnabled !== false;
        
        // Update panic key display
        if (settings.panicKey) {
            document.getElementById('panicKey').value = settings.panicKey;
            updatePanicKeyDisplay();
        }
    }
}

// Save settings to localStorage
function saveSettings(settings) {
    const existing = JSON.parse(localStorage.getItem(SETTINGS_KEY)) || {};
    const updated = { ...existing, ...settings };
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(updated));
}

// Open settings modal
function openSettings() {
    document.getElementById('settingsModal').style.display = 'flex';
    loadSettings();
}

// Close settings modal
function closeSettings() {
    document.getElementById('settingsModal').style.display = 'none';
}

// Close settings when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('settingsModal');
    if (event.target === modal) {
        closeSettings();
    }
});

// Apply disguise settings
function applyDisguise() {
    const pageTitle = document.getElementById('pageTitle').value || 'TVEGesd\'s Games';
    const faviconUrl = document.getElementById('faviconUrl').value;
    const bgText = document.getElementById('bgText').value;
    
    // Apply title
    document.title = pageTitle;
    
    // Apply favicon
    if (faviconUrl) {
        setFavicon(faviconUrl);
    }
    
    // Apply background text if provided
    if (bgText) {
        applyBackgroundText(bgText);
    }
    
    // Save settings
    saveSettings({
        pageTitle: pageTitle,
        faviconUrl: faviconUrl,
        bgText: bgText
    });
    
    playSound('success');
    showNotification('Disguise Applied! ✓');
}

// Set favicon
function setFavicon(url) {
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.rel = 'icon';
    link.href = url;
    document.head.appendChild(link);
}

// Apply background text
function applyBackgroundText(text) {
    let bgOverlay = document.getElementById('bgTextOverlay');
    if (!bgOverlay) {
        bgOverlay = document.createElement('div');
        bgOverlay.id = 'bgTextOverlay';
        bgOverlay.className = 'bg-text-overlay';
        document.body.appendChild(bgOverlay);
    }
    bgOverlay.textContent = text;
    bgOverlay.style.display = 'block';
}

// Panic Key Functionality
function recordPanicKey() {
    const panicKeyInput = document.getElementById('panicKey');
    panicKeyInput.value = 'Press any key...';
    panicKeyInput.style.color = '#ff4c4c';
    
    const handleKeyPress = function(e) {
        const key = e.key.toUpperCase();
        panicKeyInput.value = key;
        panicKeyInput.style.color = '#4facfe';
        document.removeEventListener('keydown', handleKeyPress);
    };
    
    document.addEventListener('keydown', handleKeyPress);
}

// Apply panic key settings
function applyPanicKey() {
    const panicKey = document.getElementById('panicKey').value;
    const panicUrl = document.getElementById('panicUrl').value || DEFAULT_PANIC_URL;
    
    if (!panicKey) {
        showNotification('Please record a panic key first!', 'error');
        return;
    }
    
    saveSettings({
        panicKey: panicKey,
        panicUrl: panicUrl
    });
    
    updatePanicKeyDisplay();
    playSound('success');
    showNotification('Panic Key Saved! ✓');
}

// Update panic key display
function updatePanicKeyDisplay() {
    const settings = JSON.parse(localStorage.getItem(SETTINGS_KEY)) || {};
    const panicKeyDisplay = document.getElementById('panicKeyDisplay');
    if (panicKeyDisplay) {
        panicKeyDisplay.textContent = settings.panicKey || 'Not Set';
    }
}

// Setup panic key listener
function setupPanicKeyListener() {
    document.addEventListener('keydown', function(e) {
        const settings = JSON.parse(localStorage.getItem(SETTINGS_KEY)) || {};
        if (settings.panicKey && e.key.toUpperCase() === settings.panicKey) {
            triggerPanic();
        }
    });
}

// Trigger panic mode
function triggerPanic() {
    const settings = JSON.parse(localStorage.getItem(SETTINGS_KEY)) || {};
    const panicUrl = settings.panicUrl || DEFAULT_PANIC_URL;
    
    playSound('alert');
    
    // Fade out current page
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease-out';
    
    // Redirect after fade
    setTimeout(() => {
        window.location.href = panicUrl;
    }, 300);
}

// Toggle dark mode
function toggleDarkMode() {
    const darkModeEnabled = document.getElementById('darkMode').checked;
    document.body.classList.toggle('light-mode', !darkModeEnabled);
    
    saveSettings({
        darkMode: darkModeEnabled
    });
}

// Sound effects
function playSound(type) {
    const settings = JSON.parse(localStorage.getItem(SETTINGS_KEY)) || {};
    if (!settings.soundEnabled) return;
    
    // Create simple beep using Web Audio API
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    switch(type) {
        case 'success':
            oscillator.frequency.value = 800;
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.1);
            break;
        case 'alert':
            oscillator.frequency.value = 1200;
            gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.2);
            break;
    }
}

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Reset all settings
function resetAllSettings() {
    if (confirm('Are you sure you want to reset all settings?')) {
        localStorage.removeItem(SETTINGS_KEY);
        document.title = 'TVEGesd\'s Games - Home';
        
        // Reset form
        document.getElementById('pageTitle').value = '';
        document.getElementById('faviconUrl').value = '';
        document.getElementById('bgText').value = '';
        document.getElementById('panicUrl').value = DEFAULT_PANIC_URL;
        document.getElementById('panicKey').value = '';
        
        // Remove background overlay
        const bgOverlay = document.getElementById('bgTextOverlay');
        if (bgOverlay) bgOverlay.remove();
        
        // Reset dark mode
        document.getElementById('darkMode').checked = true;
        document.body.classList.remove('light-mode');
        
        playSound('success');
        showNotification('Settings Reset! ✓');
        updatePanicKeyDisplay();
    }
}

// Additional keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Alt + S to open settings
    if (e.altKey && e.key === 's') {
        e.preventDefault();
        openSettings();
    }
    
    // Escape to close settings
    if (e.key === 'Escape') {
        closeSettings();
    }
});

// Prevent accidental panic key while typing
document.addEventListener('focus', function(e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        // Disable panic key while typing
    }
}, true);
