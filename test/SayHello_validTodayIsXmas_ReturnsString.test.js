
import {Holiday} from "../src/Holyday";
describe('say hello', function () {
    it('today is holiday', function () {
        let holiday = HolidayForTest(12, 25);
        const expected = "Merry Xmas";

        let result = holiday.sayHello();

        expect(result).toBe(expected);
    });
    it('today is not holiday', function () {
        let holiday = HolidayForTest(12,24)
        const expected = "Today is not Xmas";

        let result = holiday.sayHello();

        expect(result).toBe(expected);
    });

    function HolidayForTest(month, date) {
        let holiday = new Holiday();
        const fakeGetToday = () => {
            let today = new Date();
            today.setMonth(month - 1);
            today.setDate(date);
            return today;
        };
        holiday.getToday = fakeGetToday;
        return holiday;
    }
});
