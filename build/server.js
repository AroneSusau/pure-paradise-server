/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/character/Character.ts":
/*!****************************************!*\
  !*** ./src/app/character/Character.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StatMeta_1 = __webpack_require__(/*! ./meta/StatMeta */ "./src/app/character/meta/StatMeta.ts");
var Inventory_1 = __webpack_require__(/*! ./inventory/Inventory */ "./src/app/character/inventory/Inventory.ts");
var Character = (function () {
    function Character() {
        this._stats = new StatMeta_1.StatMeta();
        this._inventory = new Inventory_1.Inventory();
    }
    Object.defineProperty(Character.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "stats", {
        get: function () {
            return this._stats;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "inventory", {
        get: function () {
            return this._inventory;
        },
        enumerable: true,
        configurable: true
    });
    return Character;
}());
exports.Character = Character;


/***/ }),

/***/ "./src/app/character/concrete/Player.ts":
/*!**********************************************!*\
  !*** ./src/app/character/concrete/Player.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Character_1 = __webpack_require__(/*! ../Character */ "./src/app/character/Character.ts");
var MetaManager_1 = __webpack_require__(/*! ../meta/MetaManager */ "./src/app/character/meta/MetaManager.ts");
var PointManager_1 = __webpack_require__(/*! ../point/PointManager */ "./src/app/character/point/PointManager.ts");
var Player = (function (_super) {
    __extends(Player, _super);
    function Player(id, room, defaults) {
        var _this = _super.call(this) || this;
        _this._id = id;
        _this._room = room;
        _this._meta = new MetaManager_1.MetaManager();
        _this._location = new PointManager_1.PointManager();
        defaults.applyPlayerDefaults(_this);
        return _this;
    }
    Object.defineProperty(Player.prototype, "room", {
        get: function () {
            return this._room;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "meta", {
        get: function () {
            return this._meta;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "location", {
        get: function () {
            return this._location;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    return Player;
}(Character_1.Character));
exports.Player = Player;


/***/ }),

/***/ "./src/app/character/inventory/Inventory.ts":
/*!**************************************************!*\
  !*** ./src/app/character/inventory/Inventory.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Inventory = (function () {
    function Inventory() {
        this._items = new Map();
    }
    Inventory.prototype.itemQuantity = function (id) {
        return this.hasItem(id) ? this._items.get(id) : 0;
    };
    Inventory.prototype.hasItem = function (id) {
        return this._items.has(id);
    };
    Inventory.prototype.setItem = function (id, qty) {
        this._items.set(id, qty);
    };
    Inventory.prototype.addItem = function (id) {
        if (this.hasItem(id)) {
            var currentQty = this._items.get(id);
            this._items.set(id, currentQty + 1);
        }
        else
            this._items.set(id, 1);
        return this.itemQuantity(id);
    };
    Inventory.prototype.removeItem = function (id) {
        if (this.hasItem(id)) {
            var currentQty = this._items.get(id);
            if (currentQty > 1) {
                this._items.set(id, currentQty - 1);
                return this.itemQuantity(id);
            }
        }
        return 0;
    };
    return Inventory;
}());
exports.Inventory = Inventory;


/***/ }),

/***/ "./src/app/character/meta/BattleMeta.ts":
/*!**********************************************!*\
  !*** ./src/app/character/meta/BattleMeta.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BattleMeta = (function () {
    function BattleMeta() {
        this._monsterIds = new Array();
    }
    Object.defineProperty(BattleMeta.prototype, "monsterCount", {
        get: function () {
            return this._monsterCount;
        },
        set: function (value) {
            this._monsterCount = value;
        },
        enumerable: true,
        configurable: true
    });
    BattleMeta.prototype.updateMonsterIds = function (list) {
        this._monsterIds = list;
        this._monsterCount = list.length;
    };
    BattleMeta.prototype.getMonsterIds = function (index) {
        return this._monsterIds[index];
    };
    return BattleMeta;
}());
exports.BattleMeta = BattleMeta;


/***/ }),

/***/ "./src/app/character/meta/EventMeta.ts":
/*!*********************************************!*\
  !*** ./src/app/character/meta/EventMeta.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EventMeta = (function () {
    function EventMeta() {
        this._score = new Map();
        this._eventsCompleted = new Map();
    }
    EventMeta.prototype.updateCode = function (id, stage) {
        this._id = id;
        this._stage = stage;
        this._code = "e" + this._id + "s" + this._stage;
    };
    EventMeta.prototype.updateScore = function (id, score) {
        this._score.set(id, score);
    };
    EventMeta.prototype.getScore = function (id) {
        this._score.has(id) ? this._score.get(id) : 0;
    };
    EventMeta.prototype.total = function () {
        var count = 0;
        this.score.forEach(function (v) { return count += v; });
        return count;
    };
    Object.defineProperty(EventMeta.prototype, "code", {
        get: function () {
            return this._code;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventMeta.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventMeta.prototype, "stage", {
        get: function () {
            return this._stage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventMeta.prototype, "score", {
        get: function () {
            return this._score;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventMeta.prototype, "eventsCompleted", {
        get: function () {
            return this._eventsCompleted;
        },
        enumerable: true,
        configurable: true
    });
    return EventMeta;
}());
exports.EventMeta = EventMeta;


/***/ }),

/***/ "./src/app/character/meta/InventoryMeta.ts":
/*!*************************************************!*\
  !*** ./src/app/character/meta/InventoryMeta.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InventoryMeta = (function () {
    function InventoryMeta() {
    }
    Object.defineProperty(InventoryMeta.prototype, "weapon", {
        get: function () {
            return this._weapon;
        },
        set: function (value) {
            this._weapon = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InventoryMeta.prototype, "armour", {
        get: function () {
            return this._armour;
        },
        set: function (value) {
            this._armour = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InventoryMeta.prototype, "context", {
        get: function () {
            return this._context;
        },
        set: function (value) {
            this._context = value;
        },
        enumerable: true,
        configurable: true
    });
    return InventoryMeta;
}());
exports.InventoryMeta = InventoryMeta;


/***/ }),

/***/ "./src/app/character/meta/MetaManager.ts":
/*!***********************************************!*\
  !*** ./src/app/character/meta/MetaManager.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BattleMeta_1 = __webpack_require__(/*! ./BattleMeta */ "./src/app/character/meta/BattleMeta.ts");
var EventMeta_1 = __webpack_require__(/*! ./EventMeta */ "./src/app/character/meta/EventMeta.ts");
var ShopMeta_1 = __webpack_require__(/*! ./ShopMeta */ "./src/app/character/meta/ShopMeta.ts");
var InventoryMeta_1 = __webpack_require__(/*! ./InventoryMeta */ "./src/app/character/meta/InventoryMeta.ts");
var MetaManager = (function () {
    function MetaManager() {
        this._battleMeta = new BattleMeta_1.BattleMeta();
        this._eventMeta = new EventMeta_1.EventMeta();
        this._shopMeta = new ShopMeta_1.ShopMeta();
        this._inventoryMeta = new InventoryMeta_1.InventoryMeta();
    }
    Object.defineProperty(MetaManager.prototype, "context", {
        get: function () {
            return this._context;
        },
        set: function (value) {
            this._context = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MetaManager.prototype, "battleMeta", {
        get: function () {
            return this._battleMeta;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MetaManager.prototype, "shopMeta", {
        get: function () {
            return this._shopMeta;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MetaManager.prototype, "eventMeta", {
        get: function () {
            return this._eventMeta;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MetaManager.prototype, "inventoryMeta", {
        get: function () {
            return this._inventoryMeta;
        },
        enumerable: true,
        configurable: true
    });
    return MetaManager;
}());
exports.MetaManager = MetaManager;


/***/ }),

/***/ "./src/app/character/meta/ShopMeta.ts":
/*!********************************************!*\
  !*** ./src/app/character/meta/ShopMeta.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ShopMeta = (function () {
    function ShopMeta() {
    }
    ShopMeta.prototype.updateShopContext = function (context) {
        this._context = context;
    };
    return ShopMeta;
}());
exports.ShopMeta = ShopMeta;


/***/ }),

/***/ "./src/app/character/meta/StatMeta.ts":
/*!********************************************!*\
  !*** ./src/app/character/meta/StatMeta.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StatMeta = (function () {
    function StatMeta() {
    }
    Object.defineProperty(StatMeta.prototype, "damage", {
        get: function () {
            return this._damage;
        },
        set: function (value) {
            this._damage = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StatMeta.prototype, "isAlive", {
        get: function () {
            return this._isAlive;
        },
        set: function (value) {
            this._isAlive = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StatMeta.prototype, "defence", {
        get: function () {
            return this._defence;
        },
        set: function (value) {
            this._defence = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StatMeta.prototype, "health", {
        get: function () {
            return this._health;
        },
        set: function (value) {
            this._health = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StatMeta.prototype, "hunger", {
        get: function () {
            return this._hunger;
        },
        set: function (value) {
            this._hunger = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StatMeta.prototype, "thirst", {
        get: function () {
            return this._thirst;
        },
        set: function (value) {
            this._thirst = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StatMeta.prototype, "money", {
        get: function () {
            return this._money;
        },
        set: function (value) {
            this._money = value;
        },
        enumerable: true,
        configurable: true
    });
    return StatMeta;
}());
exports.StatMeta = StatMeta;


/***/ }),

/***/ "./src/app/character/point/Point.ts":
/*!******************************************!*\
  !*** ./src/app/character/point/Point.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Point = (function () {
    function Point() {
    }
    Object.defineProperty(Point.prototype, "length", {
        get: function () {
            return this._length;
        },
        set: function (value) {
            this._length = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "index", {
        get: function () {
            return this._index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    Point.prototype.incrementX = function () {
        this._x += this._x < this._length - 1 ? 1 : 0;
        this.updateIndex();
    };
    Point.prototype.decremementX = function () {
        this._x -= this._x > 0 ? 1 : 0;
        this.updateIndex();
    };
    Point.prototype.incrementY = function () {
        this._y += this._y < this._length - 1 ? 1 : 0;
        this.updateIndex();
    };
    Point.prototype.decremementY = function () {
        this._y -= this._y > 0 ? 1 : 0;
        this.updateIndex();
    };
    Point.prototype.updateIndex = function () {
        this._index = (this._y * this._length) + this._x;
    };
    return Point;
}());
exports.Point = Point;


/***/ }),

/***/ "./src/app/character/point/PointManager.ts":
/*!*************************************************!*\
  !*** ./src/app/character/point/PointManager.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Point_1 = __webpack_require__(/*! ./Point */ "./src/app/character/point/Point.ts");
var PointManager = (function () {
    function PointManager() {
        this._local = new Point_1.Point();
        this._global = new Point_1.Point();
    }
    Object.defineProperty(PointManager.prototype, "local", {
        get: function () {
            return this._local;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PointManager.prototype, "global", {
        get: function () {
            return this._global;
        },
        enumerable: true,
        configurable: true
    });
    PointManager.prototype.updateLocalPosition = function (x, y) {
        this._local.x = x;
        this._local.y = y;
        this._local.updateIndex();
    };
    PointManager.prototype.updateGlobalPosition = function (x, y) {
        this._global.x = x;
        this._global.y = y;
        this._global.updateIndex();
    };
    return PointManager;
}());
exports.PointManager = PointManager;


/***/ }),

/***/ "./src/app/defaults/AreaNames.ts":
/*!***************************************!*\
  !*** ./src/app/defaults/AreaNames.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AreaNames;
(function (AreaNames) {
    AreaNames["SILVOS"] = "Silvos";
    AreaNames["TIRERA"] = "Tirera";
    AreaNames["VENMARK"] = "Venmark";
    AreaNames["NEW_TRETHAM"] = "New Tretham";
    AreaNames["PURE_PARADISE"] = "Pure Paradise";
})(AreaNames = exports.AreaNames || (exports.AreaNames = {}));


/***/ }),

/***/ "./src/app/defaults/CharacterTypes.ts":
/*!********************************************!*\
  !*** ./src/app/defaults/CharacterTypes.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CharacterTypes;
(function (CharacterTypes) {
    CharacterTypes[CharacterTypes["PLAYER"] = 0] = "PLAYER";
    CharacterTypes[CharacterTypes["MONSTER"] = 1] = "MONSTER";
    CharacterTypes[CharacterTypes["OTHER"] = 2] = "OTHER";
})(CharacterTypes = exports.CharacterTypes || (exports.CharacterTypes = {}));


/***/ }),

/***/ "./src/app/defaults/Command.ts":
/*!*************************************!*\
  !*** ./src/app/defaults/Command.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Command;
(function (Command) {
    Command["W"] = "w";
    Command["A"] = "a";
    Command["S"] = "s";
    Command["D"] = "d";
    Command["INV"] = "inv";
    Command["FIGHT"] = "fight";
    Command["RUN"] = "run";
    Command["BUY"] = "buy";
    Command["SELL"] = "sell";
})(Command = exports.Command || (exports.Command = {}));


/***/ }),

/***/ "./src/app/defaults/Context.ts":
/*!*************************************!*\
  !*** ./src/app/defaults/Context.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Context;
(function (Context) {
    Context[Context["FREE_ROAM"] = 0] = "FREE_ROAM";
    Context[Context["EVENT"] = 1] = "EVENT";
    Context[Context["BATTLE"] = 2] = "BATTLE";
    Context[Context["SHOP"] = 3] = "SHOP";
    Context[Context["INVENTORY"] = 4] = "INVENTORY";
    Context[Context["START"] = 5] = "START";
})(Context = exports.Context || (exports.Context = {}));


/***/ }),

/***/ "./src/app/defaults/Defaults.ts":
/*!**************************************!*\
  !*** ./src/app/defaults/Defaults.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Context_1 = __webpack_require__(/*! ./Context */ "./src/app/defaults/Context.ts");
var InventoryContext_1 = __webpack_require__(/*! ./InventoryContext */ "./src/app/defaults/InventoryContext.ts");
var ItemId_1 = __webpack_require__(/*! ./ItemId */ "./src/app/defaults/ItemId.ts");
var AreaNames_1 = __webpack_require__(/*! ./AreaNames */ "./src/app/defaults/AreaNames.ts");
var ShopContext_1 = __webpack_require__(/*! ./ShopContext */ "./src/app/defaults/ShopContext.ts");
var MapIds_1 = __webpack_require__(/*! ./MapIds */ "./src/app/defaults/MapIds.ts");
var Defaults = (function () {
    function Defaults() {
        this.localMapLength = 20;
        this.globalMapLength = 2;
    }
    Defaults.prototype.applyPlayerDefaults = function (player) {
        player.stats.health = 100;
        player.stats.hunger = 100;
        player.stats.thirst = 100;
        player.stats.money = 250;
        player.location.local.length = this.localMapLength;
        player.location.global.length = this.globalMapLength;
        player.location.updateLocalPosition(10, 10);
        player.location.updateGlobalPosition(0, 0);
        player.meta.context = Context_1.Context.START;
        player.meta.inventoryMeta.context = InventoryContext_1.InventoryContext.CLOSED;
        player.meta.inventoryMeta.weapon = ItemId_1.ItemId.FISTS;
        player.meta.inventoryMeta.armour = ItemId_1.ItemId.CLOTH_CLOTHING;
        player.meta.battleMeta.monsterCount = 0;
        player.meta.eventMeta.updateCode(0, 0);
        player.meta.shopMeta.updateShopContext(ShopContext_1.ShopContext.EXITED);
        player.inventory.setItem(ItemId_1.ItemId.BEEF, 1);
        player.inventory.setItem(ItemId_1.ItemId.APPLE, 3);
        player.inventory.setItem(ItemId_1.ItemId.WATER, 7);
        player.inventory.setItem(ItemId_1.ItemId.RUSTED_RAZOR, 1);
        player.inventory.setItem(ItemId_1.ItemId.CLOTH_CLOTHING, 1);
    };
    Defaults.prototype.applyMonsterDefaults = function (player) {
    };
    Defaults.prototype.applyShopKeeperDefaults = function (player) {
    };
    Defaults.prototype.applyMapDefaults = function (map) {
        switch (map.name) {
            case AreaNames_1.AreaNames.VENMARK:
                this.mapDefaults(map, 0, 0, MapIds_1.MapIds.VEMARK);
                break;
            case AreaNames_1.AreaNames.SILVOS:
                this.mapDefaults(map, 1, 0, MapIds_1.MapIds.SILVOS);
                break;
            case AreaNames_1.AreaNames.TIRERA:
                this.mapDefaults(map, 0, 1, MapIds_1.MapIds.TIRERA);
                break;
            case AreaNames_1.AreaNames.PURE_PARADISE:
                this.mapDefaults(map, 1, 1, MapIds_1.MapIds.PURE_PARADISE);
                break;
        }
    };
    Defaults.prototype.mapDefaults = function (map, x, y, id) {
        map.coords.x = x;
        map.coords.y = y;
        map.coords.length = this.globalMapLength;
        map.localLength = this.localMapLength;
        map.id = id;
        map.coords.updateIndex();
        map.generateBounds();
    };
    return Defaults;
}());
exports.Defaults = Defaults;


/***/ }),

/***/ "./src/app/defaults/InventoryContext.ts":
/*!**********************************************!*\
  !*** ./src/app/defaults/InventoryContext.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InventoryContext;
(function (InventoryContext) {
    InventoryContext[InventoryContext["OPENED"] = 0] = "OPENED";
    InventoryContext[InventoryContext["USING"] = 1] = "USING";
    InventoryContext[InventoryContext["CLOSED"] = 2] = "CLOSED";
})(InventoryContext = exports.InventoryContext || (exports.InventoryContext = {}));


/***/ }),

/***/ "./src/app/defaults/ItemId.ts":
/*!************************************!*\
  !*** ./src/app/defaults/ItemId.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ItemId;
(function (ItemId) {
    ItemId[ItemId["APPLE"] = 0] = "APPLE";
    ItemId[ItemId["BEEF"] = 1] = "BEEF";
    ItemId[ItemId["DONUT"] = 2] = "DONUT";
    ItemId[ItemId["HAMBURGER"] = 3] = "HAMBURGER";
    ItemId[ItemId["FLESH"] = 4] = "FLESH";
    ItemId[ItemId["PEANUTS"] = 5] = "PEANUTS";
    ItemId[ItemId["PIE"] = 6] = "PIE";
    ItemId[ItemId["WATER"] = 7] = "WATER";
    ItemId[ItemId["RUSTED_RAZOR"] = 8] = "RUSTED_RAZOR";
    ItemId[ItemId["KNIFE"] = 9] = "KNIFE";
    ItemId[ItemId["WOODEN_SWORD"] = 10] = "WOODEN_SWORD";
    ItemId[ItemId["DRACONIC_SWORD"] = 11] = "DRACONIC_SWORD";
    ItemId[ItemId["WOODEN_SHIELD"] = 12] = "WOODEN_SHIELD";
    ItemId[ItemId["DRACONIC_SHIELD"] = 13] = "DRACONIC_SHIELD";
    ItemId[ItemId["CHOCOLATE_SWORD"] = 14] = "CHOCOLATE_SWORD";
    ItemId[ItemId["FISTS"] = 15] = "FISTS";
    ItemId[ItemId["CLOTH_CLOTHING"] = 16] = "CLOTH_CLOTHING";
})(ItemId = exports.ItemId || (exports.ItemId = {}));


/***/ }),

/***/ "./src/app/defaults/MapIds.ts":
/*!************************************!*\
  !*** ./src/app/defaults/MapIds.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MapIds;
(function (MapIds) {
    MapIds[MapIds["VEMARK"] = 0] = "VEMARK";
    MapIds[MapIds["SILVOS"] = 1] = "SILVOS";
    MapIds[MapIds["TIRERA"] = 2] = "TIRERA";
    MapIds[MapIds["PURE_PARADISE"] = 3] = "PURE_PARADISE";
})(MapIds = exports.MapIds || (exports.MapIds = {}));


/***/ }),

/***/ "./src/app/defaults/RoomNames.ts":
/*!***************************************!*\
  !*** ./src/app/defaults/RoomNames.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RoomNames;
(function (RoomNames) {
    RoomNames["ALPHA"] = "ALPHA";
    RoomNames["BETA"] = "ALPHA";
    RoomNames["CHARLIE"] = "ALPHA";
    RoomNames["DELTA"] = "ALPHA";
    RoomNames["ECHO"] = "ALPHA";
    RoomNames["FOXTROT"] = "ALPHA";
    RoomNames["GOLF"] = "ALPHA";
    RoomNames["HOTEL"] = "ALPHA";
    RoomNames["INDIA"] = "ALPHA";
    RoomNames["JULIET"] = "ALPHA";
    RoomNames["FULL"] = "FULL";
})(RoomNames = exports.RoomNames || (exports.RoomNames = {}));


/***/ }),

/***/ "./src/app/defaults/ShopContext.ts":
/*!*****************************************!*\
  !*** ./src/app/defaults/ShopContext.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ShopContext;
(function (ShopContext) {
    ShopContext[ShopContext["BUYING"] = 0] = "BUYING";
    ShopContext[ShopContext["SELLING"] = 1] = "SELLING";
    ShopContext[ShopContext["ARRIVED"] = 2] = "ARRIVED";
    ShopContext[ShopContext["EXITED"] = 3] = "EXITED";
})(ShopContext = exports.ShopContext || (exports.ShopContext = {}));


/***/ }),

/***/ "./src/app/dialog/DialogManager.ts":
/*!*****************************************!*\
  !*** ./src/app/dialog/DialogManager.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AreaNames_1 = __webpack_require__(/*! ../defaults/AreaNames */ "./src/app/defaults/AreaNames.ts");
var ItemsList_1 = __webpack_require__(/*! ../item/concrete/ItemsList */ "./src/app/item/concrete/ItemsList.ts");
var DialogManager = (function () {
    function DialogManager() {
    }
    DialogManager.prototype['e0s0'] = function (player) {
        var playerName = player.name;
        return "It has been 3 weeks since the monsters struck. " + playerName + " has been warding off attacks in " + AreaNames_1.AreaNames.VENMARK + " for far too long, and must embark on a journey into the wilderness for more supplies to reach their final point, " + AreaNames_1.AreaNames.PURE_PARADISE + ".<br><br>Guide " + playerName + " through the cities of " + AreaNames_1.AreaNames.NEW_TRETHAM + " as you face hordes of the monsters restlessly aiming to stop you on your journey. In order to aid your crusade, " + playerName + " is capable of visiting a general store and spending money in order to purchase food and hydration for the journey ahead. In addition to this, the monsters you will face may drop items that will aid you in your journey once slain.<br><br>" + playerName + " must visit the village elders of the towns " + AreaNames_1.AreaNames.SILVOS + " and " + AreaNames_1.AreaNames.TIRERA + " in order to gain access to the final land, free of all impurities and monsters, " + AreaNames_1.AreaNames.PURE_PARADISE + ".<br><br>And remember! When your hunger and thirst fall below 50, your damage and defence will weaken!";
    };
    DialogManager.prototype['e1s0'] = function (player) {
        return "You approach what was supposed to be the Village of " + AreaNames_1.AreaNames.SILVOS + " but all you see is rubble and a burning mess of buildings all around you. In times such as these it is not an uncommon sight for entire villages to be destroyed by the Monsters, they come in the night without warning and destroy everything without a second thought.<br><br>You hear a small scream from a far, and then you realise that it is the cry of a young child.<br><br>Do you go to help the child or leave them to fend for themselves?<br><br>help / run";
    };
    DialogManager.prototype['e1s1'] = function (player) {
        return "You dash around the corner and hear the screams growing louder and louder.. closer.. and closer.. until you turn the corner from the town square only to see that it is filled with a sea of monsters. EVERYWHERE THEY CRAWL. You tremble before them as one by one they begin to notice your presence.. But you can see the young girl in the distance hanging on to a large tree in the middle of the town square, screaming, as the monsters claw their way up to her.<br><br>If you choose to fight this might not end too well for you..<br><br>Do you fight or run?<br><br>fight / run";
    };
    DialogManager.prototype['e1s2'] = function (player) {
        return "Clenching your " + ItemsList_1.items.get(player.meta.inventoryMeta.weapon).name + " you take a deep breath.. Calming your nerves.. There is one way forward and now with all the monsters attention squarely on you there is no way back. You swing your " + ItemsList_1.items.get(player.meta.inventoryMeta.weapon).name + " side to side cutting down one monster after the other.. Being pushed back with the occasional claw from one of the monsters, yet you push on, digging down deep into your warrior spirit, holding onto the memories of times before..<br><br>The screams of the monsters die down, one after another..<br><br>Until finally, there are no more left..<br><br>You look all around you, seeing the carnage you have left behind and begin to feel the pain from all the attacks.<br><br>The young girl stagger down the tree with a slight limp as she reaches the bottom and begins steadying her footing. She stares directly into your eyes but you notice that something isn't right..<br><br>She begins walking towards you.. Running.. What? You stumble your way up but are dazed by the attacks, you can't tell if she is holding a weapon or not but she is coming at you full force.<br><br>Do you raise your weapon and strike before she gets to you or do you hold still until you can see clearer?<br><br>wait / strike";
    };
    DialogManager.prototype['e1s3'] = function (player) {
        return "You hold your nerves steady to get a clearer picture.. she gets closer and BAM.. She flies onto you biting your neck and clawing your back. The girl IS A MONSTER, you hear her screech and wail as the beast morphs from a young girl into a Werewolf. You reach around your back and rip the thing from you, pulling out your " + ItemsList_1.items.get(player.meta.inventoryMeta.weapon).name + " and striking the Werewolf with one swift blow, tearing its head from its shoulders.<br><br>Argh, all this effort for this thing you think to yourself..<br><br>Well even though nothing came of this, the eyes from Pure Paradise are always watching.. and they will take notice of your heroic acts in the face of the unknown.";
    };
    DialogManager.prototype['e1s4'] = function (player) {
        return "You cannot hesitate in situations like this and pull your " + ItemsList_1.items.get(player.meta.inventoryMeta.weapon).name + " and STRIKE HER DOWN. Starring at her young body you can't help but wonder what was she thinking? You had no other choice.. There was nothing you could have done, but still.. you have taken the life of a child, and that lives with you forever, even in Pure Paradise.";
    };
    DialogManager.prototype['e1s5'] = function (player) {
        return "Catch a hero flying straight into that mess, at least no one will know of your cowardliness because there was no one to see it.. right?";
    };
    DialogManager.prototype['e1s6'] = function (player) {
        return "Saving everyone isn't your problem, besides you've got better things to do with your time than protect a helpless child.";
    };
    DialogManager.prototype['e2s0'] = function (player) {
        return "Walking towards " + AreaNames_1.AreaNames.TIRERA + " with the hope of grabbing a glimpse of the magnificent city. Growing up you always heard the stories of their mighty warriors and noble Elders, towers as high as the clouds and mighty beasts tamed for the protection of the city and its people.<br><br>As you draw nearer you notice smoke in the sky and more and more bodies before you, both human and monster.. You can only begin to imagine what horrors took place. And it all seems fresh? You see one solider crawling on the ground in the battlefield with half his torso torn off. Some what in shock you run up to him to try to help in some way..<br><br>ARRRGHHHHHH... monsters.. they attacked... they're heading for.. " + AreaNames_1.AreaNames.SILVOS + ".. tried to stop them.. Please.. Kill me..<br><br>Do you take the sliders life or carry on, leaving him as he is?<br><br>kill / leave";
    };
    DialogManager.prototype['e2s1'] = function (player) {
        return "WHAT HAVE YOU DONE!! Turning around you see another group of soldiers approaching but you can see how this current situations may appear to be misleading for anyone stumbling upon you.<br><br>Covered in the solider's blood that you had just helped innocently kill, you try to plead with the so approaching men but they don't seem to want to listen..<br><br>ARHHH WE'LL KILL YOU FOR THIS!<br><br>Do you fight the soldiers or try to convince them you were helping ease the killed soldiers pain?<br><br>fight / convince";
    };
    DialogManager.prototype['e2s2'] = function (player) {
        return "Sensing that there is no stopping these men from their blood raged enchantment, you draw your " + ItemsList_1.items.get(player.meta.inventoryMeta.weapon).name + " and begin to defend yourself.. <br>One after another they fall to your overwhelming power and strength, the screams from the men can be heard from miles around.<br><br>The last man standing there.. Quivering before you, not as strong and valiant as he was moments before attacking you..<br><br>Ha you think to yourself, you could squash him in an instant, or do you spare his life?<br><br>squash / spare";
    };
    DialogManager.prototype['e2s3'] = function (player) {
        return "You cackle like a mad man, before starring into the remaining soldiers eyes, you see him tremble before you as he realises that this is the end for him.. He begs and pleads for his life but you laugh and drive your " + ItemsList_1.items.get(player.meta.inventoryMeta.weapon).name + " through his chest, tearing out his heart.<br><br>Bodies lay everywhere and you've added one more to the pile, oh well.. just one more misfit to blend in with the monsters mess.";
    };
    DialogManager.prototype['e2s4'] = function (player) {
        return "Pft, you exhale. You begin to explain what had happened, the solider in front of you is confused, he thought this was the end of himself. So we.. all died for nothing? For.. Nothing..<br><br>CRACK..<br><br>In a moment before you had a chance to make a move the solider plunged his own sword through his skull. Taking his own life.<br><br>You gather yourself together and keep moving forward until you finally see the wreckage that is " + AreaNames_1.AreaNames.TIRERA + ".. Oh well, I guess you couldn't have hoped for much else in a time like this I suppose.";
    };
    DialogManager.prototype['e2s5'] = function (player) {
        return "The men continue to rush towards you as you plead with them that you were only meaning to help the solider you had found on the road..<br><br>WHACK.. Out.<br><br>You awake, beaten half to death.. but still alive.. you gather yourself together and keep moving forward until you finally see the wreckage that is " + AreaNames_1.AreaNames.TIRERA + ".. Oh well, I guess you couldn't have hoped for much else in a time like this I suppose.";
    };
    DialogManager.prototype['e2s6'] = function (player) {
        return "You decide this solider isn't worth your time or blade and leave him as he is.. Walking forward you notice another group of soldiers..<br><br>HALT.. Oh, its just another Trethamian. Did you have any trouble making your way through?<br><br>You make a shrugging movement, somewhat uninterested in their small talk and ask for the directions towards " + AreaNames_1.AreaNames.TIRERA + ".<br><br>They all turn to each other and laugh.. " + AreaNames_1.AreaNames.TIRERA + " is no more my friend, it was overrun by the monsters long ago, but we managed to clear them out and push them back to " + AreaNames_1.AreaNames.SILVOS + " to deal with. We're heading to Pure Paradise in hope to get a good spot in the city to finally relax from these wretched creatures.<br><br>Well isn't this a waste of your time, the city is destroyed and there is nothing to go to.. I guess you could make some fun out of this still?<br><br>Do you attack the remaining soldiers and tear them all apart for fun or humanely leave?<br><br>attack / leave";
    };
    DialogManager.prototype['e2s7'] = function (player) {
        return "You decide you've had enough psychotic episodes for one day and walk away, slightly unhinged by all the human and monster bodies laying around you.";
    };
    DialogManager.prototype['e2s8'] = function (player) {
        return "Well I guess there was nothing better to do than attack a group of soldiers before they had a chance to react. You pull out you " + ItemsList_1.items.get(player.meta.inventoryMeta.weapon).name + " and cut them down, one by one.. Until no more remain.. It was fun while it lasted I suppose..<br><br>Off to the next city!";
    };
    DialogManager.prototype['e3s0'] = function (player) {
        return "We have been waiting for you " + player.name + ".. We have been watching you this entire time.. We see, everything. Know, everything.. Do not think that there isn't a single thing that you have done that we have not seen. That we do not know. Our land of Pure Paradise, we only only the best of people in.. Are you one of them?<br><br>Enter anything to continue..";
    };
    DialogManager.prototype['e3s1'] = function (player) {
        return "We have been watching you " + player.name + ".. and we have seen your acts of kindness and bravery, even in the face of the unknown. We have heard all the great things you have done for the villages and have witness your mercy and honour. You are a noble person " + player.name + " and we would gladly take you in as one of our own.. you are a hero amongst heroes.. You are given one of highest honours, one of our special leagues.<br><br>Welcome, to becoming apart of Pure Paradise.<br><br>This is what you've traveled so far and fought so hard for.. you are truly the hero of this story.. Thank you!<br>The End.<br><br>Thank you for playing.<br><br>Arone Tie Susau 2020\")";
    };
    DialogManager.prototype['e3s2'] = function (player) {
        return "You've done some bad things " + player.name + ".. You've done some pretty bad things.. But you're not the worst we've seen.. Hmm we have a spot forpeople just like you.. <br><br>For all the bad deeds you've committed we sentence you to 2 years of cleaning the city sewerage systems.<br><br>It may never clear the atrocities that you have committed but at least you have something to atone for the crimes you havecommitted.<br><br>The End.<br><br>Thank you for playing.<br><br>Arone Tie Susau 2020";
    };
    return DialogManager;
}());
exports.DialogManager = DialogManager;


/***/ }),

/***/ "./src/app/engine/Engine.ts":
/*!**********************************!*\
  !*** ./src/app/engine/Engine.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DialogManager_1 = __webpack_require__(/*! ../dialog/DialogManager */ "./src/app/dialog/DialogManager.ts");
var Engine = (function () {
    function Engine(observer) {
        this._observer = observer;
        this.dialogManager = new DialogManager_1.DialogManager();
    }
    Engine.prototype.invalidAction = function (cmd, player, socket) {
        this._observer.invalidCommand({
            id: player.id,
            type: 1,
            message: 'Invalid action entered, please try again.'
        }, socket);
    };
    return Engine;
}());
exports.Engine = Engine;


/***/ }),

/***/ "./src/app/engine/concrete/BattleEngine.ts":
/*!*************************************************!*\
  !*** ./src/app/engine/concrete/BattleEngine.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Engine_1 = __webpack_require__(/*! ../Engine */ "./src/app/engine/Engine.ts");
var BattleEngine = (function (_super) {
    __extends(BattleEngine, _super);
    function BattleEngine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BattleEngine.prototype.action = function (cmd, player, socket) {
    };
    return BattleEngine;
}(Engine_1.Engine));
exports.BattleEngine = BattleEngine;


/***/ }),

/***/ "./src/app/engine/concrete/EventEngine.ts":
/*!************************************************!*\
  !*** ./src/app/engine/concrete/EventEngine.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Engine_1 = __webpack_require__(/*! ../Engine */ "./src/app/engine/Engine.ts");
var MapManager_1 = __webpack_require__(/*! ../../map/MapManager */ "./src/app/map/MapManager.ts");
var Context_1 = __webpack_require__(/*! ../../defaults/Context */ "./src/app/defaults/Context.ts");
var AreaNames_1 = __webpack_require__(/*! ../../defaults/AreaNames */ "./src/app/defaults/AreaNames.ts");
var MapIds_1 = __webpack_require__(/*! ../../defaults/MapIds */ "./src/app/defaults/MapIds.ts");
var E01GirlInVillage_1 = __webpack_require__(/*! ../../event/eventlist/E01GirlInVillage */ "./src/app/event/eventlist/E01GirlInVillage.ts");
var CharacterTypes_1 = __webpack_require__(/*! ../../defaults/CharacterTypes */ "./src/app/defaults/CharacterTypes.ts");
var E03PureParadiseEnding_1 = __webpack_require__(/*! ../../event/eventlist/E03PureParadiseEnding */ "./src/app/event/eventlist/E03PureParadiseEnding.ts");
var E02DyingSoldier_1 = __webpack_require__(/*! ../../event/eventlist/E02DyingSoldier */ "./src/app/event/eventlist/E02DyingSoldier.ts");
var EventEngine = (function (_super) {
    __extends(EventEngine, _super);
    function EventEngine(observer) {
        var _this = _super.call(this, observer) || this;
        _this.events = new Map([
            [1, new E01GirlInVillage_1.E01GirlInVillage()],
            [2, new E02DyingSoldier_1.E02DyingSoldier()],
            [3, new E03PureParadiseEnding_1.E03PureParadiseEnding()]
        ]);
        return _this;
    }
    EventEngine.prototype.start = function (cmd, player, socket) {
        player.name = cmd;
        player.meta.context = Context_1.Context.FREE_ROAM;
        this._observer.notify({
            id: player.id,
            room: player.room,
            flags: {
                mapUpdate: true,
                playerUpdate: true,
                battleUpdate: false,
                eventUpdate: false,
                contextUpdate: true,
                generalUpdate: true,
                error: false
            },
            player: {
                name: player.name,
                context: Context_1.Context.FREE_ROAM,
                flags: {
                    inventoryUpdate: false,
                    equippedUpdate: false,
                    statsUpdate: false,
                    coordsUpdate: true
                },
                coords: {
                    local: player.location.local.index,
                    global: player.location.global.index
                }
            },
            general: {
                text: this.dialogManager['e0s0'](player)
            },
            map: {
                id: MapIds_1.MapIds.VEMARK,
                name: AreaNames_1.AreaNames.VENMARK,
                raw: MapManager_1.MapManager.maps.get(MapIds_1.MapIds.VEMARK).raw
            }
        }, socket);
    };
    EventEngine.prototype.action = function (cmd, player, socket) {
        var eventId = player.meta.eventMeta.id;
        var notEnding = eventId !== 3;
        if (notEnding) {
            var eventStage = player.meta.eventMeta.stage;
            var eventCode = player.meta.eventMeta.code;
            var event_1 = this.events.get(eventId);
            var options = event_1.options.get(eventCode);
            var match = options.has(cmd);
            if (match) {
                var nextCode = options.get(cmd);
                var nextStage = Number.parseInt(nextCode.split("s")[1]);
                var nextStory = event_1.story(nextCode, player);
                var nextOptions = event_1.options.get(nextCode);
                var finished = event_1.isFinalStage(nextCode);
                var general = finished ? { text: "Event " + eventId + " Finished" } : undefined;
                console.log(nextCode);
                player.meta.eventMeta.updateCode(eventId, nextStage);
                this.eventFinished(player, finished, socket, eventId, eventStage);
                this._observer.notify({
                    id: player.id,
                    room: player.room,
                    flags: {
                        mapUpdate: false,
                        playerUpdate: false,
                        battleUpdate: false,
                        eventUpdate: true,
                        contextUpdate: finished,
                        generalUpdate: false,
                        error: false
                    },
                    event: {
                        flags: {
                            displayUpdate: false
                        },
                        name: event_1.name,
                        story: nextStory,
                        options: nextOptions,
                    },
                    general: general,
                    player: {
                        flags: {
                            inventoryUpdate: false,
                            equippedUpdate: false,
                            statsUpdate: false,
                            coordsUpdate: true
                        },
                        coords: {
                            local: player.location.local.index,
                            global: player.location.global.index
                        },
                        name: player.name,
                        context: player.meta.context
                    }
                }, socket);
            }
            else
                this.invalidAction(cmd, player, socket);
        }
        else
            this.endingAction(cmd, player, socket);
    };
    EventEngine.prototype.onEventMove = function (player, socket) {
        var _this = this;
        this.events.forEach(function (event) {
            var localMatch = player.location.local.index === event.location.local.index;
            var globalMatch = player.location.global.index === event.location.global.index;
            var endingRequirementsMet = _this.endingRequirementsCheck(player);
            var notEnding = event.id !== 3;
            if (localMatch && globalMatch) {
                if (notEnding || endingRequirementsMet) {
                    player.meta.context = Context_1.Context.EVENT;
                    player.meta.eventMeta.updateCode(event.id, 0);
                    _this._observer.notify({
                        id: player.id,
                        room: player.room,
                        flags: {
                            generalUpdate: false,
                            mapUpdate: false,
                            playerUpdate: true,
                            battleUpdate: false,
                            eventUpdate: true,
                            contextUpdate: true,
                            error: false
                        },
                        general: {
                            text: "Event Started - " + event.name
                        },
                        player: {
                            flags: {
                                inventoryUpdate: false,
                                equippedUpdate: false,
                                statsUpdate: false,
                                coordsUpdate: true
                            },
                            coords: {
                                local: player.location.local.index,
                                global: player.location.global.index
                            },
                            name: player.name,
                            context: player.meta.context
                        },
                        event: {
                            flags: {
                                displayUpdate: true
                            },
                            name: event.name,
                            story: event.story(player.meta.eventMeta.code, player),
                            options: event.options.get(player.meta.eventMeta.code),
                            display: event.display
                        }
                    }, socket);
                }
                else
                    _this.endingRequirementsFail(player, socket);
            }
        });
    };
    EventEngine.prototype.eventFinished = function (player, finished, socket, eventId, eventStage) {
        if (finished) {
            player.meta.context = Context_1.Context.FREE_ROAM;
            player.location.local.incrementX();
            player.location.local.incrementY();
            player.meta.eventMeta.updateScore(eventId, eventStage);
            player.meta.eventMeta.eventsCompleted.set(eventId, true);
            this._observer.roomMovement({
                players: [{
                        id: player.id,
                        name: player.name,
                        room: player.room,
                        context: player.meta.context.toString(),
                        type: CharacterTypes_1.CharacterTypes.PLAYER,
                        location: {
                            local: player.location.local.index,
                            global: player.location.global.index
                        }
                    }]
            }, socket);
        }
    };
    EventEngine.prototype.endingRequirementsFail = function (player, socket) {
        player.location.local.incrementX();
        player.location.local.incrementY();
        this._observer.endingValidationFail({
            id: socket.id,
            type: 4,
            message: "You need to complete the quests in the other regions before coming here!"
        }, socket);
        this._observer.roomMovement({
            players: [{
                    id: player.id,
                    name: player.name,
                    room: player.room,
                    context: player.meta.context.toString(),
                    type: CharacterTypes_1.CharacterTypes.PLAYER,
                    location: {
                        local: player.location.local.index,
                        global: player.location.global.index
                    }
                }]
        }, socket);
        this._observer.notify({
            id: player.id,
            room: player.room,
            flags: {
                generalUpdate: false,
                mapUpdate: false,
                playerUpdate: true,
                battleUpdate: false,
                eventUpdate: false,
                contextUpdate: false,
                error: false
            },
            player: {
                flags: {
                    inventoryUpdate: false,
                    equippedUpdate: false,
                    statsUpdate: false,
                    coordsUpdate: true
                },
                coords: {
                    local: player.location.local.index,
                    global: player.location.global.index
                },
                name: player.name,
                context: player.meta.context
            }
        }, socket);
    };
    EventEngine.prototype.endingAction = function (cmd, player, socket) {
        var eventId = 3;
        var event = this.events.get(eventId);
        var eventStage = player.meta.eventMeta.stage;
        var eventCode = player.meta.eventMeta.code;
        var options = event.options.get(eventCode);
        var finalCode = player.meta.eventMeta.total() < 10 ? "e3s1" : 'e3s2';
        var story = event.story(finalCode, player);
        var finished = true;
        player.meta.eventMeta.updateCode(eventId, eventStage + 1);
        this.eventFinished(player, finished, socket, eventId, eventStage);
        this._observer.notify({
            id: player.id,
            room: player.room,
            flags: {
                generalUpdate: true,
                mapUpdate: false,
                playerUpdate: false,
                battleUpdate: false,
                eventUpdate: true,
                contextUpdate: finished,
                error: false
            },
            event: {
                flags: {
                    displayUpdate: false
                },
                name: event.name,
                story: story,
                options: options,
            },
            general: { text: "Event " + eventId + " Finished" },
            player: {
                flags: {
                    inventoryUpdate: false,
                    equippedUpdate: false,
                    statsUpdate: false,
                    coordsUpdate: true
                },
                coords: {
                    local: player.location.local.index,
                    global: player.location.global.index
                },
                name: player.name,
                context: player.meta.context
            }
        }, socket);
    };
    EventEngine.prototype.endingRequirementsCheck = function (player) {
        var e1Done = player.meta.eventMeta.eventsCompleted.get(1) || false;
        var e2Done = player.meta.eventMeta.eventsCompleted.get(2) || false;
        return e1Done && e2Done;
    };
    return EventEngine;
}(Engine_1.Engine));
exports.EventEngine = EventEngine;


/***/ }),

/***/ "./src/app/engine/concrete/GameEngine.ts":
/*!***********************************************!*\
  !*** ./src/app/engine/concrete/GameEngine.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BattleEngine_1 = __webpack_require__(/*! ./BattleEngine */ "./src/app/engine/concrete/BattleEngine.ts");
var MapEngine_1 = __webpack_require__(/*! ./MapEngine */ "./src/app/engine/concrete/MapEngine.ts");
var EventEngine_1 = __webpack_require__(/*! ./EventEngine */ "./src/app/engine/concrete/EventEngine.ts");
var Context_1 = __webpack_require__(/*! ../../defaults/Context */ "./src/app/defaults/Context.ts");
var ShopEngine_1 = __webpack_require__(/*! ./ShopEngine */ "./src/app/engine/concrete/ShopEngine.ts");
var InventoryEngine_1 = __webpack_require__(/*! ./InventoryEngine */ "./src/app/engine/concrete/InventoryEngine.ts");
var Engine_1 = __webpack_require__(/*! ../Engine */ "./src/app/engine/Engine.ts");
var Command_1 = __webpack_require__(/*! ../../defaults/Command */ "./src/app/defaults/Command.ts");
var GameEngine = (function (_super) {
    __extends(GameEngine, _super);
    function GameEngine(observer) {
        var _this = _super.call(this, observer) || this;
        _this.battleEngine = new BattleEngine_1.BattleEngine(observer);
        _this.mapEngine = new MapEngine_1.MapEngine(observer);
        _this.eventEngine = new EventEngine_1.EventEngine(observer);
        _this.shopEngine = new ShopEngine_1.ShopEngine(observer);
        _this.inventoryEngine = new InventoryEngine_1.InventoryEngine(observer);
        return _this;
    }
    GameEngine.prototype.run = function (cmd, player, socket) {
        if (player.meta.context == Context_1.Context.START)
            this.eventEngine.start(cmd, player, socket);
        else {
            switch (player.meta.context) {
                case Context_1.Context.FREE_ROAM:
                    this.action(cmd, player, socket);
                    break;
                case Context_1.Context.BATTLE:
                    this.battleEngine.action(cmd, player, socket);
                    break;
                case Context_1.Context.EVENT:
                    this.eventEngine.action(cmd, player, socket);
                    break;
                case Context_1.Context.SHOP:
                    this.shopEngine.action(cmd, player, socket);
                    break;
                case Context_1.Context.INVENTORY:
                    this.inventoryEngine.action(cmd, player, socket);
                    break;
            }
        }
    };
    GameEngine.prototype.action = function (cmd, player, socket) {
        switch (cmd) {
            case Command_1.Command.W:
                this.mapEngine.action(cmd, player, socket);
                break;
            case Command_1.Command.A:
                this.mapEngine.action(cmd, player, socket);
                break;
            case Command_1.Command.S:
                this.mapEngine.action(cmd, player, socket);
                break;
            case Command_1.Command.D:
                this.mapEngine.action(cmd, player, socket);
                break;
            case Command_1.Command.INV:
                this.inventoryEngine.action(cmd, player, socket);
                break;
            default:
                this.invalidAction(cmd, player, socket);
        }
        this.eventEngine.onEventMove(player, socket);
    };
    return GameEngine;
}(Engine_1.Engine));
exports.GameEngine = GameEngine;


/***/ }),

/***/ "./src/app/engine/concrete/InventoryEngine.ts":
/*!****************************************************!*\
  !*** ./src/app/engine/concrete/InventoryEngine.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Engine_1 = __webpack_require__(/*! ../Engine */ "./src/app/engine/Engine.ts");
var InventoryEngine = (function (_super) {
    __extends(InventoryEngine, _super);
    function InventoryEngine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InventoryEngine.prototype.action = function (cmd, player, socket) {
    };
    return InventoryEngine;
}(Engine_1.Engine));
exports.InventoryEngine = InventoryEngine;


/***/ }),

/***/ "./src/app/engine/concrete/MapEngine.ts":
/*!**********************************************!*\
  !*** ./src/app/engine/concrete/MapEngine.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Engine_1 = __webpack_require__(/*! ../Engine */ "./src/app/engine/Engine.ts");
var Command_1 = __webpack_require__(/*! ../../defaults/Command */ "./src/app/defaults/Command.ts");
var MapManager_1 = __webpack_require__(/*! ../../map/MapManager */ "./src/app/map/MapManager.ts");
var CharacterTypes_1 = __webpack_require__(/*! ../../defaults/CharacterTypes */ "./src/app/defaults/CharacterTypes.ts");
var MapEngine = (function (_super) {
    __extends(MapEngine, _super);
    function MapEngine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MapEngine.prototype.action = function (cmd, player, socket) {
        var mapSwitch = this.globalBoundsCheck(cmd, player, socket);
        switch (cmd) {
            case Command_1.Command.W:
                player.location.local.decremementY();
                break;
            case Command_1.Command.A:
                player.location.local.decremementX();
                break;
            case Command_1.Command.S:
                player.location.local.incrementY();
                break;
            case Command_1.Command.D:
                player.location.local.incrementX();
                break;
        }
        mapSwitch ?
            this.movePlayerGlobally(player, socket) :
            this.movePlayerLocally(player, socket);
        this.roomMovement(player, socket);
    };
    MapEngine.prototype.globalBoundsCheck = function (cmd, player, socket) {
        var playerLocalX = player.location.local.x;
        var playerLocalY = player.location.local.y;
        var playerGlobalX = player.location.global.x;
        var playerGlobalY = player.location.global.y;
        var currentMap = MapManager_1.MapManager.maps.get(player.location.global.index);
        var currentMapLength = player.location.local.length;
        if (cmd === Command_1.Command.W && playerLocalY === 0) {
            if (currentMap.bounds.north) {
                player.location.updateLocalPosition(playerLocalX, currentMapLength);
                player.location.updateGlobalPosition(playerGlobalX, playerGlobalY - 1);
                return true;
            }
            else
                this.outOfBounds(player, socket);
        }
        if (cmd === Command_1.Command.S && playerLocalY === currentMapLength - 1) {
            if (currentMap.bounds.south) {
                player.location.updateLocalPosition(playerLocalX, -1);
                player.location.updateGlobalPosition(playerGlobalX, playerGlobalY + 1);
                return true;
            }
            else
                this.outOfBounds(player, socket);
        }
        if (cmd === Command_1.Command.D && playerLocalX === currentMapLength - 1) {
            if (currentMap.bounds.east) {
                player.location.updateLocalPosition(-1, playerLocalY);
                player.location.updateGlobalPosition(playerGlobalX + 1, playerGlobalY);
                return true;
            }
            else
                this.outOfBounds(player, socket);
        }
        if (cmd === Command_1.Command.A && playerLocalX === 0) {
            if (currentMap.bounds.west) {
                player.location.updateLocalPosition(currentMapLength, playerLocalY);
                player.location.updateGlobalPosition(playerGlobalX - 1, playerGlobalY);
                return true;
            }
            else
                this.outOfBounds(player, socket);
        }
        return false;
    };
    MapEngine.prototype.outOfBounds = function (player, socket) {
        this._observer.notify({
            id: player.id,
            room: player.room,
            flags: {
                mapUpdate: false,
                playerUpdate: false,
                battleUpdate: false,
                eventUpdate: false,
                contextUpdate: false,
                generalUpdate: true,
                error: false
            },
            general: {
                text: 'You can\'t go any farther out!'
            }
        }, socket);
    };
    MapEngine.prototype.movePlayerGlobally = function (player, socket) {
        var playerGlobalIndex = player.location.global.index;
        var map = MapManager_1.MapManager.maps.get(playerGlobalIndex);
        this._observer.notify({
            id: player.id,
            room: player.room,
            flags: {
                mapUpdate: true,
                playerUpdate: true,
                battleUpdate: false,
                eventUpdate: false,
                contextUpdate: false,
                generalUpdate: true,
                error: false
            },
            general: {
                text: "You have now entered " + map.name
            },
            map: {
                id: map.id,
                name: map.name,
                raw: map.raw
            },
            player: {
                name: player.name,
                context: player.meta.context,
                flags: {
                    inventoryUpdate: false,
                    equippedUpdate: false,
                    statsUpdate: false,
                    coordsUpdate: true
                },
                coords: {
                    local: player.location.local.index,
                    global: player.location.global.index
                }
            }
        }, socket);
    };
    MapEngine.prototype.movePlayerLocally = function (player, socket) {
        this._observer.notify({
            id: player.id,
            room: player.room,
            flags: {
                mapUpdate: false,
                playerUpdate: true,
                battleUpdate: false,
                eventUpdate: false,
                contextUpdate: false,
                generalUpdate: false,
                error: false
            },
            player: {
                name: player.name,
                context: player.meta.context,
                flags: {
                    inventoryUpdate: false,
                    equippedUpdate: false,
                    statsUpdate: false,
                    coordsUpdate: true
                },
                coords: {
                    local: player.location.local.index,
                    global: player.location.global.index
                }
            }
        }, socket);
    };
    MapEngine.prototype.roomMovement = function (player, socket) {
        this._observer.roomMovement({
            room: player.room,
            players: [{
                    id: player.id,
                    name: player.name,
                    room: player.room,
                    context: player.meta.context.toString(),
                    type: CharacterTypes_1.CharacterTypes.PLAYER,
                    location: {
                        local: player.location.local.index,
                        global: player.location.global.index
                    }
                }]
        }, socket);
    };
    return MapEngine;
}(Engine_1.Engine));
exports.MapEngine = MapEngine;


/***/ }),

/***/ "./src/app/engine/concrete/ShopEngine.ts":
/*!***********************************************!*\
  !*** ./src/app/engine/concrete/ShopEngine.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Engine_1 = __webpack_require__(/*! ../Engine */ "./src/app/engine/Engine.ts");
var ShopEngine = (function (_super) {
    __extends(ShopEngine, _super);
    function ShopEngine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShopEngine.prototype.action = function (cmd, player, socket) {
    };
    return ShopEngine;
}(Engine_1.Engine));
exports.ShopEngine = ShopEngine;


/***/ }),

/***/ "./src/app/event/Event.ts":
/*!********************************!*\
  !*** ./src/app/event/Event.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DialogManager_1 = __webpack_require__(/*! ../dialog/DialogManager */ "./src/app/dialog/DialogManager.ts");
var PointManager_1 = __webpack_require__(/*! ../character/point/PointManager */ "./src/app/character/point/PointManager.ts");
var Event = (function () {
    function Event(x1, y1, x2, y2) {
        this._location = new PointManager_1.PointManager();
        this._dialog = new DialogManager_1.DialogManager();
        this.location.local.length = 20;
        this.location.global.length = 2;
        this._location.updateLocalPosition(x1, y1);
        this._location.updateGlobalPosition(x2, y2);
    }
    Object.defineProperty(Event.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "options", {
        get: function () {
            return this._options;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "display", {
        get: function () {
            return this._display;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "location", {
        get: function () {
            return this._location;
        },
        enumerable: true,
        configurable: true
    });
    Event.prototype.story = function (id, player) {
        return this._dialog[id](player) || "";
    };
    Object.defineProperty(Event.prototype, "endingCodes", {
        get: function () {
            return this._endingCodes;
        },
        enumerable: true,
        configurable: true
    });
    Event.prototype.isFinalStage = function (code) {
        return this._endingCodes.includes(code);
    };
    return Event;
}());
exports.Event = Event;


/***/ }),

/***/ "./src/app/event/eventlist/E01GirlInVillage.ts":
/*!*****************************************************!*\
  !*** ./src/app/event/eventlist/E01GirlInVillage.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Event_1 = __webpack_require__(/*! ../Event */ "./src/app/event/Event.ts");
var E01GirlInVillage = (function (_super) {
    __extends(E01GirlInVillage, _super);
    function E01GirlInVillage() {
        var _this = _super.call(this, 14, 13, 1, 0) || this;
        _this._display = [
            1
        ];
        _this._id = 1;
        _this._name = "Girl In Village";
        _this._options = new Map([
            ["e" + _this._id + "s0", new Map([
                    ['help', 'e1s1'],
                    ['run', 'e1s6']
                ])],
            ["e" + _this._id + "s1", new Map([
                    ['fight', 'e1s2'],
                    ['run', 'e1s5']
                ])],
            ["e" + _this._id + "s2", new Map([
                    ['wait', 'e1s3'],
                    ['strike', 'e1s4']
                ])]
        ]);
        _this._endingCodes = [
            "e1s4",
            "e1s3",
            "e1s5",
            "e1s6"
        ];
        return _this;
    }
    return E01GirlInVillage;
}(Event_1.Event));
exports.E01GirlInVillage = E01GirlInVillage;


/***/ }),

/***/ "./src/app/event/eventlist/E02DyingSoldier.ts":
/*!****************************************************!*\
  !*** ./src/app/event/eventlist/E02DyingSoldier.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Event_1 = __webpack_require__(/*! ../Event */ "./src/app/event/Event.ts");
var E02DyingSoldier = (function (_super) {
    __extends(E02DyingSoldier, _super);
    function E02DyingSoldier() {
        var _this = _super.call(this, 5, 7, 0, 1) || this;
        _this._display = [
            1
        ];
        _this._id = 2;
        _this._name = "Dying Soldier";
        _this._options = new Map([
            ["e" + _this._id + "s0", new Map([
                    ['kill', 'e2s1'],
                    ['leave', 'e2s6']
                ])],
            ["e" + _this._id + "s1", new Map([
                    ['fight', 'e2s2'],
                    ['convince', 'e2s5']
                ])],
            ["e" + _this._id + "s2", new Map([
                    ['squash', 'e2s3'],
                    ['spare', 'e2s4']
                ])],
            ["e" + _this._id + "s6", new Map([
                    ['leave', 'e2s7'],
                    ['attack', 'e2s8']
                ])]
        ]);
        _this._endingCodes = [
            "e2s3",
            "e2s4",
            "e2s5",
            "e2s7",
            "e2s8"
        ];
        return _this;
    }
    return E02DyingSoldier;
}(Event_1.Event));
exports.E02DyingSoldier = E02DyingSoldier;


/***/ }),

/***/ "./src/app/event/eventlist/E03PureParadiseEnding.ts":
/*!**********************************************************!*\
  !*** ./src/app/event/eventlist/E03PureParadiseEnding.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Event_1 = __webpack_require__(/*! ../Event */ "./src/app/event/Event.ts");
var E03PureParadiseEnding = (function (_super) {
    __extends(E03PureParadiseEnding, _super);
    function E03PureParadiseEnding() {
        var _this = _super.call(this, 10, 14, 1, 1) || this;
        _this._display = [
            1
        ];
        _this._id = 3;
        _this._name = "Pure Paradise";
        _this._options = new Map();
        _this._endingCodes = [
            "e3s3"
        ];
        return _this;
    }
    return E03PureParadiseEnding;
}(Event_1.Event));
exports.E03PureParadiseEnding = E03PureParadiseEnding;


/***/ }),

/***/ "./src/app/item/Item.ts":
/*!******************************!*\
  !*** ./src/app/item/Item.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Item = (function () {
    function Item(id, name, description, price) {
        this._id = id;
        this._name = name;
        this._description = description;
        this._price = price;
    }
    Object.defineProperty(Item.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "description", {
        get: function () {
            return this._description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "price", {
        get: function () {
            return this._price;
        },
        enumerable: true,
        configurable: true
    });
    return Item;
}());
exports.Item = Item;


/***/ }),

/***/ "./src/app/item/concrete/Armour.ts":
/*!*****************************************!*\
  !*** ./src/app/item/concrete/Armour.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Item_1 = __webpack_require__(/*! ../Item */ "./src/app/item/Item.ts");
var Armour = (function (_super) {
    __extends(Armour, _super);
    function Armour(id, name, description, price, defence) {
        var _this = _super.call(this, id, name, description, price) || this;
        _this.defence = defence;
        return _this;
    }
    Armour.prototype.equip = function (player) {
    };
    Armour.prototype.unequip = function (player) {
    };
    return Armour;
}(Item_1.Item));
exports.Armour = Armour;


/***/ }),

/***/ "./src/app/item/concrete/EdibleWeapon.ts":
/*!***********************************************!*\
  !*** ./src/app/item/concrete/EdibleWeapon.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Item_1 = __webpack_require__(/*! ../Item */ "./src/app/item/Item.ts");
var EdibleWeapon = (function (_super) {
    __extends(EdibleWeapon, _super);
    function EdibleWeapon(id, name, description, price, damage, value) {
        var _this = _super.call(this, id, name, description, price) || this;
        _this.damage = damage;
        _this.value = value;
        return _this;
    }
    EdibleWeapon.prototype.consume = function (player) {
    };
    EdibleWeapon.prototype.equip = function (player) {
    };
    EdibleWeapon.prototype.unequip = function (player) {
    };
    return EdibleWeapon;
}(Item_1.Item));
exports.EdibleWeapon = EdibleWeapon;


/***/ }),

/***/ "./src/app/item/concrete/Food.ts":
/*!***************************************!*\
  !*** ./src/app/item/concrete/Food.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Item_1 = __webpack_require__(/*! ../Item */ "./src/app/item/Item.ts");
var Food = (function (_super) {
    __extends(Food, _super);
    function Food(id, name, description, price, value) {
        var _this = _super.call(this, id, name, description, price) || this;
        _this.value = value;
        return _this;
    }
    Food.prototype.consume = function (player) {
    };
    return Food;
}(Item_1.Item));
exports.Food = Food;


/***/ }),

/***/ "./src/app/item/concrete/ItemsList.ts":
/*!********************************************!*\
  !*** ./src/app/item/concrete/ItemsList.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ItemId_1 = __webpack_require__(/*! ../../defaults/ItemId */ "./src/app/defaults/ItemId.ts");
var Food_1 = __webpack_require__(/*! ./Food */ "./src/app/item/concrete/Food.ts");
var Weapon_1 = __webpack_require__(/*! ./Weapon */ "./src/app/item/concrete/Weapon.ts");
var Armour_1 = __webpack_require__(/*! ./Armour */ "./src/app/item/concrete/Armour.ts");
var EdibleWeapon_1 = __webpack_require__(/*! ./EdibleWeapon */ "./src/app/item/concrete/EdibleWeapon.ts");
var items = new Map([
    [ItemId_1.ItemId.APPLE, new Food_1.Food(ItemId_1.ItemId.APPLE, 'Apple', 'An apple a day keeps the doctor away!', 9, 2)],
    [ItemId_1.ItemId.BEEF, new Food_1.Food(ItemId_1.ItemId.BEEF, 'Beef', 'Man needs his beef.', 31, 24)],
    [ItemId_1.ItemId.DONUT, new Food_1.Food(ItemId_1.ItemId.DONUT, 'Donut', 'Mmmmmm, donuts.', 26, 14)],
    [ItemId_1.ItemId.HAMBURGER, new Food_1.Food(ItemId_1.ItemId.HAMBURGER, 'Hamburger', 'Holy cow where did you get this hamburger!', 110, 30)],
    [ItemId_1.ItemId.FLESH, new Food_1.Food(ItemId_1.ItemId.FLESH, 'Flesh', 'Uhmm.. if you\'re hungry enough?', 1, 1)],
    [ItemId_1.ItemId.PEANUTS, new Food_1.Food(ItemId_1.ItemId.PEANUTS, 'Peanuts', 'A little salty if you ask me.', 9, 1)],
    [ItemId_1.ItemId.PIE, new Food_1.Food(ItemId_1.ItemId.PIE, 'Pie', 'At least its still wrapped', 14, 4)],
    [ItemId_1.ItemId.WATER, new Food_1.Food(ItemId_1.ItemId.WATER, 'Water', 'A bit of H2O never hurt anyone', 25, 16)],
    [ItemId_1.ItemId.FISTS, new Weapon_1.Weapon(ItemId_1.ItemId.FISTS, 'Fists', 'Your bare hands, old fashion but reliable.', 0, 1)],
    [ItemId_1.ItemId.RUSTED_RAZOR, new Weapon_1.Weapon(ItemId_1.ItemId.RUSTED_RAZOR, 'Rusted Razor', 'A rusted, dull blade that is pathetic in every way, shape and form.', 150, 3)],
    [ItemId_1.ItemId.KNIFE, new Weapon_1.Weapon(ItemId_1.ItemId.KNIFE, 'Knife', 'This thing is pointy.', 25, 2)],
    [ItemId_1.ItemId.WOODEN_SWORD, new Weapon_1.Weapon(ItemId_1.ItemId.WOODEN_SWORD, 'Wooden Sword', 'A sword carved out of wood, greater than man but lesser than the Draconical Sword.', 250, 10)],
    [ItemId_1.ItemId.DRACONIC_SWORD, new Weapon_1.Weapon(ItemId_1.ItemId.DRACONIC_SWORD, 'Draconic Sword', 'A sword smithed from a dragon\'s skeleton, the strongest material in all of New Tretham ', 500, 25)],
    [ItemId_1.ItemId.CHOCOLATE_SWORD, new EdibleWeapon_1.EdibleWeapon(ItemId_1.ItemId.CHOCOLATE_SWORD, 'Chocolate Sword', 'A tasty treat that should do the trick!', 5, 1, 1)],
    [ItemId_1.ItemId.CLOTH_CLOTHING, new Armour_1.Armour(ItemId_1.ItemId.CLOTH_CLOTHING, 'Cloth Clothing', 'Ain\'t nothing better than some cloth clothing, fresh from the sheep.', 15, 2)],
    [ItemId_1.ItemId.WOODEN_SHIELD, new Armour_1.Armour(ItemId_1.ItemId.WOODEN_SHIELD, 'Wooden Shield', 'A shield carved from wood, provides decent protection.', 200, 8)],
    [ItemId_1.ItemId.DRACONIC_SHIELD, new Armour_1.Armour(ItemId_1.ItemId.DRACONIC_SHIELD, 'Draconic Shield', 'A shield smithed from a dragon\'s hide, provides godly protection.', 450, 25)]
]);
exports.items = items;


/***/ }),

/***/ "./src/app/item/concrete/Weapon.ts":
/*!*****************************************!*\
  !*** ./src/app/item/concrete/Weapon.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Item_1 = __webpack_require__(/*! ../Item */ "./src/app/item/Item.ts");
var Weapon = (function (_super) {
    __extends(Weapon, _super);
    function Weapon(id, name, description, price, damage) {
        var _this = _super.call(this, id, name, description, price) || this;
        _this.damage = damage;
        return _this;
    }
    Weapon.prototype.equip = function (player) {
    };
    Weapon.prototype.unequip = function (player) {
    };
    return Weapon;
}(Item_1.Item));
exports.Weapon = Weapon;


/***/ }),

/***/ "./src/app/map/Bounds.ts":
/*!*******************************!*\
  !*** ./src/app/map/Bounds.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Bounds = (function () {
    function Bounds() {
    }
    Object.defineProperty(Bounds.prototype, "north", {
        get: function () {
            return this._north;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bounds.prototype, "south", {
        get: function () {
            return this._south;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bounds.prototype, "east", {
        get: function () {
            return this._east;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bounds.prototype, "west", {
        get: function () {
            return this._west;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bounds.prototype, "northMapIndex", {
        get: function () {
            return this._northMapIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bounds.prototype, "southMapIndex", {
        get: function () {
            return this._southMapIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bounds.prototype, "eastMapIndex", {
        get: function () {
            return this._eastMapIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bounds.prototype, "westMapIndex", {
        get: function () {
            return this._westMapIndex;
        },
        enumerable: true,
        configurable: true
    });
    Bounds.prototype.generate = function (x, y, index, length) {
        this._north = y > 0;
        this._south = y < length - 1;
        this._west = x > 0;
        this._east = x < length - 1;
        this._northMapIndex = this._north ? index - length : -1;
        this._southMapIndex = this._south ? index + length : -1;
        this._eastMapIndex = this._east ? index + 1 : -1;
        this._westMapIndex = this._west ? index - 1 : -1;
    };
    return Bounds;
}());
exports.Bounds = Bounds;


/***/ }),

/***/ "./src/app/map/GameMap.ts":
/*!********************************!*\
  !*** ./src/app/map/GameMap.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Bounds_1 = __webpack_require__(/*! ./Bounds */ "./src/app/map/Bounds.ts");
var GameMap = (function () {
    function GameMap() {
        this._bounds = new Bounds_1.Bounds();
    }
    Object.defineProperty(GameMap.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameMap.prototype, "localLength", {
        get: function () {
            return this._localLength;
        },
        set: function (value) {
            this._localLength = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameMap.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameMap.prototype, "raw", {
        get: function () {
            return this._raw;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameMap.prototype, "coords", {
        get: function () {
            return this._coords;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameMap.prototype, "bounds", {
        get: function () {
            return this._bounds;
        },
        enumerable: true,
        configurable: true
    });
    GameMap.prototype.generateBounds = function () {
        this._bounds.generate(this.coords.x, this.coords.y, this.coords.index, this.coords.length);
    };
    return GameMap;
}());
exports.GameMap = GameMap;


/***/ }),

/***/ "./src/app/map/MapManager.ts":
/*!***********************************!*\
  !*** ./src/app/map/MapManager.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Venmark_1 = __webpack_require__(/*! ./maps/Venmark */ "./src/app/map/maps/Venmark.ts");
var Silvos_1 = __webpack_require__(/*! ./maps/Silvos */ "./src/app/map/maps/Silvos.ts");
var Tirera_1 = __webpack_require__(/*! ./maps/Tirera */ "./src/app/map/maps/Tirera.ts");
var PureParadiseMap_1 = __webpack_require__(/*! ./maps/PureParadiseMap */ "./src/app/map/maps/PureParadiseMap.ts");
var Defaults_1 = __webpack_require__(/*! ../defaults/Defaults */ "./src/app/defaults/Defaults.ts");
var MapIds_1 = __webpack_require__(/*! ../defaults/MapIds */ "./src/app/defaults/MapIds.ts");
var defaults = new Defaults_1.Defaults();
var MapManager = {
    maps: new Map()
};
exports.MapManager = MapManager;
MapManager.maps.set(MapIds_1.MapIds.VEMARK, new Venmark_1.Venmark(defaults));
MapManager.maps.set(MapIds_1.MapIds.SILVOS, new Silvos_1.Silvos(defaults));
MapManager.maps.set(MapIds_1.MapIds.TIRERA, new Tirera_1.Tirera(defaults));
MapManager.maps.set(MapIds_1.MapIds.PURE_PARADISE, new PureParadiseMap_1.PureParadiseMap(defaults));


/***/ }),

/***/ "./src/app/map/maps/PureParadiseMap.ts":
/*!*********************************************!*\
  !*** ./src/app/map/maps/PureParadiseMap.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GameMap_1 = __webpack_require__(/*! ../GameMap */ "./src/app/map/GameMap.ts");
var AreaNames_1 = __webpack_require__(/*! ../../defaults/AreaNames */ "./src/app/defaults/AreaNames.ts");
var Point_1 = __webpack_require__(/*! ../../character/point/Point */ "./src/app/character/point/Point.ts");
var PureParadiseMap = (function (_super) {
    __extends(PureParadiseMap, _super);
    function PureParadiseMap(defaults) {
        var _this = _super.call(this) || this;
        _this._name = AreaNames_1.AreaNames.PURE_PARADISE;
        _this._coords = new Point_1.Point();
        _this._raw = [
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
            2, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3,
            3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3,
            0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 10,
            5, 11, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 10, 5, 5,
            5, 5, 11, 3, 3, 4, 17, 3, 3, 4, 17, 3, 3, 4, 17, 3, 10, 5, 5, 5,
            5, 5, 5, 20, 3, 4, 3, 3, 3, 4, 3, 3, 3, 4, 3, 21, 5, 5, 5, 6,
            6, 6, 4, 3, 3, 5, 3, 3, 3, 5, 3, 3, 3, 5, 3, 3, 4, 6, 6, 6,
            84, 6, 4, 5, 4, 6, 4, 5, 4, 6, 4, 5, 4, 6, 4, 5, 4, 6, 84, 6,
            6, 6, 4, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 4, 6, 6, 6,
            6, 6, 4, 6, 6, 6, 6, 6, 5, 2, 5, 6, 6, 6, 6, 6, 4, 6, 6, 6,
            6, 6, 4, 6, 6, 6, 6, 10, 10, 4, 11, 11, 6, 6, 6, 6, 4, 6, 6, 6,
            6, 6, 4, 6, 6, 6, 10, 10, 10, 4, 11, 11, 11, 6, 6, 6, 4, 6, 6, 6,
            6, 6, 4, 6, 6, 6, 4, 4, 4, 13, 4, 4, 4, 6, 6, 6, 4, 6, 6, 6,
            6, 6, 4, 6, 6, 6, 4, 4, 4, 4, 4, 4, 4, 6, 6, 6, 4, 6, 6, 5,
            5, 5, 4, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 4, 5, 5, 1,
            1, 1, 1, 1, 1, 1, 11, 3, 3, 3, 3, 3, 3, 11, 1, 1, 1, 1, 1, 1,
            1, 1, 11, 10, 1, 1, 1, 11, 3, 3, 3, 3, 3, 3, 11, 1, 1, 0, 1, 1,
            1, 0, 1, 1, 1, 1, 1, 1, 11, 3, 3, 3, 3, 3, 3, 11, 1, 1, 1
        ];
        defaults.applyMapDefaults(_this);
        return _this;
    }
    return PureParadiseMap;
}(GameMap_1.GameMap));
exports.PureParadiseMap = PureParadiseMap;


/***/ }),

/***/ "./src/app/map/maps/Silvos.ts":
/*!************************************!*\
  !*** ./src/app/map/maps/Silvos.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GameMap_1 = __webpack_require__(/*! ../GameMap */ "./src/app/map/GameMap.ts");
var AreaNames_1 = __webpack_require__(/*! ../../defaults/AreaNames */ "./src/app/defaults/AreaNames.ts");
var Point_1 = __webpack_require__(/*! ../../character/point/Point */ "./src/app/character/point/Point.ts");
var Silvos = (function (_super) {
    __extends(Silvos, _super);
    function Silvos(defaults) {
        var _this = _super.call(this) || this;
        _this._name = AreaNames_1.AreaNames.SILVOS;
        _this._coords = new Point_1.Point();
        _this._raw = [
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3,
            3, 3, 0, 0, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 3, 3, 3, 3,
            3, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 3, 0, 0, 3, 0, 0, 3, 3, 3,
            3, 0, 3, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3,
            3, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3,
            3, 3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 3, 0, 0, 3, 3, 3,
            3, 3, 3, 0, 0, 3, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 3, 3,
            3, 3, 3, 3, 0, 0, 3, 0, 0, 3, 3, 3, 3, 0, 0, 3, 0, 0, 3, 3,
            3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 3, 3, 3,
            3, 0, 0, 3, 0, 0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 3,
            0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 3, 0, 0, 3, 3, 3, 3, 3,
            0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3,
            3, 0, 0, 3, 0, 0, 3, 3, 3, 3, 0, 0, 0, 3, 0, 0, 3, 3, 3, 3,
            3, 3, 3, 0, 0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 13, 0, 3, 0, 0, 3,
            3, 3, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0,
            3, 3, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0,
            3, 3, 3, 0, 0, 3, 0, 0, 3, 0, 0, 3, 0, 3, 3, 3, 3, 0, 0, 3,
            3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3,
            3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3,
            3, 3, 3, 0, 0, 3, 0, 0, 3, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3
        ];
        defaults.applyMapDefaults(_this);
        return _this;
    }
    return Silvos;
}(GameMap_1.GameMap));
exports.Silvos = Silvos;


/***/ }),

/***/ "./src/app/map/maps/Tirera.ts":
/*!************************************!*\
  !*** ./src/app/map/maps/Tirera.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GameMap_1 = __webpack_require__(/*! ../GameMap */ "./src/app/map/GameMap.ts");
var AreaNames_1 = __webpack_require__(/*! ../../defaults/AreaNames */ "./src/app/defaults/AreaNames.ts");
var Point_1 = __webpack_require__(/*! ../../character/point/Point */ "./src/app/character/point/Point.ts");
var Tirera = (function (_super) {
    __extends(Tirera, _super);
    function Tirera(defaults) {
        var _this = _super.call(this) || this;
        _this._name = AreaNames_1.AreaNames.TIRERA;
        _this._coords = new Point_1.Point();
        _this._raw = [
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3,
            3, 3, 0, 0, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 3, 3, 3, 3,
            3, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 3, 0, 0, 3, 0, 0, 3, 3, 3,
            3, 0, 3, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3,
            3, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3,
            3, 3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 3, 0, 0, 3, 3, 3,
            3, 3, 3, 0, 0, 3, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 3, 3,
            3, 3, 3, 3, 0, 13, 3, 0, 0, 3, 3, 3, 3, 0, 0, 3, 0, 0, 3, 3,
            3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 3, 3, 3,
            3, 0, 0, 3, 0, 0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 3,
            0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 3, 0, 0, 3, 3, 3, 3, 3,
            0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3,
            3, 0, 0, 3, 0, 0, 3, 3, 3, 3, 0, 0, 0, 3, 0, 0, 3, 3, 3, 3,
            3, 3, 3, 0, 0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 3, 0, 0, 3,
            3, 3, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0,
            3, 3, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0,
            3, 3, 3, 0, 0, 3, 0, 0, 3, 0, 0, 3, 0, 3, 3, 3, 3, 0, 0, 3,
            3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3,
            3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3,
            3, 3, 3, 0, 0, 3, 0, 0, 3, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3
        ];
        defaults.applyMapDefaults(_this);
        return _this;
    }
    return Tirera;
}(GameMap_1.GameMap));
exports.Tirera = Tirera;


/***/ }),

/***/ "./src/app/map/maps/Venmark.ts":
/*!*************************************!*\
  !*** ./src/app/map/maps/Venmark.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GameMap_1 = __webpack_require__(/*! ../GameMap */ "./src/app/map/GameMap.ts");
var AreaNames_1 = __webpack_require__(/*! ../../defaults/AreaNames */ "./src/app/defaults/AreaNames.ts");
var Point_1 = __webpack_require__(/*! ../../character/point/Point */ "./src/app/character/point/Point.ts");
var Venmark = (function (_super) {
    __extends(Venmark, _super);
    function Venmark(defaults) {
        var _this = _super.call(this) || this;
        _this._name = AreaNames_1.AreaNames.VENMARK;
        _this._coords = new Point_1.Point();
        _this._raw = [
            2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
            2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
            2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 3, 3, 3,
            2, 2, 2, 2, 3, 3, 5, 5, 5, 5, 5, 3, 3, 2, 2, 2, 2, 2, 3, 3,
            2, 2, 3, 3, 3, 10, 9, 9, 9, 9, 9, 11, 3, 2, 2, 2, 2, 2, 3, 3,
            2, 2, 3, 3, 10, 9, 76, 84, 84, 73, 88, 9, 11, 2, 2, 2, 2, 2, 3, 3,
            3, 3, 3, 3, 5, 5, 5, 5, 5, 5, 5, 5, 5, 2, 2, 2, 2, 2, 3, 3,
            3, 3, 3, 3, 4, 1, 1, 5, 5, 5, 1, 1, 4, 3, 2, 2, 2, 3, 3, 3,
            3, 3, 3, 3, 4, 7, 8, 4, 0, 4, 7, 8, 4, 3, 3, 3, 3, 3, 3, 3,
            3, 3, 3, 3, 4, 1, 1, 4, 13, 4, 1, 1, 4, 3, 3, 3, 3, 3, 3, 3,
            3, 3, 3, 3, 4, 5, 5, 4, 5, 4, 5, 5, 4, 3, 3, 3, 3, 3, 3, 3,
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 3, 3, 3, 3, 3,
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 3, 3, 3, 3,
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 3, 3, 3, 3,
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 3, 3, 3, 3,
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 3, 3, 3, 3,
            3, 3, 3, 2, 2, 2, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3,
            3, 3, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3
        ];
        defaults.applyMapDefaults(_this);
        return _this;
    }
    return Venmark;
}(GameMap_1.GameMap));
exports.Venmark = Venmark;


/***/ }),

/***/ "./src/server/PureParadise.ts":
/*!************************************!*\
  !*** ./src/server/PureParadise.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RequestManager_1 = __webpack_require__(/*! ./managers/RequestManager */ "./src/server/managers/RequestManager.ts");
var requestManager = new RequestManager_1.RequestManager();
var PureParadise = (function () {
    function PureParadise() {
    }
    PureParadise.prototype.connect = function (socket) {
        var id = socket.id;
        var room = requestManager.roomManager.assignRoom(id);
        requestManager.playerManager.add(id, room);
        socket.join(room);
        socket.on('client:start', function (cmd) { return requestManager.clientStart(cmd, room, socket); });
        socket.on('client:command', function (cmd) { return requestManager.gameRun(cmd, socket); });
        socket.on('room:chat', function (cmd) { return requestManager.chat(cmd, socket); });
        socket.on('disconnect', function (cmd) { return requestManager.playerLeftRoom(cmd, socket); });
    };
    return PureParadise;
}());
exports.PureParadise = PureParadise;


/***/ }),

/***/ "./src/server/managers/PlayerManager.ts":
/*!**********************************************!*\
  !*** ./src/server/managers/PlayerManager.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Player_1 = __webpack_require__(/*! ../../app/character/concrete/Player */ "./src/app/character/concrete/Player.ts");
var Defaults_1 = __webpack_require__(/*! ../../app/defaults/Defaults */ "./src/app/defaults/Defaults.ts");
var CharacterTypes_1 = __webpack_require__(/*! ../../app/defaults/CharacterTypes */ "./src/app/defaults/CharacterTypes.ts");
var PlayerManager = (function () {
    function PlayerManager() {
        this.defaults = new Defaults_1.Defaults();
        this.players = new Map();
    }
    PlayerManager.prototype.add = function (id, room) {
        this.players.set(id, new Player_1.Player(id, room, this.defaults));
    };
    PlayerManager.prototype.get = function (id) {
        return this.players.get(id);
    };
    PlayerManager.prototype.remove = function (id) {
        this.players.delete(id);
    };
    PlayerManager.prototype.has = function (id) {
        return this.players.has(id);
    };
    PlayerManager.prototype.size = function (room) {
        var size = 0;
        this.players.forEach(function (player) {
            size += player.room === room ? 1 : 0;
        });
        return size;
    };
    PlayerManager.prototype.getAllPlayerUpdates = function (id, room) {
        var _this = this;
        return Array.from(this.players)
            .filter(function (args) {
            return (args[1].id !== id &&
                args[1].name &&
                args[1].room === room);
        })
            .map(function (args) {
            var player = args[1];
            return _this.getPlayerUpdate(player);
        });
    };
    PlayerManager.prototype.getPlayerUpdate = function (player) {
        return {
            id: player.id,
            name: player.name,
            room: player.room,
            context: player.meta.context.toString(),
            type: CharacterTypes_1.CharacterTypes.PLAYER,
            location: {
                local: player.location.local.index,
                global: player.location.global.index
            }
        };
    };
    return PlayerManager;
}());
exports.PlayerManager = PlayerManager;


/***/ }),

/***/ "./src/server/managers/RequestManager.ts":
/*!***********************************************!*\
  !*** ./src/server/managers/RequestManager.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RoomNames_1 = __webpack_require__(/*! ../../app/defaults/RoomNames */ "./src/app/defaults/RoomNames.ts");
var Context_1 = __webpack_require__(/*! ../../app/defaults/Context */ "./src/app/defaults/Context.ts");
var PlayerManager_1 = __webpack_require__(/*! ./PlayerManager */ "./src/server/managers/PlayerManager.ts");
var Observer_1 = __webpack_require__(/*! ../observer/Observer */ "./src/server/observer/Observer.ts");
var GameEngine_1 = __webpack_require__(/*! ../../app/engine/concrete/GameEngine */ "./src/app/engine/concrete/GameEngine.ts");
var RoomManager_1 = __webpack_require__(/*! ./RoomManager */ "./src/server/managers/RoomManager.ts");
var RequestManager = (function () {
    function RequestManager() {
        this._playerManager = new PlayerManager_1.PlayerManager();
        this._roomManager = new RoomManager_1.RoomManager();
        this._observer = new Observer_1.Observer();
        this._gameEngine = new GameEngine_1.GameEngine(this._observer);
    }
    Object.defineProperty(RequestManager.prototype, "observer", {
        get: function () {
            return this._observer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestManager.prototype, "gameEngine", {
        get: function () {
            return this._gameEngine;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestManager.prototype, "playerManager", {
        get: function () {
            return this._playerManager;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestManager.prototype, "roomManager", {
        get: function () {
            return this._roomManager;
        },
        enumerable: true,
        configurable: true
    });
    RequestManager.prototype.clientStart = function (cmd, room, socket) {
        if (room != RoomNames_1.RoomNames.FULL) {
            var player = this._playerManager.get(socket.id);
            this._observer.clientStart({
                room: room,
                count: this._playerManager.size(room),
                players: this._playerManager.getAllPlayerUpdates(player.id, room)
            }, socket);
            this._gameEngine.run(cmd, player, socket);
            this.playerJoinedRoom(player.id, socket);
        }
        else
            this.fullRoom(socket.id, socket);
    };
    RequestManager.prototype.gameRun = function (cmd, socket) {
        var player = this._playerManager.get(socket.id);
        player.room != RoomNames_1.RoomNames.FULL ?
            this._gameEngine.run(cmd, player, socket) :
            this.fullRoom(player.id, socket);
    };
    RequestManager.prototype.playerJoinedRoom = function (id, socket) {
        var player = this._playerManager.get(socket.id);
        var message = player.name + " has joined the quest!";
        this._observer.playerJoinedRoom({
            room: player.room,
            count: this._playerManager.size(player.room),
            message: message,
            players: [this._playerManager.getPlayerUpdate(player)]
        }, socket);
    };
    RequestManager.prototype.playerLeftRoom = function (cmd, socket) {
        var player = this._playerManager.get(socket.id) || false;
        if (player) {
            if (player.meta.context != Context_1.Context.START) {
                var message = player.name + " has abandoned the quest!";
                this._observer.playerLeftRoom({
                    room: player.room,
                    count: this._playerManager.size(player.room) - 1,
                    message: message,
                    players: [this._playerManager.getPlayerUpdate(player)]
                }, socket);
            }
            this._roomManager.unassignedRoom(socket.id, player.room);
            this._playerManager.remove(socket.id);
        }
    };
    RequestManager.prototype.chat = function (cmd, socket) {
        var player = this._playerManager.get(socket.id);
        this._observer.chat({
            room: player.room,
            count: this._playerManager.size(player.room),
            message: player.name + ": " + cmd
        }, socket);
    };
    RequestManager.prototype.fullRoom = function (id, socket) {
        this._observer.roomFull({
            id: id,
            type: 0,
            message: 'Unfortunately, all the game rooms are currently full. Please refresh and try again later.'
        }, socket);
    };
    return RequestManager;
}());
exports.RequestManager = RequestManager;


/***/ }),

/***/ "./src/server/managers/RoomManager.ts":
/*!********************************************!*\
  !*** ./src/server/managers/RoomManager.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RoomNames_1 = __webpack_require__(/*! ../../app/defaults/RoomNames */ "./src/app/defaults/RoomNames.ts");
var RoomManager = (function () {
    function RoomManager() {
        this._roomLimit = 10;
        this.rooms = new Map();
        for (var room in RoomNames_1.RoomNames) {
            this.rooms.set(room, new Array());
        }
    }
    Object.defineProperty(RoomManager.prototype, "roomLimit", {
        get: function () {
            return this._roomLimit;
        },
        enumerable: true,
        configurable: true
    });
    RoomManager.prototype.assignRoom = function (id) {
        var _this = this;
        var roomAssigned = false;
        var roomName = RoomNames_1.RoomNames.FULL;
        this.rooms.forEach(function (room, key) {
            if (!roomAssigned) {
                if (room.length < _this._roomLimit && key != RoomNames_1.RoomNames.FULL) {
                    room.push(id);
                    roomAssigned = true;
                    roomName = key;
                }
            }
        });
        return roomName;
    };
    RoomManager.prototype.unassignedRoom = function (id, roomName) {
        this.rooms.set(roomName, this.rooms.get(roomName).filter(function (pid) { return pid != id; }));
    };
    RoomManager.prototype.roomCount = function (name) {
        return this.rooms.get(name).length;
    };
    return RoomManager;
}());
exports.RoomManager = RoomManager;


/***/ }),

/***/ "./src/server/observer/Observer.ts":
/*!*****************************************!*\
  !*** ./src/server/observer/Observer.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observer = (function () {
    function Observer() {
    }
    Observer.prototype.global = function (obj, socket) {
        socket.broadcast.emit(JSON.stringify(obj));
    };
    Observer.prototype.clientStart = function (obj, socket) {
        socket.emit('client:start', obj);
    };
    Observer.prototype.notify = function (obj, socket) {
        socket.emit('client:command', obj);
    };
    Observer.prototype.playerJoinedRoom = function (obj, socket) {
        socket.to(obj.room).emit('room:joined', obj);
    };
    Observer.prototype.playerLeftRoom = function (obj, socket) {
        socket.to(obj.room).emit('room:left', obj);
    };
    Observer.prototype.roomMovement = function (obj, socket) {
        socket.to(obj.room).emit('room:movement', obj);
    };
    Observer.prototype.chat = function (obj, socket) {
        socket.to(obj.room).emit('room:chat', obj);
    };
    Observer.prototype.monsterSpawned = function (obj, socket) {
        socket.to(obj.room).emit('room:monster:spawned', obj);
    };
    Observer.prototype.monsterDefeated = function (obj, socket) {
        socket.to(obj.room).emit('room:monster:defeated', obj);
    };
    Observer.prototype.monsterEngaged = function (obj, socket) {
        socket.to(obj.room).emit('room:monster:engaged', obj);
    };
    Observer.prototype.roomFull = function (obj, socket) {
        socket.emit('error:full', obj);
    };
    Observer.prototype.invalidCommand = function (obj, socket) {
        socket.emit('error:invalid', obj);
    };
    Observer.prototype.endingValidationFail = function (obj, socket) {
        socket.emit('error:event:requirements', obj);
    };
    return Observer;
}());
exports.Observer = Observer;


/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PureParadise_1 = __webpack_require__(/*! ./PureParadise */ "./src/server/PureParadise.ts");
var express = __webpack_require__(/*! express */ "express");
var app = express();
var http = __webpack_require__(/*! http */ "http").createServer(app);
var port = process.env.PORT || 3000;
var io = __webpack_require__(/*! socket.io */ "socket.io")(http, {
    pingTimeout: 60000,
    pingInterval: 60000
});
var pureParadise = new PureParadise_1.PureParadise();
var routers = [
    pureParadise
];
io.on('connect', function (socket) {
    routers.forEach(function (obj) {
        if (obj['connect'] != undefined)
            obj.connect(socket);
    });
});
http.listen(port, function () {
    console.log("Listening on port " + port + "!");
});


/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ })

/******/ });