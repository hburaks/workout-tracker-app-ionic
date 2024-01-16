import {Base} from "./base.model";
import {SetClass} from "./set-class";
import {DefaultExercise} from "./default-exercise.model";

export class CustomExercise extends Base {
    name: string | null;
    restTime: number | null;
    volume: number | null;
    note: string | null;
    sets: SetClass[];
    defaultExercise: DefaultExercise;

    constructor(data: { id: any; uuid: any; creationDate: any; lastModifiedDate: any; name: any; restTime: any; volume: any; note: any; sets: SetClass[]; defaultExercise: DefaultExercise }) {
        super(data);
        this.name = data.name;
        this.restTime = data.restTime;
        this.volume = data.volume;
        this.note = data.note;
        this.sets = data.sets.map(set => new SetClass(set));
        this.defaultExercise = new DefaultExercise(data.defaultExercise);
    }

    bestSet: SetClass | null = null;
}
