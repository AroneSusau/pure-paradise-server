import {Point} from '../../../../src/private/app/map/Point.js'

describe("Point", () => {

    it('should return a point', function () {
        const point = new Point(19,0, 20)

        expect(point.index).toBe(19)
    })

})
