import { Request, Response} from "express";
import { RoomRepository } from "../repositories/RoomRepository";

export const getRooms = (req: Request,res: Response) => {

    const roomRepo = new RoomRepository();

    const rooms = roomRepo.getRooms();

    if(rooms.length === 0){
        return res.status(404).json({
            message: "No rooms found."
        })
    }

    return res.status(200).json({
            rooms
        })



}