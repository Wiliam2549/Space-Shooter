class Bullet {
    constructor(x, y, object) {
        this.bullet = createSprite(windowWidth/2, windowHeight/2, 5, 5);
        this.bullet.shapeColor = "red";
        this.x = x;
        this.y = y;
        //this.image = loadImage("");
    }
    shoot(direction) {
        this.bullet.setSpeedAndDirection(3, direction - 90);
    }
}