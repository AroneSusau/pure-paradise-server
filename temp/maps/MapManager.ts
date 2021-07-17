import { Venmark } from './Venmark'
import { Silvos } from './Silvos'
import { Tirera } from './Tirera'
import { PureParadiseMap } from './PureParadiseMap'
import { GameMap } from './GameMap'
import { AreaNames } from './AreaNames'

const MapManager = {
    maps: new Map<AreaNames, GameMap>()
}

MapManager.maps.set(AreaNames.VENMARK, new Venmark())
MapManager.maps.set(AreaNames.SILVOS, new Silvos())
MapManager.maps.set(AreaNames.TIRERA, new Tirera())
MapManager.maps.set(AreaNames.PURE_PARADISE, new PureParadiseMap())

export { MapManager }
