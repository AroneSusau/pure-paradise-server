import {Vemark} from './maps/Vemark.js'
import {Silvos} from './maps/Silvos.js'
import {Tirera} from './maps/Tirera.js'
import {PureParadiseMap} from './maps/PureParadiseMap.js'
import {Defaults} from '../defaults/Defaults.js'
import {GameMap} from './GameMap.js'
import {MapIds} from '../defaults/MapIds.js'

const defaults = new Defaults()

const MapManager = {
    maps: new Map<MapIds, GameMap>()
}

MapManager.maps.set(MapIds.VEMARK, new Vemark(defaults))
MapManager.maps.set(MapIds.SILVOS, new Silvos(defaults))
MapManager.maps.set(MapIds.TIRERA, new Tirera(defaults))
MapManager.maps.set(MapIds.PURE_PARADISE, new PureParadiseMap(defaults))

export {MapManager}
