import {Component, OnInit} from '@angular/core';
import {WorkoutTemplateService} from "../../services/workout-template.service";
import {WorkoutTemplate} from "../../models/workout-template.model";

@Component({
  selector: 'app-start-workout',
  templateUrl: './start-workout.page.html',
  styleUrls: ['./start-workout.page.scss'],
})
export class StartWorkoutPage implements OnInit {
  workoutTemplates: WorkoutTemplate[] | undefined;
  constructor(private workoutTemplateService: WorkoutTemplateService) { }

  ngOnInit() {
    this.workoutTemplates = this.workoutTemplateService.mockWorkoutTemplates;
  }

  createTemplate() {

  }
}
