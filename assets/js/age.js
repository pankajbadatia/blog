var birthDate = new Date('July 7, 1989');

function calculateAge() {
  var currentDate = new Date();

  var ageYears = currentDate.getFullYear() - birthDate.getFullYear();
  var ageMonths = currentDate.getMonth() - birthDate.getMonth();
  var ageDays = currentDate.getDate() - birthDate.getDate();

  if (ageDays < 0) {
    ageMonths--;
    ageDays += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  document.getElementById('result').innerHTML =
    ageYears + ' years, ' + ageMonths + ' months, and ' + ageDays + ' days';
}

// Call calculateAge initially to display the age on page load
calculateAge();