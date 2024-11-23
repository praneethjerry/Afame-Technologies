# Afame-Technologies

# Calculator Web Application

## **Overview**  
This is a simple calculator web application built with HTML, CSS, and JavaScript. It allows users to perform basic arithmetic operations like addition, subtraction, multiplication, and division.

---

## **Features**
- User-friendly interface.  
- Supports basic arithmetic operations: `+`, `-`, `*`, `/`.  
- Provides buttons for numeric input (0-9), decimal point (.), clear (`C`), delete (`Del`), and equals (`=`).  
- Real-time display of the current input and calculations.  

---

## **Technologies Used**
1. **HTML**: For structuring the calculator interface.  
2. **CSS**: For styling the application (linked through `style.css`).  
3. **JavaScript**: For implementing the calculator logic (located in `calc.js`).

---

## **How to Use**
1. Open the `index.html` file in any modern browser.  
2. Use the number and operator buttons to input your calculation.  
3. Press `=` to evaluate the result.  
4. Use `C` to clear the display, or `Del` to delete the last entered character.

---

## **File Structure**
```
Calculator/
│
├── index.html        # Main HTML file
├── style.css         # CSS file for styling (not included here)
└── calc.js           # JavaScript file for logic
```

---

## **Key Functions**
1. **appendToDisplay(input)**  
   Appends the input (number or operator) to the display.  
   
2. **clearDisplay()**  
   Clears all content from the display.

3. **del()**  
   Deletes the last character from the display.  

4. **calculate()**  
   Evaluates the mathematical expression on the display.  

5. **evaluation(expression)**  
   Custom function to parse and calculate the result for the given mathematical expression using operator precedence.  

---

## **Known Issues**
- The calculator does not handle invalid or complex expressions like `++` or `5/0`.  
- Operator precedence may not work correctly in deeply nested expressions.

---

## **Future Improvements**
1. Add a more advanced evaluation mechanism using JavaScript’s `eval()` (with caution) or a library.  
2. Improve the UI/UX using CSS or a modern framework like React.  
3. Handle edge cases such as invalid input or dividing by zero.  
4. Add more advanced features like parentheses or percentage calculations.

---

Feel free to use and improve this project! 😊
