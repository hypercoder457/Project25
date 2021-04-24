class Paper {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("paper.png");
        var options = {
            isStatic: false,
            density: 1.2,
            restitution: 0.3,
            friction: 0
        }
        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        imageMode(CENTER);
        image(this.image, this.x, this.y);
        pop();
    }
}