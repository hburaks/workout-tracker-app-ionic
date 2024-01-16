export class DbExercise {
  name: string;
  force: string;
  level: string;
  mechanic: string;
  equipment: string;
  primaryMuscles: string;
  secondaryMuscles: string;
  instructions: string;
  category: string;
  images: string;
  id: string;

    constructor(data: { name: any; force: any; level: any; mechanic: any; equipment: any; primaryMuscles: any; secondaryMuscles: any; instructions: any; category: any; images: any; id: any}) {
    this.name = data.name;
    this.force = data.force;
    this.level = data.level;
    this.mechanic = data.mechanic;
    this.equipment = data.equipment;
    this.primaryMuscles = data.primaryMuscles;
    this.secondaryMuscles = data.secondaryMuscles;
    this.instructions = data.instructions;
    this.category = data.category;
    this.images = data.images;
    this.id = data.id;
  }
}
