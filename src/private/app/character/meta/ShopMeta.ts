import {ShopContext} from '../../defaults/ShopContext.js'

export class ShopMeta {

    private _shopContext: ShopContext

    constructor() {
        this._shopContext = ShopContext.EXITED
    }

    public updateShopContext(context: ShopContext) {
        this._shopContext = context
    }

}
