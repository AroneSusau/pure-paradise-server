import { Item } from "../Item/Item.js"

export class Inventory { 
  
  private items: Map<number, Item>

  public addItem(item: Item) { 
    const id = item.id
    const itemInInventoy = this.items.has(id)

    if (itemInInventoy) this.getItem(id).increaseQuantity()
    else this.items.set(id, item)
  }

  public removeItem(item: Item): boolean {
    const id = item.id
    const itemExists = this.items.has(id)
    
    if (itemExists) {
      const _item = this.getItem(id)
      
      if (_item.last()) this.items.delete(id)
      else _item.decreaseQuantity()
      return true
      
    } else return false
  }

  public getItem(id: number): Item { 
    return this.items.get(id)
  }

}