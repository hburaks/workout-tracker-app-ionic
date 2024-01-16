import {Base} from "./base.model";
import {CustomExercise} from "./custom-exercise.model";

export class WorkoutTemplate extends Base {
  name: any;
  customExerciseList: CustomExercise[];

  constructor(data: { id: any; uuid: any; creationDate: any; lastModifiedDate: any; name: any; customExerciseList: any[] }) {
    super(data);
    this.name = data.name;
    this.customExerciseList = data.customExerciseList.map(exercise => new CustomExercise(exercise));
  }
}
