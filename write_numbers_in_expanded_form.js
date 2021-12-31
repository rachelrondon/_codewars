/* 

Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. 

For example:
expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'

*/ 

const expandedForm = (num) => {
    const string = num.toString();
    const array = string.split("");
    const length = array.length;
    const numbers = [];
    let updatedNum;
  
    array.forEach((num) => {
     if (array.indexOf(num) === 0) {
        updatedNum = num.padEnd(length, 0);
        numbers.push(updatedNum);
      } else if (num != 0) {
        updatedNum = num.padEnd(length - array.indexOf(num), 0);
        numbers.push(updatedNum);
      } 
    })
  
    const result = numbers.join(" + ");
    return result; 
  }
  
  expandedForm(70304);
  

