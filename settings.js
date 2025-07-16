// Elements
const nameInput = document.getElementById('profile-name');
const emailInput = document.getElementById('profile-email');
const passwordInput = document.getElementById('profile-password');
const togglePasswordBtn = document.querySelector('.toggle-password');
const themeToggle = document.getElementById('theme-toggle');
const notificationsToggle = document.getElementById('notifications-toggle');
const saveBtn = document.querySelector('.save-btn');
const saveMsg = document.querySelector('.save-message');

// Load settings from localStorage
function loadSettings() {
  const settings = JSON.parse(localStorage.getItem('wms-settings') || '{}');
  if (settings.name) nameInput.value = settings.name;
  if (settings.email) emailInput.value = settings.email;
  if (settings.theme === 'dark') {
    themeToggle.checked = true;
    document.body.classList.add('dark-mode');
  } else {
    themeToggle.checked = false;
    document.body.classList.remove('dark-mode');
  }
  if (settings.notifications) notificationsToggle.checked = true;
  if (settings.password) passwordInput.value = settings.password;
}

// Save settings to localStorage
function saveSettings(e) {
  e.preventDefault();
  const settings = {
    name: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
    theme: themeToggle.checked ? 'dark' : 'light',
    notifications: notificationsToggle.checked
  };
  localStorage.setItem('wms-settings', JSON.stringify(settings));
  saveMsg.style.display = 'block';
  setTimeout(() => saveMsg.style.display = 'none', 2000);
}

// Theme toggle
function handleThemeToggle() {
  if (themeToggle.checked) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}

themeToggle.addEventListener('change', handleThemeToggle);
saveBtn.addEventListener('click', saveSettings);

togglePasswordBtn.addEventListener('click', function(e) {
  e.preventDefault();
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    togglePasswordBtn.textContent = 'Hide';
  } else {
    passwordInput.type = 'password';
    togglePasswordBtn.textContent = 'Show';
  }
});

// On page load
loadSettings(); 