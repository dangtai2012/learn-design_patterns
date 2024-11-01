interface ShapeProperties {
  color: string;
  x: number;
  y: number;
}

abstract class Shape {
  constructor(public properties: ShapeProperties) {}

  abstract clone(): Shape;
}

class Rectangle extends Shape {
  constructor(
    properties: ShapeProperties,
    public width: number,
    public height: number,
  ) {
    super(properties);
  }

  public clone(): Shape {
    const cloneProperties = {
      color: this.properties.color,
      x: this.properties.x,
      y: this.properties.y,
    };

    return new Rectangle(cloneProperties, this.width, this.height);
  }
}

const redRectangle = new Rectangle(
  {
    color: "red",
    x: 20,
    y: 100,
  },
  10,
  20,
);
console.log(redRectangle);

const blueRectangle = redRectangle.clone();
blueRectangle.properties.color = "blue";
console.log(blueRectangle);
