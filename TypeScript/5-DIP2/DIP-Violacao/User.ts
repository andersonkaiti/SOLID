import { Notification } from "./Notification";

export class User {
  handle() {
    const notification = new Notification();
    notification.send();
  }
}
