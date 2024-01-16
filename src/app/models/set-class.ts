import {Base} from "./base.model";

export class SetClass extends Base {
  weight: number;
  reps: number;
  setTypeEnum: string;
  weightUnitTypeEnum: string;

  constructor(data: { id: any; uuid: any; creationDate: any; lastModifiedDate: any; weight: any; reps: any; setTypeEnum: any; weightUnitTypeEnum: any }) {
    super(data);
    this.weight = data.weight;
    this.reps = data.reps;
    this.setTypeEnum = data.setTypeEnum;
    this.weightUnitTypeEnum = data.weightUnitTypeEnum;
  }
}
