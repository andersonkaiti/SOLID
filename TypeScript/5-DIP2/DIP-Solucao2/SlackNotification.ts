import { INotification } from "./Interfaces/INotification";

export class SlackNotification implements INotification {
  send(): void {
    console.log("Slack - Injection notification");
  }
}
