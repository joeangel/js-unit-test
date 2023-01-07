
import {Holiday} from "../src/Holyday";
describe('say hello', function () {
    let holiday = new Holiday();

    beforeEach( function() {
        holiday = new Holiday();
    });

    describe('today is xmas', function () {
        it('12/25 should succeed', function () {
            GivenToday(12, 25); // hint: xmas is 12/25
            SayHelloShouldBe("Merry Xmas");
        });
        it('12/24 should succeed', function () {
            GivenToday(12, 24);
            SayHelloShouldBe("Merry Xmas");
        });
    });

    describe('today is not xmas', function () {
        it('11/24 should fail', function () {
            GivenToday(11, 24);
            SayHelloShouldBe("Today is not Xmas");
        });
        it('12/23 should fail', function () {
            GivenToday(12, 23);
            SayHelloShouldBe("Today is not Xmas");
        });
        it('1/24 should fail', function () {
            GivenToday(1, 24);
            SayHelloShouldBe("Today is not Xmas");
        });
    });

    function GivenToday(month, date) {
        const fakeGetToday = () => {
            let today = new Date();
            today.setMonth(month - 1);
            today.setDate(date);
            return today;
        };
        holiday.getToday = fakeGetToday;
    }

    function SayHelloShouldBe(expected) {
        const result = holiday.sayHello();
        expect(result).toBe(expected);
    }
});
