
import {Holiday} from "../src/Holyday";
describe('say hello', function () {
    it('today is holiday', function () {
        let holiday = makeHoliday();
        const expected = "Merry Xmas";
        let todayIsHoliday = holiday.sayHello();
        expect(todayIsHoliday).toBe(expected);
    });
    it('today is not holiday', function () {
        let holiday = makeHoliday()
        const expected = "Today is not Xmas";
        let todayIsHoliday = holiday.sayHello();
        expect(todayIsHoliday).toBe(expected);
    });

    function makeHoliday() {
        return new Holiday();
    }
});
