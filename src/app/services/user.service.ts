import {Injectable} from '@angular/core';
import {User} from "../models/user.model";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    _userData?: User;
    get userData(): User | null {
        if (this._userData) {
            return this._userData;
        } else {
            return null;
        }
    }

    constructor() {}

}
