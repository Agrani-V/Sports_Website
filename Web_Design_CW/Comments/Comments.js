const form = document.querySelector('form');
const submitButton = document.querySelector('button[type="submit"]');

submitButton.addEventListener('click', function(event) {
  event.preventDefault();
  
  const rating = document.getElementById('rating-section');
  const reasons = document.getElementById('subject');
  const dropdownOne = document.getElementById('dropdown1');
  const dropdownTwo = document.getElementById('dropdown2'); 

  let isValid = true;
  if (rating.value === '') {
    rating.classList.add('alert');
    isValid = false;
  } else {
    rating.classList.remove('alert');
  }
  
  if (reasons.value === '') {
    reasons.classList.add('alert');
    isValid = false;
  } else {
    reasons.classList.remove('alert');
  }
  
  if (dropdownOne.value === '') {
    dropdownOne.classList.add('alert');
    isValid = false;
  } else {
    dropdownOne.classList.remove('alert');
  }

  if (dropdownTwo.value === '') {
    dropdownTwo.classList.add('alert');
    isValid = false;
  } else {
    dropdownTwo.classList.remove('alert');
  }
  
  if (isValid) {
    alert('Thank you for taking your time to give us your feedback!');
    form.submit();
  } else {
    alert('Please fill in all required fields.');
  }
});

