import { Notification } from "./Notification";
import { User } from "./User";

const notification = new Notification();

const command = new User(notification);
command.handle();
