import {Profile} from "./profile";
import * as otp from "./otp";

export class Authentication {
    is_valid(account, password) {
        const password_from_profile = this.getPassword(account);
        // const otp = new Otp();
        const token = this.getToken();
        console.log(`password:${password_from_profile}, token:${token}`);

        const valid_password = password_from_profile + token;
        if (valid_password === password) {
            return true;
        } else {
            return false;
        }
    }

    getToken() {
        return otp.get_token();
    }

    getPassword(account) {
        const profile = new Profile();
        const password_from_profile = profile.get_password(account);
        return password_from_profile;
    }
}