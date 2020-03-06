import {ItemId} from '../../defaults/ItemId.js'
import {Food} from './Food.js'
import {Weapon} from './Weapon.js'
import {Armour} from './Armour.js'
import {EdibleWeapon} from './EdibleWeapon.js'

const items = [

    // FOODS
    new Food(ItemId.APPLE, 'Apple', 'An apple a day keeps the doctor away!', 9, 2),
    new Food(ItemId.BEEF, 'Beef', 'Man needs his beef.', 31, 24),
    new Food(ItemId.DONUT, 'Donut', 'Mmmmmm, donuts.', 26, 14),
    new Food(ItemId.HAMBURGER, 'Hamburger', 'Holy cow where did you get this hamburger!', 30, 110),
    new Food(ItemId.FLESH, 'Flesh', 'Uhmm.. if you\'re hungry enough?', 1, 1),
    new Food(ItemId.PEANUTS, 'Peanuts', 'A little salty if you ask me.', 9, 1),
    new Food(ItemId.PIE, 'Pie', 'At least its still wrapped', 14, 4),
    new Food(ItemId.WATER, 'Water', 'A bit of H2O never hurt anyone', 25, 16),

    // WEAPONS
    new Weapon(ItemId.RUSTED_RAZOR, 'Rusted Razor', 'A rusted, dull blade that is pathetic in every way, shape and form.', 1, 150),
    new Weapon(ItemId.KNIFE, 'Knife', 'This thing is pointy.', 3, 25),
    new Weapon(ItemId.WOODEN_SWORD, 'Wooden Sword', 'A sword carved out of wood, greater than man but lesser than the Draconical Sword.', 10, 250),
    new Weapon(ItemId.DRACONIC_SWORD, 'Draconic Sword', 'A sword smithed from a dragon\'s skeleton, the strongest material in all of New Tretham ', 15, 500),

    // Edible Weapon
    new EdibleWeapon(ItemId.CHOCOLATE_SWORD, 'Chocolate Sword', 'A tasty treat that should do the trick!', 5, 1, 1),

    // Armour
    new Armour(ItemId.WOODEN_SHIELD, 'Wooden Shield', 'A shield carved from wood, provides decent protection.', 8, 200),
    new Armour(ItemId.DRACONIC_SHIELD, 'Draconic Shield', 'A shield smithed from a dragon\'s hide, provides godly protection.', 12, 450)
]

export {items}
