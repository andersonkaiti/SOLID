import { IObject } from "./Interfaces/IObject";
import { ExtrovertedObject } from "./ExtrovertedObject";
import { OptimisticObject } from "./OptimisticObject";
import { PersonalityObject } from "./PersonalityObject";
import { PessimisticObject } from "./PessimisticObject";

const personalityObject = new PersonalityObject();
const pessimisticObject = new PessimisticObject();
const optimisticObject = new OptimisticObject();
const extrovertedObject = new ExtrovertedObject();

console.log("1");
makeSpeak1(personalityObject);
makeSpeak2(pessimisticObject);
makeSpeak3(optimisticObject);
makeSpeak4(extrovertedObject);

function makeSpeak1(personalityObject: PersonalityObject) {
  console.log(personalityObject.speak());
}

function makeSpeak2(pessimisticObject: PessimisticObject) {
  console.log(pessimisticObject.speak());
}

function makeSpeak3(optimisticObject: OptimisticObject) {
  console.log(optimisticObject.speak());
}

function makeSpeak4(extrovertedObject: ExtrovertedObject) {
  console.log(extrovertedObject.speak());
}

console.log("\n2");
makeSpeak1(personalityObject);
makeSpeak2(pessimisticObject);
makeSpeak3(optimisticObject);
makeSpeak4(extrovertedObject);

function makeSpeak(personalityObject: PersonalityObject) {
  console.log(personalityObject.speak());
}

const personalities: IObject[] = [];

console.log("\n3");
personalities.push(personalityObject);
personalities.push(pessimisticObject);
personalities.push(optimisticObject);
personalities.push(extrovertedObject);

personalities.forEach(makeSpeak);
