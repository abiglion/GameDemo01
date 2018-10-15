class GameScenes extends egret.Sprite{
    constructor(){
        super();
        this.init();
    }

    private init():void{
        let sky = GameConst.CreateBitmapByName("bg_jpg");
        sky.width = 720;
        sky.height = 1280;
        this.addChild(sky);
    }
}