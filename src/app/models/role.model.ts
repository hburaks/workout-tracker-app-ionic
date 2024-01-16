import {Base} from "./base.model";

export class Role extends Base {
  name: string;
  description: string | null;

  constructor(data: { id: any; uuid: any; creationDate: any; lastModifiedDate: any; name: string; description: string | null }) {
    super(data);
    this.name = data.name;
    this.description = data.description;
  }
}
