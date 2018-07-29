class Shape {
    constructor(width, height,) {
        this.width = width;
        this.height = height;
        this.shape = "shape";
        this.$div = $(`<div></div>`);
    }
    draw(){
        this.top = Math.floor((Math.random()*(600-this.height)));
        this.left = Math.floor((Math.random()*(600-this.width)));
        this.$div.css('width', this.width);
        this.$div.css('height', this.height);
        this.$div.css('top',this.top);
        this.$div.css('left',this.left);
        this.$div.addClass("shape");
        this.$div.addClass(this.shape);
        $("#canvas").append(this.$div);
        return this;
    }
    describe(panel){
        panel.find("h3").html(this.shape);
        panel.find("#info-Width").html(this.width);
        panel.find("#info-Height").html(this.height);
    }
    remove(){
        this.$div.remove();
    }
    click(action){
        this.$div.click(action);
    }
}

class Circle extends Shape{
    constructor(radius){
        super(2*radius,2*radius);
        this.radius = radius
        this.shape = "circle";

    }
    calculateArea(){
        return Math.round(Math.pow(Math.PI * this.radius,2)*100)/100; 
    }
    calculateCircumference(){
        return Math.round(2 * Math.PI * this.radius*100)/100;
    }
    draw(){
        this.$div.css('border-radius', `${this.radius}px`);
       return  super.draw();
    }
    describe(panel){
        panel.find("label[name=radius]").html("Radius");
        panel.find("#info-Radius").html(this.radius);
        panel.find("#info-Area").html(this.calculateArea());
        panel.find("label[name=perimeter]").html("Circumference");
        panel.find("#info-Perimeter").html(this.calculateCircumference());
        super.describe(panel);
    }
}

class Triangle extends Shape{
    constructor(height){
        super(height,height);
        this.base = height;
        this.shape = "triangle"

    }
    calculateArea(){
        return Math.round(.5 * this.base * this.height*100)/100;
    }
    calculatePerimeter(){
        return Math.round((2 * (Math.sqrt(Math.pow(this.height,2)+Math.pow((.5*this.height),2))) + this.height)*100)/100;
    }
    calculateRadius(){
         return Math.round((this.calculateArea() / (.5 * this.calculatePerimeter()))*100)/100;
    }
    draw(){
        this.$div.css('border-left' ,`${.5 * this.base}px solid transparent`);
        this.$div.css('border-right',`${.5 * this.base}px solid transparent`);
        this.$div.css('border-bottom',`${this.base}px solid yellow`);
        return super.draw();
    }
    describe(panel){
        panel.find("label[name=radius]").html("Radius");
        panel.find("#info-Radius").html(this.calculateRadius());
        panel.find("#info-Area").html(this.calculateArea());
        panel.find("label[name=perimeter]").html("Perimeter");
        panel.find("#info-Perimeter").html(this.calculatePerimeter());
        super.describe(panel);
    }
}

class Rectangle extends Shape{
    constructor(width, height){
        super(width, height);
        this.shape ="rectangle";
    }
    calculateArea(){
        return Math.round(this.width * this.height*100)/100
    }
    calculatePerimeter(){
        return Math.round((2*this.width + 2*this.height*100))/100;
    }
    calculateDiagonal(){
        return Math.round((Math.sqrt(Math.pow(this.width,2)*Math.pow(this.height,2)))*100)/100;
    }
    describe(panel){
        panel.find("label[name=radius]").html("Diagonal");
        panel.find("#info-Radius").html(this.calculateDiagonal());
        panel.find("#info-Area").html(this.calculateArea());
        panel.find("label[name=perimeter]").html("Perimeter");
        panel.find("#info-Perimeter").html(this.calculatePerimeter());
        super.describe(panel);
    }
}

class Square extends Rectangle{
    constructor(sideLength){
        super(sideLength, sideLength);
        this.shape = "square";
    }
    calculateRadius(){
        return Math.sqrt(Math.pow(.5 * this.width,2)); 
    }
    describe(panel){
        super.describe(panel);
        panel.find("label[name=radius]").html("Radius");
        panel.find("#info-Radius").html(this.calculateRadius());
    }
}

