import {WorkoutService} from '../../services/workout.service';
import {Component, OnInit} from '@angular/core';
import {formatDate} from "@angular/common";
import {Workout} from "../../models/workout.model";
import {SetClassService} from "../../services/set-class.service";
import {SetClass} from "../../models/set-class";
import {CustomExercise} from "../../models/custom-exercise.model";

@Component({
    selector: 'app-history',
    templateUrl: './history.page.html',
    styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {


    loadedWorkouts: Workout[] = [];
    selectedWorkout?: Workout;
    isWorkoutSelected: boolean = false;


    constructor(private workoutService: WorkoutService,
                private setClassService: SetClassService) {
    }

    ngOnInit() {
        this.loadedWorkouts = this.workoutService.workouts;
        this.loadedWorkouts.forEach(workout =>{
            this.calculate1RMMaxSet(workout.customExerciseList)
        })
    }

    selectWorkout(index: number) {
        this.selectedWorkout = this.loadedWorkouts[index];
        this.isWorkoutSelected = true;
    }

    calculate1RMMaxSet( customExerciseList: CustomExercise[]) {
        customExerciseList.forEach(customExercise => customExercise.bestSet = this.setClassService.calculate1RMMaxSet(customExercise.sets))
    }

    protected readonly formatDate = formatDate;
    protected readonly SetClass = SetClass;

}
