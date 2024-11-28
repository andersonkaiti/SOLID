import { INotification } from "./Interfaces/INotification";

export class User {
  protected notification: INotification;

  constructor(notification: INotification) {
    this.notification = notification;
  }

  handle() {
    this.notification.send();
  }
}
