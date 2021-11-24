# Javascript HTML form , input , for searching google using CSS responsive design
1. Use exiting index.html,style.css files without changing them<br/>
2. All javascript form validation code should be written in external file named formValidtion.js.<br/>
3. Fix the functions (isInRange,hasChar,isNumber,hasForbidenWord,hasATooLongWord) to return the correct boolean result implied from the function name based on the rules in the next section, use the functions to validate the input , and display the correct messages.
4. <b>Input valitiation rules:</b><br/>
a. The q input must have at least 2 characters(not whitespace) and the text must be a string and not a number.<br/>
b. The text should not contains words like 'sex','porn','violence','murder'.
c. Each word in the text should be less then 10 letters.
d. The num input must have at least 1 character and must be a number between 1 to 25.<br/>
5.  <b>When pressing submit:</b><br/>
a. Display alert with relevant message for each rule (a,b,c,d) that is invalid ,and don't submit the data if at least one rule is invalid.<br/>
b. Submit form data to google when the (a,b,c,d) rules are met.