import {Base} from "./base.model";
import {CustomExercise} from "./custom-exercise.model";
import {WorkoutTemplate} from "./workout-template.model";

export class Workout extends Base {
  durationInSecond: number | null;
  volume: number | null;
  startDate: string | null;
  endDate: string | null;
  customExerciseList: CustomExercise[];
  workoutTemplate: WorkoutTemplate;

  constructor(data: { id: any; uuid: any; creationDate: any; lastModifiedDate: any; durationInSecond: any; volume: any; startDate: string; endDate: string; customExerciseList: any[]; workoutTemplate: any }) {
    super(data);
    this.durationInSecond = data.durationInSecond;
    this.volume = data.volume;
    this.startDate = data.startDate;
    this.endDate = data.endDate;
    this.customExerciseList = data.customExerciseList.map((exercise: any) => new CustomExercise(exercise));
    this.workoutTemplate = new WorkoutTemplate(data.workoutTemplate);
  }
}
