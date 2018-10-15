class GameScenes extends egret.Sprite{
    constructor(){
        super();
        this.init();
    }

    private init():void{
        let sky = new egret.Shape;
        sky.graphics.beginFill(0xBDBDBD,1);
        sky.graphics.drawRect(0,0,720,1280);
        sky.graphics.endFill;
        this.addChild(sky);

        let role = new egret.Shape;
        role.graphics.beginFill(0xffffff,1);
        role.graphics.drawCircle(0,0,40);
        role.graphics.endFill;
         role.x = 720/2 ;
         role.y = 1280 - role.height/2;
        this.addChild(role);

        let btnL = new eui.Button;
        btnL.width = 100;
        btnL.height = 50 ;
        btnL.label = "左";
        this.addChild(btnL);

        let btnR = new eui.Button;
        btnR.width = 100;
        btnR.height = 50 ;
        btnR.label = "右";
        this.addChild(btnR);
    }
}