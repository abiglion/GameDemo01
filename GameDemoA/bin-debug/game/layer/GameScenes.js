var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var GameScenes = (function (_super) {
    __extends(GameScenes, _super);
    function GameScenes() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    GameScenes.prototype.init = function () {
        var sky = new egret.Shape;
        sky.graphics.beginFill(0xBDBDBD, 1);
        sky.graphics.drawRect(0, 0, 720, 1280);
        sky.graphics.endFill;
        this.addChild(sky);
        var role = new egret.Shape;
        role.graphics.beginFill(0xffffff, 1);
        role.graphics.drawCircle(0, 0, 40);
        role.graphics.endFill;
        role.x = 720 / 2;
        role.y = 1280 - role.height / 2;
        this.addChild(role);
        for (var i = 0; i < 10; i++) {
            console.log(Math.random());
        }
        // let btnL = new eui.Button;
        // btnL.width = 100;
        // btnL.height = 50 ;
        // btnL.label = "左";
        // this.addChild(btnL);
        // let btnR = new eui.Button;
        // btnR.width = 100;
        // btnR.height = 50 ;
        // btnR.label = "右";
        // btnR.x = 720-btnR.width;
        // this.addChild(btnR);
    };
    return GameScenes;
}(egret.Sprite));
__reflect(GameScenes.prototype, "GameScenes");
