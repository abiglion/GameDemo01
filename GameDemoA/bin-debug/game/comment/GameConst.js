var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**常用常量类 */
var GameConst = (function () {
    function GameConst() {
    }
    /**根据名字创建位图 */
    GameConst.CreateBitmapByName = function (name) {
        var texture = RES.getRes(name);
        var bitmap = new egret.Bitmap(texture);
        return bitmap;
    };
    /**移除子类方法 */
    GameConst.removeChild = function (child) {
        if (child && child.parent) {
            if (child.parent.removeElement) {
                child.parent.removeElement((child));
            }
            else {
                child.parent.removeChild(child);
            }
        }
    };
    return GameConst;
}());
__reflect(GameConst.prototype, "GameConst");
