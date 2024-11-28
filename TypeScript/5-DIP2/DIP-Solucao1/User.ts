import { Notification } from "./Notification";

export class User {
  protected notification: Notification;

  constructor(notification: Notification) {
    this.notification = notification;
  }

  handle() {
    this.notification.send();
  }
}
