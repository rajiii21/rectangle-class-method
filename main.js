// Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.

class Rectangle{
	
	constructor(width,height){
		this.width=width;
		this.height=height;
	} 
	rectangleArea(){
		console.log(`The area of rectangle is ${this.width*this.height}`);
	}
	rectanglePerimeter(){
		console.log(`The perimeter of rectangle is ${2*(this.width+this.height)}`);
	}
	
}
let area=new Rectangle(20,2);

area.rectangleArea()
area.rectanglePerimeter()