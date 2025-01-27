document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from reloading the page

  // Get the values from the form
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);
  const gender = document.getElementById("gender").value;

  // Validate the date and month input
  if (day < 1 || day > 31 || month < 1 || month > 12) {
    alert("Please enter a valid day and month.");
    return;
  }

  // Century and year digits
  const century = Math.floor(year / 100);
  const yearDigits = year % 100;

  // Day of the week formula
  const dayOfWeek =
    Math.floor(
      century / 4 -
        2 * century -
        1 +
        (5 * yearDigits) / 4 +
        (26 * (month + 1)) / 10 +
        day
    ) % 7;

  // Akan names based on day of the week and gender
  const maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ];
  const femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama",
  ];

  let akanName = "";
  if (gender === "male") {
    akanName = maleNames[dayOfWeek];
  } else if (gender === "female") {
    akanName = femaleNames[dayOfWeek];
  }

  // Display the Akan name in the result section
  const resultDiv = document.getElementById("result");
  resultDiv.innerText = `Your Akan name is: ${akanName}`;
});
