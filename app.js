let signupData = {};

    // Handle sign up form
    document.getElementById('signupForm').addEventListener('submit', function(event) {
      event.preventDefault();
      signupData = {
        name: document.getElementById('signupName').value,
        email: document.getElementById('signupEmail').value,
        password: document.getElementById('signupPassword').value
      };
      document.getElementById('signup').classList.add('hidden');
      document.getElementById('signin').classList.remove('hidden');
    });

    // Handle sign in form
    document.getElementById('signinForm').addEventListener('submit', function(event) {
      event.preventDefault();
      const email = document.getElementById('signinEmail').value;
      const password = document.getElementById('signinPassword').value;

      if (email === signupData.email && password === signupData.password) {
        document.getElementById('signin').classList.add('hidden');
        document.getElementById('dashboard').classList.remove('hidden');

        // Set user profile details
        document.getElementById('userName').textContent = signupData.name;
        document.getElementById('userProfileName').textContent = signupData.name;
        document.getElementById('userProfileEmail').textContent = signupData.email;
      } else {
        document.getElementById('signinError').classList.remove('hidden');
      }
    });

    // Handle logout
    document.getElementById('logoutBtn').addEventListener('click', function() {
      document.getElementById('dashboard').classList.add('hidden');
      document.getElementById('signin').classList.remove('hidden');
    });