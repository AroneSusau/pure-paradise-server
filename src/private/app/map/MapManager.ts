import {Venmark} from './maps/Venmark.js'
import {Silvos} from './maps/Silvos.js'
import {Tirera} from './maps/Tirera.js'
import {PureParadiseMap} from './maps/PureParadiseMap.js'

const MapManager = {

    length: 3,

    venmark: new Venmark(0, 0, this.length),
    tirera: new Tirera(1, 0, this.length),
    silvos: new Silvos(0, 1, this.length),
    pureParadise: new PureParadiseMap(1, 1, this.length),

}

export {MapManager}
