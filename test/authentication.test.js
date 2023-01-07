import {Authentication} from "../src/authentication";

describe('authenticate account is valid', function () {
    let authentication = new Authentication();

    beforeEach( function () {
        authentication = new Authentication();
    });

    it('should be valid', () => {
        AuthenticationForTest();
        const expected = true;

        let result = authentication.is_valid('joey', '91000000');

        expect(result).toBe(expected);
    });

    function AuthenticationForTest() {
        authentication.getPassword = (account) => {
            if (account === 'joey') return '91';
            return '';
        };
        authentication.getToken = () => '000000';
    }
});