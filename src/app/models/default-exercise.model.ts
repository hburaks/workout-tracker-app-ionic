import {Base} from "./base.model";
import {DbExercise} from "./db-exercise.model";

export class DefaultExercise extends Base {
  name: string | null;
  note: string | null;
  rm1: number | null;
  dbExercise: DbExercise;

  constructor(data: { id: any; uuid: any; creationDate: any; lastModifiedDate: any; name: any; note: any; rm1: any; dbExercise: any }) {
    super(data);
    this.name = data.name;
    this.note = data.note;
    this.rm1 = data.rm1;
    this.dbExercise = data.dbExercise;
  }
}
