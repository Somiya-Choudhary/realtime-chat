import { seedData } from "../seedData/seedData";

export class RoomRepository {

    getRooms(){
        return seedData.rooms;
    }
}