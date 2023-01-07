import {Authentication} from "../src/authentication";
import * as Otp from "../src/otp";
import {Profile} from "../src/profile";

jest.mock("../src/otp");
jest.mock("../src/profile");
describe('authenticate account is valid', function () {
    it('should be valid', () => {
        let authentication = new Authentication();
        const expected = true;

        Profile.mockImplementationOnce(() => {
            return {
                get_password: () => {
                    return "91";
                }
            };
        });
        Otp.get_token.mockReturnValueOnce('000000');
        let result = authentication.is_valid('joey', '91000000');

        expect(result).toBe(expected);
    });
});