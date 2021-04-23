import {sum} from '../sum';

xdescribe("test sum", () => {
    it('should be 3', function () {
        expect(sum(1, 2)).toBe(3);
    })
    it('should be 5', function () {
        expect(sum(4, 1)).toBe(5);
    })
    it('should be 8', function () {
        expect(sum(3, 5)).toBe(8);
    });
});
