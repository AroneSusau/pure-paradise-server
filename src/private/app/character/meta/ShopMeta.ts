import {ShopContext} from '../../defaults/ShopContext.js'

export class ShopMeta {

    private _context: ShopContext

    constructor() {
        this._context = ShopContext.EXITED
    }

    public updateShopContext(context: ShopContext) {
        this._context = context
    }

}
