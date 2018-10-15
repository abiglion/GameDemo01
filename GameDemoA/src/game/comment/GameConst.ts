/**常用常量类 */
class GameConst {
    /**舞台宽度 */
	public static StageW:number;
    /**舞台高度 */
	public static StageH:number;

	/**根据名字创建位图 */
	public static CreateBitmapByName(name:string):egret.Bitmap {
		let texture:egret.Texture = RES.getRes(name);
		let bitmap:egret.Bitmap = new egret.Bitmap(texture);
		return bitmap;
	}

    /**移除子类方法 */
    public static removeChild(child:egret.DisplayObject) {
        if(child && child.parent) {
            if((<any>child.parent).removeElement) {
                (<any>child.parent).removeElement(<any>(child));
            }
            else {
                child.parent.removeChild(child);
            }
        }
    }
}