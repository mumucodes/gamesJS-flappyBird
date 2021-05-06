const birdSprite = new Image();
birdSprite.src = './spriteSheet-flappyBird.png';

class Bird {
    constructor(){
        this.x = 150;
        this.y = 200;
        this.vy = 0;
        this.originalWidth = 941;
        this.originalHeight = 580;
        this.width = this.originalWidth/20
        this.height = this.originalHeight/20 ;
        this.weight = 1;
        this.frameX = 0;
    }
    update(){
        let curve = Math.sin(angle) * 20;
        if(this.y > canvas.height - (this.height * 3) + curve){
            this.y = canvas.height - (this.height * 3) + curve ;
            this.vy = 0;
        } else {
            this.vy += this.weight;
            this.vy *= 0.9;
            this.y += this.vy;
        }
        if(this.y < 0 + this.height){
            this.y = 0 + this.height;
            this.vy = 0; 
        }
        if(spacePressed && this.y > this.height * 3) this.flap();
        
    }
    draw(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(birdSprite, this.frameX * this.originalWidth, 0, this.originalWidth/4 , this.originalHeight, this.x, this.y - 5, this.width, this.height * 5);
    } 
    flap(){
        this.vy -= 2;
        if(this.frameX > 10) this.frameX = 0;
        else this.frameX++; 
    }
}
const bird = new Bird();