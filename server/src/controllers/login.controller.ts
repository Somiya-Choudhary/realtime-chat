import { Request, Response } from "express";
import { UserRepository } from "../repositories/UserRepository";

export const login = (req: Request ,res: Response) => {
    const email = req.body.email;
    const password = req.body.password;
    const userRepo = new UserRepository();
    const user = userRepo.getUser(email,password);

    if(!user){
        return res.status(401).json({
            message: "Invalid email or password",
        })
    }

    return res.status(200).json({
        message: "Login successful",
        user,
    })

}