import {Player} from '../character/Player.js'
import {BattleEngine} from '../battle/BattleEngine.js'
import {MapEngine} from '../map/MapEngine.js'
import {EventEngine} from '../event/EventEngine.js'

export class GameEngine {

    private player: Player
    private battleEngine: BattleEngine
    private mapEngine: MapEngine
    private eventEngine: EventEngine

    constructor() {
        this.player = new Player()
        this.battleEngine = new BattleEngine()
        this.mapEngine = new MapEngine()
        this.eventEngine = new EventEngine()
    }

    public start(): void {

    }

    public tick(action: String): void {

    }

}
