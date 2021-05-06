const obstaclesArray = [];

class Obstacle{
    constructor(){
        this.top = (Math.random() * canvas.height/3) + 20;
        this.bottom = (Math.random() * canvas.height/3) + 20;
        this.x = canvas.width;
        this.color = 'hsla(' + hue + ',100%, 50%, .8)';;
    }
    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, 0, this.top, this.height);
        ctx.fillRect(this.x, this.y, this.width, this.height);
}