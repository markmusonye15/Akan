# Project name

Akan name Generator

## This is a web application that can be used to generate the names of individuals based on their date, month and year of birth.

## Author

Mark Chumba

## setup instructions

https://github.com/markmusonye15/Akan

## BDD

Feature: Akan Name Generation
As a user,
I want to enter my date of birth and gender
So that I can receive my Akan name based on my birth date and gender.

Scenario 1: User Enters a Valid Date and Gender
Given the user is on the Akan Name Generator page,
And the user is prompted to enter their day, month, year of birth, and gender,
When the user enters the following data:

Day: 5
Month: 3
Year: 1992
Gender: male,
And clicks the Generate Akan Name button,
Then the system should calculate the day of the week and display the appropriate Akan name for a male born on March 5, 1992,
And the displayed Akan name should be Kwabena (since March 5, 1992, is a Wednesday and "Kwabena" is the name for Wednesday for males).
Scenario 2: User Enters an Invalid Day
Given the user is on the Akan Name Generator page,
When the user enters the following data:

Day: 35 (invalid day),
Month: 4,
Year: 2000,
Gender: female,
And clicks the Generate Akan Name button,
Then the system should display an error message stating "Please enter a valid day and month."
Scenario 3: User Enters an Invalid Month
Given the user is on the Akan Name Generator page,
When the user enters the following data:

Day: 15,
Month: 13 (invalid month),
Year: 1985,
Gender: male,
And clicks the Generate Akan Name button,
Then the system should display an error message stating "Please enter a valid day and month."
Scenario 4: User Enters a Valid Date but Incorrect Year Format
Given the user is on the Akan Name Generator page,
When the user enters the following data:

Day: 28,
Month: 7,
Year: 85 (incorrect year format, should be 1985),
Gender: female,
And clicks the Generate Akan Name button,
Then the system should correctly interpret the year as 1985,
And the Akan name displayed should be Abenaa (since July 28, 1985, is a Sunday for females).
Scenario 5: User Selects Female Gender
Given the user is on the Akan Name Generator page,
When the user enters the following data:

Day: 2,
Month: 11,
Year: 1990,
Gender: female,
And clicks the Generate Akan Name button,
Then the system should calculate the day of the week and display the appropriate Akan name for a female born on November 2, 1990,
And the displayed Akan name should be Akua (since November 2, 1990, is a Wednesday and "Akua" is the name for Wednesday for fema

## Technologies used

html css javascript

## Contact information

mark.musonye@student.moringaschool.com

## copyright

Mark chumba
