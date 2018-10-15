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
        var sky = GameConst.CreateBitmapByName("bg_jpg");
        sky.width = 720;
        sky.height = 1280;
        this.addChild(sky);
    };
    return GameScenes;
}(egret.Sprite));
__reflect(GameScenes.prototype, "GameScenes");
