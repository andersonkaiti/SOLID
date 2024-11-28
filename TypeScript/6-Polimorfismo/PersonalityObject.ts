import { IObject } from "./Interfaces/IObject";

export class PersonalityObject implements IObject {
  speak(): string {
    return "I am an object.";
  }
}
