import {Base} from "./base.model";
import {Workout} from "./workout.model";
import {CustomExercise} from "./custom-exercise.model";
import {WorkoutTemplate} from "./workout-template.model";
import {WorkoutExercise} from "./workout-exercise.model";

export class Profile extends Base {
    workoutList: Workout[];
    customExerciseList: CustomExercise[];
    workoutExerciseList: WorkoutExercise[];
    workoutTemplateList: WorkoutTemplate[];

    constructor(data: { id: any; uuid: any; creationDate: any; lastModifiedDate: any; workoutList: any[]; customExerciseList: any[]; workoutExerciseList: any[]; workoutTemplateList: any[] }) {
        super(data);
        this.workoutList = data.workoutList.map(workout => new Workout(workout));
        this.customExerciseList = data.customExerciseList.map(exercise => new CustomExercise(exercise));
        this.workoutExerciseList = data.workoutExerciseList.map(workout => new WorkoutExercise(workout));
        this.workoutTemplateList = data.workoutTemplateList.map(template => new WorkoutTemplate(template));
    }
}
