import {ShopContext} from '../../defaults/ShopContext.js'

export class ShopMeta {

    private _context: ShopContext

    public updateShopContext(context: ShopContext) {
        this._context = context
    }

}
