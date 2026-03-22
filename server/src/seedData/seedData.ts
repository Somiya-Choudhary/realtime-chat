import { User } from '../domains/User';
import { Room } from '../domains/Room';
import { Message } from '../domains/Message';

const Users: User[] = [
    new User('1','Luffy', 'luffy@strawhatcrew.com','luffy'),
    new User('2','Zoro', 'zoro@strawhatcrew.com','zoro'),
    new User('3','Nami', 'nami@strawhatcrew.com', 'nami'),
    new User('4','Usopp', 'usopp@strawhatcrew.com', 'usopp'),
    new User('5','Sanji', 'sanji@strawhatcrew.com', 'sanji'),
    new User('6','Chopper', 'chopper@strawhatcrew.com', 'chopper'),
    new User('7','Robin', 'robin@strawhatcrew.com', 'robin'),
];

const Rooms: Room[] = [
    new Room('1', 'General'),
    new Room('2', 'Tech Talk'),
    new Room('3', 'Pirates'),
]

const Messages: Message[] = [
  new Message("1", "3", "1", "Hello everyone!", new Date("2026-03-15T10:00:00Z")),
  new Message("2", "3", "2", "Hi Luffy!", new Date("2026-03-15T10:01:00Z")),
  new Message("3", "2", "3", "Anyone here interested in tech?", new Date("2026-03-15T10:02:00Z")),
  new Message("4", "3", "4", "Welcome to the Pirates room!", new Date("2026-03-15T10:03:00Z")),
  new Message("5", "3", "5", "Hello everyone!", new Date("2026-03-15T10:04:00Z")),
  new Message("6", "3", "6", "Hi there!", new Date("2026-03-15T10:05:00Z")),
  new Message("7", "3", "7", "Good to see you all!", new Date("2026-03-15T10:06:00Z")),
];

export const seedData = {
  users: Users,
  rooms: Rooms,
  messages: Messages,
};