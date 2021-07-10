import {Socket} from 'socket.io'
import IController from './controller/IController';

import ConnectionController from './controller/ConnectionController'
import MovementController from './controller/MovementController'
import GlobalController from './controller/GlobalController'

import { Logger } from './util/Logger';
import { Route } from './util/Route';
import { IDatabase } from './data/IDatabase';
import { LocalDB } from './data/LocalDB';

export class PureParadise {
    
    private routes: Array<Route> = []
    private database: IDatabase = new LocalDB()
    
    /**
     * Add Controllers here to include more routes.
     * 
     * Route endpoints have the following form, {domain}:{controller}:{action}
     * 
     * domain: defines the intended target, e.g client, server, etc
     * controller: target controller or game engine/manager e.g movement, inventory, fight, etc 
     * action: command entered or event name
     * 
     * The route action corresponds to a controller class method, so when a specific
     * endpoint is called, it will execute the method with the same name.
     */
    private controllers: Array<IController> = [
        new ConnectionController(this.database),
        new MovementController(this.database),
        new GlobalController(this.database),
    ];

    /**
     * Iterate through Controllers and build all routes.
     */
    constructor() {
        this.controllers.forEach((controller) => {
            Object
                .getOwnPropertyNames(controller.constructor.prototype)
                .filter(action => action != "constructor")
                .forEach(action => this.routes.push(new Route(controller, action)))
        })
    }

    /**
     * Configure all route endpoints and instantiate client object on client connection.
     */
    public connect(socket: Socket) {
        this.controllers.forEach(controller => this.routes
            .filter(route => route.source == controller.source)
            .forEach(route => socket.on(
                route.endpoint, 
                (args: any[]) => controller[route.action](args, socket))))

        socket.onAny((...args) => this.default(args, socket))
        socket.on('disconnect', (...args) => this.disconnect(args, socket))
    }

    /**
     * Disconnect client and player information.
     */
    public disconnect(args: any[], socket: Socket) {
        this.database.unsetClient(socket.id)
        socket.broadcast.emit(`client:connection:leave`, { id: socket.id })
        Logger.request(`Client: ${socket.id} - Route: disconnect`)
    }

    /**
     * Default endpoint with general logging.
     */
    public default(args: any[], socket: Socket) {
        socket.eventNames().includes(args[0]) ?
            this.log(args, socket) :
            this.error(args, socket)
    }

    /**
     * Generic logging message.
     */
    public log(args: any[], socket: Socket) {
        Logger.request(`Client: ${socket.id} - Route: ${args[0]} - Command: "${args[1]}"`)
    }

    /**
     * Error logging message.
     */
    public error(args: any[], socket: Socket) {
        Logger.error(`Client: ${socket.id} - Route: ${args[0]} - Command: "${args[1]}"`)
        socket.emit('error', `Command ${args[1]} does not exist.`)
    }
}
