function foo(a, b) {
  if (b === 0) {
    if (a === 0) {
      return 0; // Or handle this case as needed
    } else {
      return Infinity; // Or throw an error: throw new Error('Division by zero');
    }
  }
  return a / b; 
}