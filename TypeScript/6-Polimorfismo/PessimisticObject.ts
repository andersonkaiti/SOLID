import { PersonalityObject } from "./PersonalityObject";

export class PessimisticObject extends PersonalityObject {
  speak(): string {
    return "The glass is half empty.";
  }
}
