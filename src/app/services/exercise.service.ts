import {Injectable} from '@angular/core';
import {DefaultExercise} from "../models/default-exercise.model";

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  get getExercises(): DefaultExercise[] {
    return [...this._mockExercises];
  }

  getExercise(index: number): DefaultExercise {
    return {...this._mockExercises[index]};
  }

  private _mockExercises: DefaultExercise[] = [
    {
      "name": "3/4 Sit-Up",
      "id": 1,
      "uuid": "5c195c6e-bd21-498b-9fae-2424d6e0135a",
      "creationDate": "2024-01-07T11:36:59.646+00:00",
      "lastModifiedDate": "2024-01-07T11:36:59.646+00:00",
      "note": null,
      "rm1": 150,
      "dbExercise": {
        "name": "3/4 Sit-Up",
        "force": "pull",
        "level": "beginner",
        "mechanic": "compound",
        "equipment": "body only",
        "primaryMuscles": "abdominals",
        "secondaryMuscles": "",
        "instructions": "Lie down on the floor and secure your feet. Your legs should be bent at the knees.,Place your hands behind or to the side of your head. You will begin with your back on the ground. This will be your starting position.,Flex your hips and spine to raise your torso toward your knees.,At the top of the contraction your torso should be perpendicular to the ground. Reverse the motion, going only Â¾ of the way down.,Repeat for the recommended amount of repetitions.",
        "category": "strength",
        "images": "3_4_Sit-Up/0.jpg,3_4_Sit-Up/1.jpg",
        "id": "3_4_Sit-Up"
      }
    },
    {
      "name": "90/90 Hamstring",
      "id": 2,
      "uuid": "0dec5efd-fc54-4dfa-a4e1-ac31c1e3f646",
      "creationDate": "2024-01-07T11:36:59.649+00:00",
      "lastModifiedDate": "2024-01-07T11:36:59.649+00:00",
      "note": null,
      "rm1": null,
      "dbExercise": {
        "name": "90/90 Hamstring",
        "force": "push",
        "level": "beginner",
        "mechanic": "",
        "equipment": "body only",
        "primaryMuscles": "hamstrings",
        "secondaryMuscles": "calves",
        "instructions": "Lie on your back, with one leg extended straight out.,With the other leg, bend the hip and knee to 90 degrees. You may brace your leg with your hands if necessary. This will be your starting position.,Extend your leg straight into the air, pausing briefly at the top. Return the leg to the starting position.,Repeat for 10-20 repetitions, and then switch to the other leg.",
        "category": "stretching",
        "images": "90_90_Hamstring/0.jpg,90_90_Hamstring/1.jpg",
        "id": "90_90_Hamstring"
      }
    },
    {
      "name": "Ab Crunch Machine",
      "id": 3,
      "uuid": "6c4e48e3-5527-4408-bdcf-a0b726e71c74",
      "creationDate": "2024-01-07T11:36:59.650+00:00",
      "lastModifiedDate": "2024-01-07T11:36:59.650+00:00",
      "note": null,
      "rm1": null,
      "dbExercise": {
        "name": "Ab Crunch Machine",
        "force": "pull",
        "level": "intermediate",
        "mechanic": "isolation",
        "equipment": "machine",
        "primaryMuscles": "abdominals",
        "secondaryMuscles": "",
        "instructions": "Select a light resistance and sit down on the ab machine placing your feet under the pads provided and grabbing the top handles. Your arms should be bent at a 90 degree angle as you rest the triceps on the pads provided. This will be your starting position.,At the same time, begin to lift the legs up as you crunch your upper torso. Breathe out as you perform this movement. Tip: Be sure to use a slow and controlled motion. Concentrate on using your abs to move the weight while relaxing your legs and feet.,After a second pause, slowly return to the starting position as you breathe in.,Repeat the movement for the prescribed amount of repetitions.",
        "category": "strength",
        "images": "Ab_Crunch_Machine/0.jpg,Ab_Crunch_Machine/1.jpg",
        "id": "Ab_Crunch_Machine"
      }
    },
    {
      "name": "Ab Roller",
      "id": 4,
      "uuid": "ad34f516-b929-4e0e-bdd8-cc2efda26336",
      "creationDate": "2024-01-07T11:36:59.651+00:00",
      "lastModifiedDate": "2024-01-07T11:36:59.651+00:00",
      "note": null,
      "rm1": null,
      "dbExercise": {
        "name": "Ab Roller",
        "force": "pull",
        "level": "intermediate",
        "mechanic": "compound",
        "equipment": "other",
        "primaryMuscles": "abdominals",
        "secondaryMuscles": "shoulders",
        "instructions": "Hold the Ab Roller with both hands and kneel on the floor.,Now place the ab roller on the floor in front of you so that you are on all your hands and knees (as in a kneeling push up position). This will be your starting position.,Slowly roll the ab roller straight forward, stretching your body into a straight position. Tip: Go down as far as you can without touching the floor with your body. Breathe in during this portion of the movement.,After a pause at the stretched position, start pulling yourself back to the starting position as you breathe out. Tip: Go slowly and keep your abs tight at all times.",
        "category": "strength",
        "images": "Ab_Roller/0.jpg,Ab_Roller/1.jpg",
        "id": "Ab_Roller"
      }
    }
  ]


  constructor() {
  }
}
