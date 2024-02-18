import {Injectable} from '@angular/core';
import {WorkoutTemplate} from "../models/workout-template.model";

@Injectable({
  providedIn: 'root'
})
export class WorkoutTemplateService {
  private _mockWorkoutTemplate: WorkoutTemplate = {
    "id": 1,
    "uuid": "931ce794-7ac3-49b3-822d-4612b57dfa44",
    "creationDate": "2024-01-07T11:44:06.033+00:00",
    "lastModifiedDate": "2024-01-07T11:44:06.098+00:00",
    "name": "Pull Workout",
    "customExerciseList": [{
      "id": 7,
      "uuid": "454c6edc-4fbd-44cf-abb1-0e613fa74e2b",
      "creationDate": "2024-01-07T12:23:33.019+00:00",
      "lastModifiedDate": "2024-01-07T12:23:33.053+00:00",
      "name": null,
      "volume": 190,
      "note": null,
      "restTime": 95,
      "bestSet": null,
      "sets": [
        {
          "id": 7,
          "uuid": "f86e667c-ae17-496c-890c-8abfb5fdc299",
          "creationDate": "2024-01-07T12:23:33.022+00:00",
          "lastModifiedDate": "2024-01-07T12:23:33.022+00:00",
          "weight": 35.0,
          "reps": 12,
          "setTypeEnum": "REGULAR",
          "weightUnitTypeEnum": "LB"
        }
      ],
      "defaultExercise": {
        "id": 5,
        "uuid": "6b24978b-4c19-48f4-be88-2d69fb6c7ee1",
        "creationDate": "2024-01-07T11:36:59.652+00:00",
        "lastModifiedDate": "2024-01-07T12:23:33.048+00:00",
        "name": "Adductor",
        "note": "I am a general note",
        "rm1": 50,
        "dbExercise": {
          "name": "Adductor",
          "force": "static",
          "level": "intermediate",
          "mechanic": "isolation",
          "equipment": "foam roll",
          "primaryMuscles": "adductors",
          "secondaryMuscles": "",
          "instructions": "Lie face down with one leg on a foam roll.,Rotate the leg so that the foam roll contacts against your inner thigh. Shift as much weight onto the foam roll as can be tolerated.,While trying to relax the muscles if the inner thigh, roll over the foam between your hip and knee, holding points of tension for 10-30 seconds. Repeat with the other leg.",
          "category": "stretching",
          "images": "Adductor/0.jpg,Adductor/1.jpg",
          "id": "Adductor"
        }
      }
    }]
  };
  private _mockWorkoutTemplates: WorkoutTemplate[] = [this._mockWorkoutTemplate, this._mockWorkoutTemplate];


  get mockWorkoutTemplates(): WorkoutTemplate[] {
    return [...this._mockWorkoutTemplates];
  }

  constructor() {
  }
}