import { PersonalityObject } from "./PersonalityObject";

export class OptimisticObject extends PersonalityObject {
  speak(): string {
    return "The glass is half full.";
  }
}
