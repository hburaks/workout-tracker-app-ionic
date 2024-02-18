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
  public defaultExerciseResults: DefaultExercise[] = [];
  public muscleGroupTypeEnums: MuscleGroupTypeEnum[] = Object.values(MuscleGroupTypeEnum);
  public equipmentTypeEnums: EquipmentTypeEnum[] = Object.values(EquipmentTypeEnum);
  public isCardOpen: boolean = false;
  public selectedDefaultExercise: DefaultExercise | null = null;
  public isSegmentAboutOpen: boolean = true;
  public isSegmentHistoryOpen: boolean = false;
  public isSegmentRecordOpen: boolean = false;
  public instructions: string[] = [];
  public filterState = {
    muscleGroupTypeEnum: MuscleGroupTypeEnum.ANY,
    equipmentTypeEnums: EquipmentTypeEnum.ANY
  }

  // @ts-ignore
  @ViewChild('accordionGroup', {static: true}) accordionGroup: IonAccordionGroup;

  closeAccordion = () => {
    const nativeEl = this.accordionGroup;
    if (nativeEl.value !== undefined) {
      nativeEl.value = undefined;
    }
  };

  constructor(private exerciseService: ExerciseService) {
  }

  ngOnInit() {
    this.exercises = this.exerciseService.getExercises
    this.defaultExerciseResults = [...this.exercises];
  }


  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.defaultExerciseResults = this.exercises.filter((d) => d.name != null ? d.name.toLowerCase().indexOf(query) > -1 : null);
  }

  filterByPrimaryMuscle(event: MuscleGroupTypeEnum) {
    this.filterState.muscleGroupTypeEnum = event;
    this.filterExercises();
    this.closeAccordion();
  }

  filterByEquipmentType(event: EquipmentTypeEnum) {
    this.filterState.equipmentTypeEnums = event;
    this.filterExercises();
    this.closeAccordion();
  }

  filterExercises() {
    if (this.filterState.muscleGroupTypeEnum == MuscleGroupTypeEnum.ANY && this.filterState.equipmentTypeEnums == EquipmentTypeEnum.ANY) {
      this.defaultExerciseResults = this.exercises;
    } else if (this.filterState.muscleGroupTypeEnum == MuscleGroupTypeEnum.ANY && this.filterState.equipmentTypeEnums != EquipmentTypeEnum.ANY) {
      this.defaultExerciseResults = this.exercises.filter(d => d.dbExercise.equipment == this.filterState.equipmentTypeEnums)
    } else if (this.filterState.muscleGroupTypeEnum != MuscleGroupTypeEnum.ANY && this.filterState.equipmentTypeEnums == EquipmentTypeEnum.ANY) {
      this.defaultExerciseResults = this.exercises.filter(d => d.dbExercise.primaryMuscles == this.filterState.muscleGroupTypeEnum)
    } else {
      this.defaultExerciseResults = this.exercises.filter(d => d.dbExercise.primaryMuscles == this.filterState.muscleGroupTypeEnum && d.dbExercise.equipment == this.filterState.equipmentTypeEnums)
    }
  }

  openCard() {
    this.isCardOpen = !this.isCardOpen;
  }

  closeCard() {
    this.isCardOpen = false;
  }

  selectCard(defaultExercise: DefaultExercise) {
    this.selectedDefaultExercise = defaultExercise;
    this.instructions = defaultExercise.dbExercise.instructions.split(".,")
    this.isCardOpen = !this.isCardOpen;
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }

  selectSegment(segment: string) {
    if (segment == "about") {
      this.isSegmentRecordOpen = false;
      this.isSegmentHistoryOpen = false;
      this.isSegmentAboutOpen = true;
    }
    if (segment == "history") {
      this.isSegmentAboutOpen = false;
      this.isSegmentRecordOpen = false;
      this.isSegmentHistoryOpen = true;
    }
    if (segment == "records") {
      this.isSegmentHistoryOpen = false;
      this.isSegmentAboutOpen = false;
      this.isSegmentRecordOpen = true;
    }
  }

  protected readonly MuscleGroupTypeEnum = MuscleGroupTypeEnum;
}
