  const form = document.getElementById('registrationForm');
  const inputs = form.querySelectorAll('input, select');
  
  const emailRegex = /^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$/;
  const phoneRegex = /^\\+91[6-9]\\d{9}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/;

  function validateField(input) {
    const id = input.id;
    const value = input.value.trim();
    const error = document.getElementById(id + 'Error');
    let valid = true;

    switch (id) {
      case 'fullName':
        valid = value.length > 0;
        break;
      case 'email':
        valid = emailRegex.test(value);
        break;
      case 'password':
        valid = passwordRegex.test(value);
        break;
      case 'phone':
        valid = phoneRegex.test(value);
        break;
      case 'gender':
      case 'city':
        valid = value !== '';
        break;
      case 'terms':
        valid = input.checked;
        break;
    }

    if (!valid) {
      error.style.display = 'block';
      input.classList.add('invalid');
      input.classList.remove('success');
    } else {
      error.style.display = 'none';
      input.classList.remove('invalid');
      input.classList.add('success');
    }

    return valid;
  }

  function togglePassword() {
    const pwd = document.getElementById('password');
    const toggle = document.querySelector('.toggle-visibility');
    pwd.type = pwd.type === 'password' ? 'text' : 'password';
    toggle.textContent = pwd.type === 'password' ? 'Show' : 'Hide';
  }

  function showPasswordStrength() {
    const pwd = document.getElementById('password').value;
    const strength = document.getElementById('passwordStrength');
    let score = 0;
    if (pwd.length >= 8) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[a-z]/.test(pwd)) score++;
    if (/\\d/.test(pwd)) score++;
    if (/[@$!%*?&]/.test(pwd)) score++;

    if (score <= 2) {
      strength.textContent = 'Weak';
      strength.className = 'strength weak';
    } else if (score === 3 || score === 4) {
      strength.textContent = 'Medium';
      strength.className = 'strength medium';
    } else {
      strength.textContent = 'Strong';
      strength.className = 'strength strong';
    }
  }

  inputs.forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    if (input.id === 'password') {
      input.addEventListener('input', showPasswordStrength);
    }
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    let allValid = true;
    inputs.forEach(input => {
      if (!validateField(input)) allValid = false;
    });

    if (allValid) {
      alert('Registration successful!');
      form.reset();
      document.querySelectorAll('.success').forEach(el => el.classList.remove('success'));
      document.getElementById('passwordStrength').textContent = '';
    }
  });
