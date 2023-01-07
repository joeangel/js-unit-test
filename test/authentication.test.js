import {Authentication} from "../src/authentication";
import * as Otp from "../src/otp";
import {Profile} from "../src/profile";

jest.mock("../src/otp");
jest.mock("../src/profile");
describe('authenticate account is valid', function () {
    let authentication = new Authentication();

    beforeEach( function() {
        authentication = new Authentication();
    });

    it('should be valid', () => {
        GivenPassword("91");
        GivenToken("000000");
        ShouldBeValid('joey', '91000000');
    });

    it('should be invalid', () => {
        GivenPassword("91");
        GivenToken("000000");
        ShouldBeInvalid('joey', 'wrong password');
    });

    function GivenPassword(password) {
        Profile.mockImplementationOnce(() => {
            return {
                get_password: () => {
                    return password;
                }
            };
        });
    }

    function GivenToken(token) {
        Otp.get_token.mockReturnValueOnce(token);
    }

    function ShouldBeValid(account, password) {
        expect(authentication.is_valid(account, password)).toBe(true);
    }

    function ShouldBeInvalid(account, password) {
        expect(authentication.is_valid(account, password)).toBe(false);
    }
});