let savedEmail = '';
let savedPassword = '';
let savedUsername = '';

function signup() {
  savedUsername = document.getElementById('signupUsername').value;
  savedEmail = document.getElementById('signupEmail').value;
  savedPassword = document.getElementById('signupPassword').value;

  alert('Signup successful!');
  console.log('User Information:', {
    username: savedUsername,
    email: savedEmail,
    password: savedPassword
  });

  return false; // Prevent form submission and page reload
}

function login() {
  const loginEmail = document.getElementById('loginEmail').value;
  const loginPassword = document.getElementById('loginPassword').value;

  if (loginEmail !== savedEmail) {
    alert('Invalid email!');
  } else if (loginPassword !== savedPassword) {
    alert('Invalid password!');
  } else {
    alert('Login successful!');
    console.log('Logged in User:', {
      username: savedUsername,
      email: savedEmail,
      password: savedPassword
    });
  }

  return false; // Prevent form submission and page reload
}
