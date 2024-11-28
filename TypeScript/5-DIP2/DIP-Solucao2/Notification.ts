import { INotification } from "./Interfaces/INotification";

export class Notification implements INotification {
  send(): void {
    console.log("Injection notification");
  }
}
