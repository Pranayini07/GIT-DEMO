secureLoginForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('login.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`,
  });

  const result = await response.json();

  if (result.success) {
    // Redirect to the dashboard or show a success message
    window.location.href = 'dashboard.html';
  } else {
    // Show an error message
    alert(result.message);
  }
});
