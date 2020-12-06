import {ItemId} from '../../defaults/ItemId'
import {Food} from './Food'
import {Weapon} from './Weapon'
import {Armour} from './Armour'
import {EdibleWeapon} from './EdibleWeapon'
import {Item} from '../Item'
import {FoodType} from "../../defaults/FoodType";

const items = new Map<number, Item>([

    // Consumables
    [ItemId.APPLE, new Food(ItemId.APPLE, 'Apple', 'An apple a day keeps the doctor away!', 9, 2, FoodType.HUNGER)],
    [ItemId.BEEF, new Food(ItemId.BEEF, 'Beef', 'Man needs his beef.', 31, 24, FoodType.HUNGER)],
    [ItemId.DONUT, new Food(ItemId.DONUT, 'Donut', 'Mmmmmm, donuts.', 26, 14, FoodType.HUNGER)],
    [ItemId.HAMBURGER, new Food(ItemId.HAMBURGER, 'Hamburger', 'Holy cow where did you get this hamburger!', 110, 30, FoodType.HUNGER)],
    [ItemId.FLESH, new Food(ItemId.FLESH, 'Flesh', 'Uhmm.. if you\'re hungry enough?', 1, 1, FoodType.HUNGER)],
    [ItemId.PEANUTS, new Food(ItemId.PEANUTS, 'Peanuts', 'A little salty if you ask me.', 9, 1, FoodType.HUNGER)],
    [ItemId.PIE, new Food(ItemId.PIE, 'Pie', 'At least its still wrapped', 14, 4, FoodType.HUNGER)],
    [ItemId.WATER, new Food(ItemId.WATER, 'Water', 'A bit of H2O never hurt anyone', 25, 16, FoodType.THIRST)],

    // Weapons
    [ItemId.FISTS, new Weapon(ItemId.FISTS, 'Fists', 'Your bare hands, old fashion but reliable.', 0, 1)],
    [ItemId.RUSTED_RAZOR, new Weapon(ItemId.RUSTED_RAZOR, 'Rusted Razor', 'A rusted, dull blade that is pathetic in every way, shape and form.', 150, 3)],
    [ItemId.KNIFE, new Weapon(ItemId.KNIFE, 'Knife', 'This thing is pointy.', 25, 2)],
    [ItemId.WOODEN_SWORD, new Weapon(ItemId.WOODEN_SWORD, 'Wooden Sword', 'A sword carved out of wood, greater than a knife but lesser than the Draconical Sword.', 250, 10)],
    [ItemId.DRACONIC_SWORD, new Weapon(ItemId.DRACONIC_SWORD, 'Draconic Sword', 'A sword smithed from a dragon\'s skeleton, the strongest material in all of New Tretham ', 500, 25)],

    // Edible Weapon
    [ItemId.CHOCOLATE_SWORD, new EdibleWeapon(ItemId.CHOCOLATE_SWORD, 'Chocolate Sword', 'A tasty treat that should do the trick!', 5, 1, 1, FoodType.HUNGER)],

    // Defensive Items
    [ItemId.CLOTH_CLOTHING, new Armour(ItemId.CLOTH_CLOTHING, 'Cloth Clothing', 'Ain\'t nothing better than some cloth clothing, fresh from the sheep.', 15, 0)],
    [ItemId.WOODEN_SHIELD, new Armour(ItemId.WOODEN_SHIELD, 'Wooden Shield', 'A shield carved from wood, provides decent protection.', 200, 8)],
    [ItemId.DRACONIC_SHIELD, new Armour(ItemId.DRACONIC_SHIELD, 'Draconic Shield', 'A shield smithed from a dragon\'s hide, provides godly protection.', 450, 25)]
])

export {items}
