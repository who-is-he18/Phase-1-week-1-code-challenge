## Challenge 1: Student Grade Generator

### Description
The `studentGradeGenerator` function prompts the user to input student marks (between 0 and 100) and assigns the corresponding grade based on the input.

### How It Works
1. The user enters a numeric value representing the student's marks.
2. The function checks if the input is valid (within the range 0-100).
3. Based on the input, it determines the grade:
   - A: 80 or higher
   - B: 60-79
   - C: 50-59
   - D: 40-49
   - E: Less than 40
4. The function displays the calculated grade.

## Challenge 2: Speed Detector

### Description
The `giveDemeritPoints()` program takes the speed of a car as input and calculates demerit points based on the speed.

### How It Works
1. The user enters the car speed (in km/h).
2. The function checks if the input is valid (positive).
3. It calculates the points by subtracting the speed limit (70 km/h) from the entered speed and dividing by 5 (km per point).
4. If points are less than or equal to 0, it prints "Ok."
5. If points exceed 12, it prints "License suspended."
6. Otherwise, it displays the number of points.

## Challenge 3: Net Salary Calculator

### Description
The program calculates an individual's net salary based on basic salary and benefits, considering tax deductions (payee), NHIF, and NSSF.

### How It Works
1. The user inputs their  salary and benefits.
2. The program uses predefined tax rates (from KRA) to calculate payee (tax).
3. It deducts NHIF and NSSF contributions.
4. Gross salary =  salary + Benefits.
5. Net salary = Gross salary - (payee + NHIF + NSSF).


