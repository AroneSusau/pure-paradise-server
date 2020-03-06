import {Venmark} from './maps/Venmark'
import {Silvos} from './maps/Silvos'
import {Tirera} from './maps/Tirera'
import {PureParadiseMap} from './maps/PureParadiseMap'
import {Defaults} from '../defaults/Defaults'
import {GameMap} from './GameMap'
import {MapIds} from '../defaults/MapIds'

const defaults = new Defaults()

const MapManager = {
    maps: new Map<MapIds, GameMap>()
}

MapManager.maps.set(MapIds.VEMARK, new Venmark(defaults))
MapManager.maps.set(MapIds.SILVOS, new Silvos(defaults))
MapManager.maps.set(MapIds.TIRERA, new Tirera(defaults))
MapManager.maps.set(MapIds.PURE_PARADISE, new PureParadiseMap(defaults))

export {MapManager}
