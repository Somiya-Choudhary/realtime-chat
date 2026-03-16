import { Request, Response } from "express";
import { UserRepository } from "../repositories/UserRepository";

export const signup = (req: Request,res: Response) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const userRepo = new UserRepository();

    try {
        const newUser = userRepo.addUser(name, email,password);
        return res.status(201).json({
            message: 'User Created',
            newUser
        })
    } catch {
        return res.status(400).json({
            error: 'Error saving the user.',
        })
    }

}