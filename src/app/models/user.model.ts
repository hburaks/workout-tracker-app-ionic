import {Role} from "./role.model";
import {Base} from "./base.model";
import {Profile} from "./profile.model";

export class User extends Base {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  photoLink: string;
  profile: Profile;
  roles: Role[];
  enable: boolean;

  constructor(data: { id: any; uuid: any; creationDate: any; lastModifiedDate: any; username: string; email: string; firstName: string; lastName: string; photoLink: string; profile: any; roles: Role[]; enable: boolean }) {
    super(data);
    this.username = data.username;
    this.email = data.email;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.photoLink = data.photoLink;
    this.profile = new Profile(data.profile);
    this.roles = data.roles.map(roleData => new Role(roleData));
    this.enable = data.enable;
  }
}
