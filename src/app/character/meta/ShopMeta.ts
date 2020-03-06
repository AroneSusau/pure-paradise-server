import {ShopContext} from '../../defaults/ShopContext'

export class ShopMeta {

    private _context: ShopContext

    public updateShopContext(context: ShopContext) {
        this._context = context
    }

}
