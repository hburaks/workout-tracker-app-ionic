import {Base} from "./base.model";
import {DefaultExercise} from "./default-exercise.model";

export class WorkoutExercise extends Base {
  name: string;
  description: string;
  defaultExercise: DefaultExercise;

  constructor(data: { id: any; uuid: any; creationDate: any; lastModifiedDate: any; name: string; description: string; defaultExercise: any }) {
    super(data);
    this.name = data.name;
    this.description = data.description;
    this.defaultExercise = new DefaultExercise(data.defaultExercise);
  }
}
