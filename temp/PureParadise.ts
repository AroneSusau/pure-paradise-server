import {Socket} from 'socket.io'
import IController from './controller/IController';
import MovementController from './controller/MovementController'
import Route from './util/Route';

export class PureParadise {
    
    private routes: Array<Route> = []
    
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
        new MovementController()
    ];

    constructor() {
        this.controllers.forEach((controller) => {
            this.routes = Object
                .getOwnPropertyNames(controller.constructor.prototype)
                .filter(action => action != "constructor")
                .map(action => new Route(controller, action))
        })
    }

    public connect(socket: Socket) {
        this.controllers.forEach(controller => this.routes
            .filter(route => route.source == controller.source)
            .forEach(route => socket.on(
                route.endpoint, 
                (args: any[]) => controller[route.action](args, socket))))

        socket.onAny((...args) => this.any(args, socket))
    }

    public any(args: any[], socket: Socket) {
        console.log(`\x1b[1m\x1b[35m[REQUEST]\x1b[0m User: ${socket.id} - Route: ${args[0]} - Command: "${args[1]}" [${new Date().toUTCString()}]`)
    }
}
