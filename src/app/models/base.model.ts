export class Base {
  id: number;
  uuid: string;
  creationDate: string;
  lastModifiedDate: string;

  constructor(data: { id: any; uuid: any; creationDate: any; lastModifiedDate: any}) {
    this.id = data.id;
    this.uuid = data.uuid;
    this.creationDate = data.creationDate;
    this.lastModifiedDate = data.lastModifiedDate;
  }
}
