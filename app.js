// Global DOM Variables
shapeContainer = document.getElementById(`shape-container`)
rectangleWidthInput = document.getElementById(`rectangle-width-input`)
rectangleHeightInput = document.getElementById(`rectangle-height-input`)
squareInput = document.getElementById(`square-input`)
circleInput = document.getElementById(`circle-input`)
triangleInput = document.getElementById(`triangle-input`)
rectangleButton = document.getElementById(`rectangle-button`)
squareButton = document.getElementById(`square-button`)
circleButton = document.getElementById(`circle-button`)
triangleButton = document.getElementById(`triangle-button`)
sidepanelShape = document.getElementById(`sidepanel-shape`)
sidepanelWidth = document.getElementById(`sidepanel-width`)
sidepanelHeight = document.getElementById(`sidepanel-height`)
sidepanelRadius = document.getElementById(`sidepanel-radius`)
sidepanelArea = document.getElementById(`sidepanel-area`)
sidepanelPerimeter = document.getElementById(`sidepanel-perimeter`)

// Shape Class
class Shape {
    constructor(width, height) {
        this.width = parseInt(width)
        this.height = parseInt(height)
        this.shape = document.createElement(`div`)
        this.randomPosition()
        shapeContainer.append(this.shape)
        this.shape.addEventListener(`click`, () => this.describe())
        this.shape.addEventListener(`dblclick`, () => this.clear())
    }
    // Function that changes sidepanel text to clicked shapes dimensions
    describe() {
        sidepanelShape.innerText = this.shape.className
        sidepanelWidth.innerText = this.width
        sidepanelHeight.innerText = this.height
        
        if (this.shape.className === `circle`) {
            this.radius = (this.width / 2).toFixed(2)
            sidepanelRadius.innerText = this.radius
        } else {
            sidepanelRadius.innerText = `N/A`
        }

        if (this.shape.className === `rectangle` || this.shape.className === `square`) {
            this.area = this.width * this.height
        } else if (this.shape.className === `circle`) {
            this.area = (Math.PI * Math.pow(this.radius , 2)).toFixed(2)
        } else if (this.shape.className === `triangle`) {
            this.area = (this.width * this.height) / 2
        }

        sidepanelArea.innerText = this.area

        if (this.shape.className === `rectangle` || this.shape.className === `square`) {
            this.perimeter = (this.width * 2) + (this.height * 2)
        } else if (this.shape.className === `circle`) {
            this.perimeter = (2 * Math.PI * (this.width / 2)).toFixed(2)
        } else if (this.shape.className === `triangle`) {
            this.perimeter = (this.width + this.width + (Math.hypot(this.width, this.width))).toFixed(2)
        }

        sidepanelPerimeter.innerText = this.perimeter
    }
    // Gives a somewhat random position based on size of shape
    randomPosition() {
        let randomLeft = 0
        let randomTop = 0 

        if (this.width <= 100) {
            randomLeft = Math.floor(Math.random() * 501);
        }
        else if (this.width <= 200) {
            randomLeft = Math.floor(Math.random() * 401);
        }
        else if (this.width <= 300) {
            randomLeft = Math.floor(Math.random() * 301);
        }
        else if (this.width <= 400) {
            randomLeft = Math.floor(Math.random() * 201);
        }
        else if (this.width <= 500) {
            randomLeft = Math.floor(Math.random() * 101);
        }
        else if (this.width <= 600) {
            randomLeft = 0
        }

        if (this.height <= 100) {
            randomTop = Math.floor(Math.random() * 501);
        }
        else if (this.height <= 200) {
            randomTop = Math.floor(Math.random() * 401);
        }
        else if (this.height <= 300) {
            randomTop = Math.floor(Math.random() * 301);
        }
        else if (this.height <= 400) {
            randomTop = Math.floor(Math.random() * 201);
        }
        else if (this.height <= 500) {
            randomTop = Math.floor(Math.random() * 101);
        }
        else if (this.height <= 600) {
            randomTop = 0
        }

        this.shape.style.left = `${randomLeft}px`
        this.shape.style.top = `${randomTop}px`
    }
    // Removes Shape and Sidepanel Text
    clear() {
        this.shape.remove();
        sidepanelShape.innerText = `N/A`;
        sidepanelWidth.innerText = `N/A`;
        sidepanelHeight.innerText = `N/A`;
        sidepanelRadius.innerText = `N/A`;
        sidepanelArea.innerText = `N/A`;
        sidepanelPerimeter.innerText = `N/A`;
    }
}

// Shape Extended Classes
class Rectangle extends Shape {
    constructor(width, height) {
        super(width, height)
        this.shape.className = "rectangle"
        this.shape.style.width = `${width}px`
        this.shape.style.height = `${height}px`
    }
}

class Square extends Shape {
    constructor(width, height) {
        super(width, height)
        this.length = width
        this.shape.className = "square"
        this.shape.style.width = `${width}px`
        this.shape.style.height = `${height}px`
    }
}

class Circle extends Shape {
    constructor(width, height) {
        super(width, height)
        this.radius = width
        this.shape.className = "circle"
        this.shape.style.width = `${width}px`
        this.shape.style.height = `${height}px`
    }
}

class Triangle extends Shape {
    constructor(width, height) {
        super(width, height)
        this.shape.className = "triangle"
        // Borders meet at 45 degree angles, so to mimic a triangle width and height are set to 0 and 2 borders are colored.
        this.shape.style.borderLeft = `${width / 2}px solid yellow`
        this.shape.style.borderBottom = `${width / 2}px solid yellow`
        this.shape.style.borderRight = `${width / 2}px solid transparent`
        this.shape.style.borderTop = `${width / 2}px solid transparent`
    }
}

// Button Enable/Disable Event Listeners.  Each Form has a Key Up and a Click function.
rectangleWidthInput.addEventListener(`keyup`, function() {
    if (this.value == `` || rectangleHeightInput.value == ``) {
        rectangleButton.disabled = true;
    } else if (this.value > 600 || rectangleHeightInput > 600) {
        rectangleButton.disabled = true;
    }
    else {
        rectangleButton.disabled = false;
    }
})

rectangleWidthInput.addEventListener(`click`, function() {
    if (this.value == `` || rectangleHeightInput.value == ``) {
        rectangleButton.disabled = true;
    } else if (this.value > 600 || rectangleHeightInput > 600) {
        rectangleButton.disabled = true;
    }
    else {
        rectangleButton.disabled = false;
    }
})

rectangleHeightInput.addEventListener(`keyup`, function() {
    if (this.value == `` || rectangleWidthInput.value == ``) {
        rectangleButton.disabled = true;
    } else if (this.value > 600 || rectangleWidthInput > 600) {
        rectangleButton.disabled = true;
    }
    else {
        rectangleButton.disabled = false;
    }
})

rectangleHeightInput.addEventListener(`click`, function() {
    if (this.value == `` || rectangleWidthInput.value == ``) {
        rectangleButton.disabled = true;
    } else if (this.value > 600 || rectangleWidthInput > 600) {
        rectangleButton.disabled = true;
    }
    else {
        rectangleButton.disabled = false;
    }
})

squareInput.addEventListener(`keyup`, function() {
    if (this.value == `` || this.value > 600) {
        squareButton.disabled = true;
    } else {
        squareButton.disabled = false;
    }
})

squareInput.addEventListener(`click`, function() {
    if (this.value == `` || this.value > 600) {
        squareButton.disabled = true;
    } else {
        squareButton.disabled = false;
    }
})

circleInput.addEventListener(`keyup`, function() {
    if (this.value == `` || this.value > 300) {
        circleButton.disabled = true;
    } else {
        circleButton.disabled = false;
    }
})

circleInput.addEventListener(`click`, function() {
    if (this.value == `` || this.value > 300) {
        circleButton.disabled = true;
    } else {
        circleButton.disabled = false;
    }
})

triangleInput.addEventListener(`keyup`, function() {
    if (this.value == `` || this.value > 600) {
        triangleButton.disabled = true;
    } else {
        triangleButton.disabled = false;
    }
})

triangleInput.addEventListener(`click`, function() {
    if (this.value == `` || this.value > 600) {
        triangleButton.disabled = true;
    } else {
        triangleButton.disabled = false;
    }
})

// Event Listeners to Generate Shapes upon button click.  Each shape determines their size based on corresponding input fields.
rectangleButton.addEventListener(`click`, function(e) {
    e.preventDefault()
    let rectangleWidth = rectangleWidthInput.value
    let rectangleHeight = rectangleHeightInput.value
    new Rectangle(rectangleWidth, rectangleHeight)
})

squareButton.addEventListener(`click`, function(e) {
    e.preventDefault()
    let squareLength = squareInput.value
    new Square(squareLength, squareLength)
})

circleButton.addEventListener(`click`, function(e) {
    e.preventDefault()
    let circleRadius = circleInput.value
    // Circle class takes height and width; therefore we must multiple radius by 2 since a radius is half the length of a circle
    new Circle(circleRadius * 2, circleRadius * 2)
})

triangleButton.addEventListener(`click`, function(e) {
    e.preventDefault()
    let triangleHeight = triangleInput.value
    new Triangle(triangleHeight, triangleHeight)
})