// Defining a Rectangle class
class Rectangle {
    // Properties
    width: number;
    height: number;
  
    // Constructor to initialize the properties
    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }
  
    // Method to calculate area
    calculateArea(): number {
      return this.width * this.height;
    }
  }
  
  // Creating an instance of Rectangle
  const myRectangle = new Rectangle(5, 10);
  
  // Calculating the area and logging the result
  console.log(`The area of the rectangle is: ${myRectangle.calculateArea()} square units`);
  