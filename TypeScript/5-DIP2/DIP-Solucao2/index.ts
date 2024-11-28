import { Notification } from "./Notification";
import { SlackNotification } from "./SlackNotification";
import { User } from "./User";

const notification = new Notification();

const command = new User(notification);
command.handle();

const slackNotification = new SlackNotification();

const slackCommand = new User(slackNotification);
slackCommand.handle();
