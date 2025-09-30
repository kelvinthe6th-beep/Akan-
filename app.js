
const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

document.getElementById("akanForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const birthdate = document.getElementById("birthdate").value;
  const gender = document.querySelector('input[name="gender"]:checked');

  
  if (!birthdate) {
    alert("please ensure that you have enter your date of birth.");
    return;
  }
  if (!gender) {
    alert("please ensure that you have selected your gender.");
    return;
  }


  const dateObj = new Date(birthdate);
  const dayIndex = dateObj.getDay(); // 0 = Sunday, 6 = Saturday

  // Select Akan name
  let akanName;
  if (gender.value === "male") {
    akanName = maleNames[dayIndex];
  } else {
    akanName = femaleNames[dayIndex];
  }

  // Display result
  document.getElementById("result").textContent =
    `Your womb escape was on a ${daysOfWeek[dayIndex]} & Your Akan name is ${akanName}.`;
});
