import {Component, OnInit} from '@angular/core';
import {ExerciseService} from "../../services/exercise.service";
import {DefaultExercise} from "../../models/default-exercise.model";

@Component({
    selector: 'app-exercises',
    templateUrl: './exercises.page.html',
    styleUrls: ['./exercises.page.scss'],
})
export class ExercisesPage implements OnInit {
    private exercises: DefaultExercise[] = [];
    public results : DefaultExercise[] = [];

    constructor(private exerciseService: ExerciseService) {
    }

    ngOnInit() {
        this.exercises = this.exerciseService.getExercises
        this.results = [...this.exercises];
    }


    handleInput(event: any) {
        const query = event.target.value.toLowerCase();
        this.results = this.exercises.filter((d) => d.name != null ? d.name.toLowerCase().indexOf(query) > -1 : null);
    }
}
