import {getPercents} from "../getPercents";

describe("Get percent from number test", () => {
    it('all of these percent of numbers should be pass', function () {
        expect(getPercents(15,60)).toBe(9);
        expect(getPercents(10,80)).toBe(8);
        expect(getPercents(33,33)).toBe(10.89);
        expect(getPercents(13,33.3)).toBe(4.329);
        expect(getPercents(0,999)).toBe(0);
        expect(getPercents(-15,60)).toBeUndefined();
    });
});