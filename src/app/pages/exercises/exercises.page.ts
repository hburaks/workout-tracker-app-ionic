import {Component, OnInit, ViewChild} from '@angular/core';
import {ExerciseService} from "../../services/exercise.service";
import {DefaultExercise} from "../../models/default-exercise.model";
import {MuscleGroupTypeEnum} from "../../enum/muscle-group-type-enum";
import {IonAccordionGroup} from "@ionic/angular";
import {EquipmentTypeEnum} from "../../enum/equipment-type-enum";

@Component({
    selector: 'app-exercises',
    templateUrl: './exercises.page.html',
    styleUrls: ['./exercises.page.scss'],
})
export class ExercisesPage implements OnInit {
    private exercises: DefaultExercise[] = [];
    public results: DefaultExercise[] = [];
    public muscleGroupTypeEnums: MuscleGroupTypeEnum[] = Object.values(MuscleGroupTypeEnum);
    public equipmentTypeEnums: EquipmentTypeEnum[] = Object.values(EquipmentTypeEnum);
    public isCardOpen: boolean = false;
    // @ts-ignore
    @ViewChild('accordionGroup', {static: true}) accordionGroup: IonAccordionGroup;

    toggleAccordion = () => {
        const nativeEl = this.accordionGroup;
        if (nativeEl.value === 'second') {
            nativeEl.value = undefined;
        } else {
            nativeEl.value = 'second';
        }
    };

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

    filterByPrimaryMuscle(event: MuscleGroupTypeEnum) {
        if (event == MuscleGroupTypeEnum.ANY) {
            this.results = this.exercises;
        } else {
            this.results = this.exercises.filter(d => d.dbExercise.primaryMuscles == event)
        }
        this.toggleAccordion();
    }

    filterByEquipmentType(event: EquipmentTypeEnum) {
        if (event == EquipmentTypeEnum.ANY) {
            this.results = this.exercises;
        } else {
            this.results = this.exercises.filter(d => d.dbExercise.equipment == event)
        }
        this.toggleAccordion();
    }

  toggleCard(){
      this.isCardOpen=!this.isCardOpen;
  }
    protected readonly MuscleGroupTypeEnum = MuscleGroupTypeEnum;
}
