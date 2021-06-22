shapeContainer = document.getElementById(`shape-container`)
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

class Shape {
    constructor(width, height) {
        this.width = width
        this.height = height
        this.shape = document.createElement(`div`)
        shapeContainer.append(this.shape)
        this.shape.addEventListener(`click`, () => this.describe())
        this.shape.addEventListener(`dblclick`, () => this.shape.remove())
    }

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
            this.perimeter = (this.width + this.width + Math.hypot(this.width, this.width)).toFixed(2)
        }

        sidepanelPerimeter.innerText = this.perimeter
    }
}

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
        this.shape.style.borderLeft = `${width}px solid yellow`
        this.shape.style.borderBottom = `${width}px solid yellow`
        this.shape.style.borderRight = `${width}px solid transparent`
        this.shape.style.borderTop = `${width}px solid transparent`
    }
}

rectangleButton.addEventListener(`click`, function(e) {
    e.preventDefault()
    new Rectangle(25, 100)
})

squareButton.addEventListener(`click`, function(e) {
    e.preventDefault()
    new Square(30, 30)
})

circleButton.addEventListener(`click`, function(e) {
    e.preventDefault()
    new Circle(75, 75)
})

triangleButton.addEventListener(`click`, function(e) {
    e.preventDefault()
    new Triangle(50, 50)
})