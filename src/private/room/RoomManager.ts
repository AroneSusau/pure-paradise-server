import {RoomNames} from '../app/defaults/RoomNames.js'

export class RoomManager {

    private rooms: Map<string, Array<string>>
    private _roomLimit: number

    constructor(roomLimit: number) {
        this._roomLimit = roomLimit
        this.rooms = new Map<string, Array<string>>()

        for (let room in RoomNames) {
            this.rooms.set(room, new Array<string>())
        }
    }

    public assignRoom(id: string): string {
        let roomAssigned = false
        let roomName: string = RoomNames.FULL

        this.rooms.forEach((room, key) => {
            if (!roomAssigned) {
                if (room.length < this._roomLimit && key != RoomNames.FULL) {
                    room.push(id)
                    roomAssigned = true
                    roomName = key
                }
            }
        })
        return roomName
    }

    get roomLimit(): number {
        return this._roomLimit
    }

    public unassignedRoom(id: string, roomName: string) {
        this.rooms.set(roomName,
            this.rooms.get(roomName).filter(pid => pid != id))
    }

    public roomCount(name: string): number {
        return this.rooms.get(name).length
    }

}
